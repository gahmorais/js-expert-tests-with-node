import server from "./server.js";

server.listen(3000).on("listening", () => {
  console.log(`running at: ${server.address().port}`);
});
