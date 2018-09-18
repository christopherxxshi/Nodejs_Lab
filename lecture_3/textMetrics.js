createMetrics = (text)=> {
    if(typeof text != 'string'){
        throw "You must provide a string!";
    }
    var result = {
        totalLetters: 0,
        totalNonLetters: 0,
        totalVowels:  0,
        totalConsonants: 0,
        totalWords: 0,
        uniqueWords: 0,
        longWords: 0,
        averageWordLength: 0,
        wordOccurrences: {}
    };
    if(text == ""){
        return result;
    }
    var curWord = "";
    var wordList = [];
    for(let i = 0; i < text.length; i++){
        let curLetter = text[i];
        let curAscCode = curLetter.charCodeAt();
        if((curAscCode>= 65 && curAscCode<= 90) || (curAscCode>= 97 && curAscCode<= 122)){
            result.totalLetters += 1;
            curWord = curWord + curLetter;
            if ("aeiouAEIOU".indexOf(curLetter) != -1){
                result.totalVowels += 1;
            }
            else{
                result.totalConsonants += 1;
            }
        }else{
            result.totalNonLetters += 1;
            if (curWord != ""){
                wordList.push(curWord.toLowerCase());
                curWord = "";
            }
        }
    };
    if (curWord != "") wordList.push(curWord);

    wordList.forEach((item)=>{
        if(!result.wordOccurrences.hasOwnProperty(item)) result.wordOccurrences[item] = 0;
        result.wordOccurrences[item]++;
    })

    let totalLength = 0;
    for(let key in result.wordOccurrences) {
        result.uniqueWords += 1;
        if(key.length >= 6){
            result.longWords += result.wordOccurrences[key];
        }
        totalLength = totalLength +  key.length * result.wordOccurrences[key];
        result.totalWords += result.wordOccurrences[key];
    }
    result.averageWordLength = totalLength / result.totalWords;

    return result;
};

module.exports.createMetrics = createMetrics;