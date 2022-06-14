const { HOST, PORT } = require("./config/vars.js");
const app = require("./config/express");

// listen to requests
app.listen(PORT, () => {
  console.log(`listening on ${HOST}:${PORT}`);
});

/*
// exports express
// @public
*/
module.exports = app;
