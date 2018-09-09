const bluebird = require("bluebird");
const Promise = bluebird.Promise;

const fs = bluebird.promisifyAll(require("fs"));

getFileAsString = async (path)=>{
    if(!path || typeof path != 'string'){
        throw "You must provide a path!";
    }
    const data = await fs.readFileAsync(path,'utf-8').catch((err)=>{
        throw err;
    })
    return data;
};

getFileAsJSON = async (path) => {
    return getFileAsString(path)
        .then((data)=>{
            try{
                return JSON.parse(data);
            }catch(err){
                throw(err);
            }
        })
        .catch((err)=>{
            throw err;
        })
}

saveStringToFile = async(path, text) =>{
    if (!path || typeof path !== 'string')
		throw "You must provide a path!";
	
	if (typeof text !== 'string')
		throw "You must provide text to write as a string!";

	await fs.writeFileAsync(path, text).catch((err)=>{
        throw err;
    });
	return true;
}

saveJSONToFile = async(path, obj) => {
    if (!obj || typeof obj !== 'object')
        throw "You must provide an object to write!";
    try{
        const text = JSON.stringify(obj, null, 4);
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
