const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.render("input",{title: "The Best Palindrome Checker in the World!"});
});

module.exports = router;