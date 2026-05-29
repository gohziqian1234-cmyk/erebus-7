const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = Number(process.argv[2] || 8787);
const mime = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".mp4": "video/mp4",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
};

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://127.0.0.1:${port}`);
  let file = decodeURIComponent(url.pathname);
  if (file === "/" || file === "") file = "/parasite_protocol_next_level.html";
  const full = path.normalize(path.join(root, file));

  if (!full.startsWith(root)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(full, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    res.writeHead(200, {
      "Content-Type": mime[path.extname(full).toLowerCase()] || "application/octet-stream",
      "Cache-Control": "no-store, max-age=0",
      "Pragma": "no-cache",
      "Expires": "0"
    });
    res.end(data);
  });
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Parasite Protocol running at http://127.0.0.1:${port}/parasite_protocol_next_level.html`);
});
