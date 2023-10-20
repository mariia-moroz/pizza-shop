const mongoose = require("mongoose");

const app = require("./app");
const { DB_HOST, PORT = 8800 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server running. Use our API on port: 8800");
    });
    console.log("Database connection successful");
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });
