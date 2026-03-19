const http = require("http");
const os = require("os");

const hostname = os.hostname();

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`Hello from Web service running on pod ${hostname}\n`);
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
