const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || "3000";
const outDir = path.join(__dirname, "out");

if (!fs.existsSync(path.join(outDir, "index.html"))) {
  console.error("ERROR: out/index.html not found. Run npm run build first.");
  process.exit(1);
}

console.log(`lm3alem static server starting on 0.0.0.0:${port}`);

const serveBin = path.join(__dirname, "node_modules", "serve", "build", "main.js");

const proc = spawn(process.execPath, [serveBin, "out", "-s", "-l", port], {
  stdio: "inherit",
  env: { ...process.env, PORT: port },
});

proc.on("exit", (code) => process.exit(code ?? 1));
