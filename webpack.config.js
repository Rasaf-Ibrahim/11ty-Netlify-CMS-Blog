const path = require("path");

module.exports = {
  entry: "./src/assets/js/main.js",
  mode: process.env.NODE_ENV,
  
  output: {
    path: path.resolve(__dirname, "dist", "js"),
    filename: "main.bundle.js",
  },
  
};
