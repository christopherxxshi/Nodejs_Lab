module.exports = {
    deepEquality: function deepEquality(obj1, obj2){
        if (obj1 === undefined || typeof obj1 !== "object") {
            throw `obj1 is not a object`;
        };
        if (obj2 === undefined || typeof obj2 !== "object") {
            throw `obj2 is not a object`;
        };

        let keyObj1 = Object.keys(obj1);
        let keyObj2 = Object.keys(obj2);
        if(keyObj1.length != keyObj2.length){
            return false;
        };
        // check keys
        for(let i = 0; i < keyObj1.length; i++){
            findFlag = false;
            for(let j = 0; j < keyObj2.length; j++){
                if(keyObj1[i] === keyObj2[j]){
                    findFlag = true;
                    break;
                }
            }
            if(!findFlag) return false;
        }
        
        for(let i = 0; i < keyObj1.length; i++){
            let curKey = keyObj1[i];
            let curVal1 = obj1[curKey];
            let curVal2 = obj2[curKey];
            if(typeof curVal1 !== typeof curVal2) return false;
            if(typeof curVal1 === "object"){
                if(!deepEquality(curVal1, curVal2)) return false;
            }else{
                if(curVal1 !== curVal2) return false;
            }
        };
        
        return true;
    },
    uniqueElements: (arr) => {
        if (arr === undefined || !Array.isArray(arr)) {
            throw `arr is not a array`;
        };
        let hashMap = {};
        for(let i = 0; i < arr.length; i++){
            let cur = arr[i];
            if(!hashMap.hasOwnProperty(cur)) hashMap[cur] = true;
        }

        return Object.keys(hashMap).length
    },
    countOfEachCharacterInString: (str) => {
        if (str === undefined || typeof str !== "string") {
            throw `str is not a string`;
        };
        let charMap = {};
        for(let i = 0; i < str.length; i++){
            let cur = str.charAt(i);
            if(!(cur in charMap)) charMap[cur] = 0;
            charMap[cur]++;
        }
        return charMap;
    }
}