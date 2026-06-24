const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || "3000";
const outDir = path.join(__dirname, "out");
const indexFile = path.join(outDir, "index.html");

if (!fs.existsSync(indexFile)) {
  console.error("ERROR: out/index.html not found. Run npm run build first.");
  process.exit(1);
}

console.log(`lm3alem starting on 0.0.0.0:${port}`);

const serveBin = path.join(__dirname, "node_modules", "serve", "build", "main.js");
const listen = `tcp://0.0.0.0:${port}`;

const proc = spawn(process.execPath, [serveBin, "out", "-s", "-l", listen], {
  stdio: "inherit",
  env: process.env,
});

proc.on("exit", (code) => process.exit(code ?? 1));
