const questionOne = function questionOne(arr) {
    var square = arr.map((num) => {
        return num*num;
    });
    var sum = square.reduce((a, b) => {
        return a+b;
    });
    return sum;
}

const questionTwo = function questionTwo(num) { 
    if (num < 0){
        return 0;
    }else if (num < 2){
        return num;
    }else{
        var arr = [0, 1];
        for(let i = 2; i <= num; i++){
            arr.push(arr[i-1]+arr[i-2]);
        }
        return arr.pop();
    }

}

const questionThree = function questionThree(text) {
    var sum = 0;
    const vowels = "aeiouAEIOU";
    for(let i = 0; i < text.length; i++){
        if (vowels.indexOf(text.charAt(i)) != -1 ){
            sum += 1;
        }
    }
    return sum;
}

const questionFour = function questionFour(num) {
    if(num < 0){
        return NaN;
    }
    var result = 1;
    for(let i = num; i >0 ; i--){
        result *= i
    }
    return result;
}

module.exports = {
    firstName: "Shuangwei", 
    lastName: "Shi", 
    studentId: "10427100",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};