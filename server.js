const http = require("http");
const port = process.env.port || 1337;

const app = http.createServer(function requestListener(req, res) {
	res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8"});
	res.end("UwU");
});

app.listen(port);

console.log(`listening on ${port}`);