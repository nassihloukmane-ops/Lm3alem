/**
 * Prépare out/ pour Hostinger :
 * - renomme _next → next (Hostinger renvoie souvent 404 sur les dossiers _*)
 * - recrée un zip avec chemins Unix
 */
import { readdir, readFile, writeFile, rename, rm, copyFile, stat } from "node:fs/promises";
import { join, extname } from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(new URL("..", import.meta.url)));
const outDir = join(root, "out");
const zipPath = join(root, "lm3alem-public_html.zip");
const textExt = new Set([
  ".html",
  ".js",
  ".css",
  ".txt",
  ".json",
  ".xml",
  ".webmanifest",
  ".svg",
  ".map",
]);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}

async function main() {
  await stat(join(outDir, "index.html"));

  await copyFile(join(root, "public", ".htaccess"), join(outDir, ".htaccess"));

  const nextDir = join(outDir, "_next");
  const renamed = join(outDir, "next");
  try {
    await stat(nextDir);
    await rm(renamed, { recursive: true, force: true });
    await rename(nextDir, renamed);
    console.log("Renamed out/_next → out/next");
  } catch {
    await stat(renamed);
    console.log("out/next already present");
  }

  const files = await walk(outDir);
  let patched = 0;
  for (const file of files) {
    if (!textExt.has(extname(file).toLowerCase())) continue;
    const before = await readFile(file, "utf8");
    if (!before.includes("/_next/")) continue;
    await writeFile(file, before.replaceAll("/_next/", "/next/"), "utf8");
    patched += 1;
  }
  console.log(`Patched ${patched} files (/_next/ → /next/)`);

  await rm(zipPath, { force: true });
  execFileSync("tar", ["-a", "-c", "-f", zipPath, "-C", outDir, "."], {
    stdio: "inherit",
  });
  console.log(`Created ${zipPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
