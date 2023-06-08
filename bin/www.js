const app = require("../app");
const debug = require("debug")("backend:server");
const http = require("http");

// specify port
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

const server = http.createServer(app);

// check and convert port
function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

// handling errors on the server
server.on("error", onError);

// handles when the server starts listening on the specified port
server.on("listening", onListening);

// handle errors that occur when running the server
function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }
}

// displays a message when the server starts listening on the specified port
function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe" + addr : "port" + addr.port;
  debug("Listening on" + bind);
  console.log(`Listening on ${addr.port}...`);
}

// call the listen method on the server object to start the server and listen on the port
server.listen(port);
