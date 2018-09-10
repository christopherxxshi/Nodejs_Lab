const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require("fs"));

const getFileAsString = async (path)=>{
    if(!path || typeof path != 'string'){
        throw "You must provide a path!";
    }
    return await fs.readFileAsync(path,'utf-8');

};

const getFileAsJSON = async (path) => {
    try{
        let data = await getFileAsString(path);
        return JSON.parse(data)
    }catch(err){
        throw err;
    }
}

const saveStringToFile = async(path, text) =>{
    if (!path || typeof path !== 'string')
		throw "You must provide a path!";
	if (typeof text !== 'string')
        throw "You must provide text to write as a string!";
        
    await fs.writeFileAsync(path, text);
	return true;
	
}

const saveJSONToFile = async(path, obj) => {
    if (!obj || typeof obj !== 'object')
        throw "You must provide an object to write!";
    try{
        const text = JSON.stringify(obj, null, 4)
        return saveStringToFile(path, text);
    }catch(err){
        throw err;
    }
}
module.exports = {
	getFileAsString: getFileAsString,
	getFileAsJSON: getFileAsJSON,
	saveStringToFile: saveStringToFile,
	saveJSONToFile: saveJSONToFile
};
