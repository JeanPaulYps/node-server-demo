const http = require("http");

const HOST = "localhost";
const PORT = 8000;

const requestListener = (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(`<html><body><h1>This is HTML</h1></body></html>`);
}

const server = http.createServer(requestListener);
server.listen(PORT, HOST, () => {
    console.log(`Server is running on  http://${HOST}:${PORT}`)
})

/* Aca se incluye el router de la aplicacion */
/* Ver mas info aca: https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module */