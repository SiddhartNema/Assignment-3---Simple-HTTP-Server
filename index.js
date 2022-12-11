const http = require("http");
const fs = require("fs");
const server = http.createServer();
let name = "Siddhart";
const wstream = fs.createWriteStream("index.html");
wstream.write(
  `<h1> Hello World </h1>
<p> This is ${name}... </p>`,
  () => console.log("first html")
);
wstream.on("error", () => console.log("error"));
wstream.end();
server.on("request", (req, res) => {
  const rstream = fs.createReadStream("index.html", { encoding: "utf-8" });
  rstream.pipe(res);
});
server.listen(5000, () => console.log("server is up on 5000"));
