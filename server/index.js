const http = require("http");
const fs = require("fs");
const PORT = 8000;

http
  .createServer((req, res) => {
    switch (req.url) {
      case "/":
        req.url = "/main.html";
        break;
      case "/cars":
        req.url = "/searchcar.html";
        break;
      default:
        req.url = req.url;
        break;
    }
    const absolutePath = "public" + req.url;
    fs.readFile(absolutePath, (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end("file not found.....");
      } else {
        res.writeHead(200);
        res.end(data);
      }
    });
  })
  .listen(PORT, "localhost", () => {
    console.log("listening on port " + PORT);
  });
