const fileData = require("./fileData");
const textMetrics = require("./textMetrics");
const fs = require('fs');

async function main() {
    for(let i = 1; i < 4; i++){
        const existFlag = fs.existsSync(`./chapter${i}.result.json`);
        if(existFlag){
            try{
                console.log(`chapter${i}.result.json Exists!`);
                console.log(`Reading chapter${i}.result.json`);
                let JsonData = await fileData.getFileAsJSON(`./chapter${i}.result.json`);
                console.log(JsonData);
            }catch(err){
                console.log(err);
            }
        }else{
            try{
                console.log(`Reading chapter${i}.txt`);
                let content = await fileData.getFileAsString(`./chapter${i}.txt`);
                let result = textMetrics.createMetrics(content);
                console.log(`Writing chapter${i}.result.json`);
                await fileData.saveJSONToFile(`./chapter${i}.result.json`, result);
            }catch(err){
                console.log(err);
            }
        }
    }
}
main()
