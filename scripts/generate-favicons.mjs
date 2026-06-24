import { readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");

const faviconSvg = readFileSync(join(publicDir, "favicon.svg"));
const appleSvg = readFileSync(join(publicDir, "apple-touch-icon.svg"));

const favicon48 = await sharp(faviconSvg).resize(48, 48).png().toBuffer();
const favicon32 = await sharp(faviconSvg).resize(32, 32).png().toBuffer();

await sharp(faviconSvg).resize(48, 48).png().toFile(join(publicDir, "favicon-48x48.png"));
await sharp(faviconSvg).resize(192, 192).png().toFile(join(publicDir, "icon-192.png"));
await sharp(appleSvg).resize(180, 180).png().toFile(join(publicDir, "apple-touch-icon.png"));
await sharp(faviconSvg).resize(32, 32).png().toFile(join(publicDir, "favicon-32x32.png"));

const ico = await pngToIco([favicon48, favicon32]);
writeFileSync(join(publicDir, "favicon.ico"), ico);

console.log("Favicons générés : favicon.ico, favicon-48x48.png, apple-touch-icon.png");
