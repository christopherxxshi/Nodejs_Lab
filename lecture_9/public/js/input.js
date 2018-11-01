function formSubmit() {
	var phrase = document.getElementById('phrase').value;
	
	if (phrase) {
		var isPalindrome = checkPalindrome(phrase);
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(phrase));
		li.setAttribute("class", isPalindrome ? "is-palindrome" : "not-palindrome");
        
        var attempts = document.getElementById("attempts");

        attempts.appendChild(li);
	}
    else{
        alert("You must enter text.");
    }
	return false;
}

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