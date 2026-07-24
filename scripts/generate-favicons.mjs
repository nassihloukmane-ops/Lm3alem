import { writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");
const logoPath = join(publicDir, "logo.png");

/** Recadre sur l’icône arrondie et génère les tailles favicon / PWA. */
async function resizeLogo(size) {
  return sharp(logoPath)
    .resize(size, size, { fit: "cover", position: "centre" })
    .png()
    .toBuffer();
}

const favicon16 = await resizeLogo(16);
const favicon32 = await resizeLogo(32);
const favicon48 = await resizeLogo(48);

writeFileSync(join(publicDir, "favicon-16x16.png"), favicon16);
writeFileSync(join(publicDir, "favicon-32x32.png"), favicon32);
writeFileSync(join(publicDir, "favicon-48x48.png"), favicon48);

await sharp(logoPath)
  .resize(180, 180, { fit: "cover", position: "centre" })
  .png()
  .toFile(join(publicDir, "apple-touch-icon.png"));
await sharp(logoPath)
  .resize(192, 192, { fit: "cover", position: "centre" })
  .png()
  .toFile(join(publicDir, "icon-192.png"));
await sharp(logoPath)
  .resize(512, 512, { fit: "cover", position: "centre" })
  .png()
  .toFile(join(publicDir, "icon-512.png"));

/** ICO multi-résolution (16 / 32 / 48) — recommandé navigateurs + Google */
const ico = await pngToIco([favicon16, favicon32, favicon48]);
writeFileSync(join(publicDir, "favicon.ico"), ico);

/**
 * Open Graph 1200×630 PNG (les réseaux sociaux gèrent mal le SVG).
 * Fond marque + logo + textes FR.
 */
const ogW = 1200;
const ogH = 630;
const logoSize = 160;
const logoBuf = await sharp(logoPath)
  .resize(logoSize, logoSize, { fit: "cover", position: "centre" })
  .png()
  .toBuffer();

const overlaySvg = Buffer.from(`
<svg width="${ogW}" height="${ogH}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0D0B21"/>
      <stop offset="100%" stop-color="#1A1033"/>
    </linearGradient>
  </defs>
  <rect width="${ogW}" height="${ogH}" fill="url(#bg)"/>
  <circle cx="980" cy="120" r="180" fill="#BE185D" opacity="0.18"/>
  <circle cx="180" cy="520" r="140" fill="#F59E0B" opacity="0.12"/>
  <text x="600" y="400" text-anchor="middle" fill="#FFFFFF"
    font-family="system-ui,Segoe UI,sans-serif" font-size="64" font-weight="800">lm3alem</text>
  <text x="600" y="460" text-anchor="middle" fill="#F9A8D4"
    font-family="system-ui,Segoe UI,sans-serif" font-size="28" font-weight="500">
    Services à domicile avec artisans vérifiés
  </text>
  <text x="600" y="520" text-anchor="middle" fill="#FFFFFF" opacity="0.7"
    font-family="system-ui,Segoe UI,sans-serif" font-size="20">
    Plombier · Électricien · Artisans au Maroc
  </text>
</svg>
`);

await sharp(overlaySvg)
  .composite([
    {
      input: logoBuf,
      top: Math.round((ogH - logoSize) / 2 - 70),
      left: Math.round((ogW - logoSize) / 2),
    },
  ])
  .png({ quality: 90, compressionLevel: 9 })
  .toFile(join(publicDir, "og-image.png"));

console.log(
  "Assets SEO générés : favicon.ico (16/32/48), favicon-16/32/48, apple-touch-icon, icon-192/512, og-image.png"
);
