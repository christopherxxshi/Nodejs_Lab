const express = require("express");
const router = express.Router();
const userData = require("../data/user");
const uuid = require('uuid/v4');

router.post("/", async (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	
	let error_message = "Incorrect username or password."
	let authenticated = false;
	try {
		authenticated = await userData.checkPassword(username, password);
	} catch (e) {
		error_message = "Empty username or password."
	}

	if (authenticated) {
		var sid = uuid();
		res.cookie("AuthCookie", sid);
		userData.addUserSessionID(username, sid);

		res.redirect("/private");
	} else {
		var data = {
			title: "Home",
			error: error_message
		}
		res.render("index", data);
	}
});

module.exports = router;