const express = require('express');
const exphbs = require("express-handlebars");
const configRoutes = require("./routes");
const app = express();
const static = express.static(__dirname + "/public");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use("/public", static);

configRoutes(app);

app.listen(3000, () => {
    console.log("Server launched...");
	console.log("Routes running on http://localhost:3000");
});
