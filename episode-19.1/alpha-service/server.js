const http = require("http");
const os = require("os");

const hostname = os.hostname();

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      message: `Hello from API service running on pod ${hostname}`,
      version: "alpha",
    }),
  );
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
