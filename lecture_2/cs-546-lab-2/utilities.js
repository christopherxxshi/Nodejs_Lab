module.exports = {
    deepEquality: (obj1, obj2) => {
        if (obj1 === undefined || typeof obj1 !== "object") {
            throw `obj1 is not a object`;
        };
        if (obj2 === undefined || typeof obj2 !== "object") {
            throw `obj2 is not a object`;
        };

        let keyObj1 = Object.keys(obj1);
        let keyObj2 = Object.keys(obj2);
        if(keyObj1.sort().toString() != keyObj2.sort().toString()){
            return false;
        };
        
        for(let i = 0; i < keyObj1.length; i++){
            let curKey = keyObj1[i];
            if(obj1[curKey] != obj2[curKey]) return false;
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
            if(!charMap.hasOwnProperty(cur)) charMap[cur] = 0;
            charMap[cur]++;
        }
        return charMap;
    }
}