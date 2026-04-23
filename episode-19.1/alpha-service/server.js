const http = require("http");
const os = require("os");

const hostname = os.hostname();
const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      message: `Hello from API service running on pod ${hostname}`,
      version: process.env.VERSION || "alpha",
    }),
  );
});

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});
