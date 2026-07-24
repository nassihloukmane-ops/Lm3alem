/**
 * Prépare out/ pour Hostinger :
 * - renomme _next → next (Hostinger renvoie souvent 404 sur les dossiers _*)
 * - patch les URLs /_next/ → /next/
 * - zip optionnel (tar Windows)
 */
import {
  readdir,
  readFile,
  writeFile,
  rename,
  rm,
  cp,
  copyFile,
  stat,
  access,
} from "node:fs/promises";
import { constants } from "node:fs";
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

async function exists(path) {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

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

/** Windows/OneDrive : rename de dossier échoue souvent → fallback copy+delete */
async function moveDir(from, to) {
  await rm(to, { recursive: true, force: true });
  try {
    await rename(from, to);
  } catch (err) {
    console.warn(`rename échoué (${err.code || err.message}), fallback cp+rm…`);
    await cp(from, to, { recursive: true });
    await rm(from, { recursive: true, force: true });
  }
}

async function main() {
  await stat(join(outDir, "index.html"));

  await copyFile(join(root, "public", ".htaccess"), join(outDir, ".htaccess"));

  const nextDir = join(outDir, "_next");
  const renamed = join(outDir, "next");

  if (await exists(nextDir)) {
    await moveDir(nextDir, renamed);
    console.log("Renamed out/_next → out/next");
  } else if (await exists(renamed)) {
    console.log("out/next already present");
  } else {
    throw new Error("Ni out/_next ni out/next après le build Next.js");
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
  try {
    execFileSync("tar", ["-a", "-c", "-f", zipPath, "-C", outDir, "."], {
      stdio: "inherit",
    });
    console.log(`Created ${zipPath}`);
  } catch {
    console.warn("Zip ignoré (tar indisponible) — out/ est prêt pour scp.");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
