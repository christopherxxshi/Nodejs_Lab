const express = require('express');
const exphbs =  require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const configRoutes = require('./routes');

const app = express();
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
configRoutes(app);

app.listen(3000, () => {
	console.log("Server launched...");
	console.log("Routes running on http://localhost:3000");
	if (process && process.send) process.send({done: true});
});