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

const favicon48 = await resizeLogo(48);
const favicon32 = await resizeLogo(32);

writeFileSync(join(publicDir, "favicon-48x48.png"), favicon48);
writeFileSync(join(publicDir, "favicon-32x32.png"), favicon32);
await sharp(logoPath)
  .resize(192, 192, { fit: "cover", position: "centre" })
  .png()
  .toFile(join(publicDir, "icon-192.png"));
await sharp(logoPath)
  .resize(180, 180, { fit: "cover", position: "centre" })
  .png()
  .toFile(join(publicDir, "apple-touch-icon.png"));
await sharp(logoPath)
  .resize(512, 512, { fit: "cover", position: "centre" })
  .png()
  .toFile(join(publicDir, "icon-512.png"));

const ico = await pngToIco([favicon48, favicon32]);
writeFileSync(join(publicDir, "favicon.ico"), ico);

console.log(
  "Favicons générés depuis logo.png : favicon.ico, favicon-32/48, apple-touch-icon, icon-192/512"
);
