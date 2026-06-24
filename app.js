const http = require("http");
const fs = require("fs");
const path = require("path");
const handler = require("serve-handler");

const port = Number(process.env.PORT) || 3000;
const outDir = path.join(__dirname, "out");
const indexFile = path.join(outDir, "index.html");

if (!fs.existsSync(indexFile)) {
  console.error("ERROR: out/index.html not found.");
  console.error("Expected path:", indexFile);
  process.exit(1);
}

const server = http.createServer((request, response) => {
  return handler(request, response, {
    public: outDir,
    trailingSlash: true,
    rewrites: [{ source: "**", destination: "/index.html" }],
  });
});

server.listen(port, "0.0.0.0", () => {
  console.log(`lm3alem ready at http://0.0.0.0:${port}`);
});

server.on("error", (error) => {
  console.error("Server failed to start:", error);
  process.exit(1);
});
