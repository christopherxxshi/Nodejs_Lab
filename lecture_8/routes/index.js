const resultRoutes = require("./result");
const inputRoutes = require("./input");
const path = require("path");


const constructorMethod = app => {
  app.use("/", inputRoutes);
  app.use("/result", resultRoutes);
  app.use("*", (req, res) => {
    res.status(404).render("error", {
      title:"Errot 404",
      description: "Page not found"
    });
  });
};

module.exports = constructorMethod;
