const express = require("express");
const router = express.Router();

router.post("/", (req, res)=>{
    let rawText = req.body['text-to-test']
    if(!rawText){
        res.status(404).render("error", {
            title : "Error 404",
            description : "You must provide a string to test."
        });
    }else{
        let flag = checkPalindrome(rawText);
        var returnData = {
            title: "The Palindrome Results!",
			text: rawText,
			palindrome: flag,
			class: flag? "success":"failure",
        }
        res.render("result", returnData);
    }
});

function checkPalindrome (inputText) {
    let text = inputText.toLowerCase();
    let left = 0;
    let right = text.length - 1;
    const letterNumber = /^[0-9a-zA-Z]+$/
    while( left < right ){
        while(!text.charAt(left).match(letterNumber) && left < right){
            left++;
        }
        while(!text.charAt(right).match(letterNumber) && left < right){
            right--;
        }
        if(left < right && text.charAt(left) !== text.charAt(right)){
            return false;
        }else{
            left++;
            right--;
        }
    }
    return true;
}

module.exports = router;