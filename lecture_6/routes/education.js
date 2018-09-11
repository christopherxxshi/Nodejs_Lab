const express = require('express');
const router = express.Router();
const education = require("../data/education.json");

router.get('/', (req, res)=>{
    res.json(education);
});

module.exports = router;