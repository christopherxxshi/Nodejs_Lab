const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require("fs"));

const getFileAsString = async (path)=>{
    if(!path || typeof path != 'string'){
        throw "You must provide a path!";
    }
    const data = await fs.readFileAsync(path,'utf-8');
    return data;
};

const getFileAsJSON = async (path) => {
    return getFileAsString(path)
        .then((data)=>{
            return JSON.parse(data);
        })
        .catch((err)=>{
            throw err;
        })
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
    return saveStringToFile(path, text = JSON.stringify(obj, null, 4));
}
module.exports = {
	getFileAsString: getFileAsString,
	getFileAsJSON: getFileAsJSON,
	saveStringToFile: saveStringToFile,
	saveJSONToFile: saveJSONToFile
};