import fs from 'fs'
let filePath = ''
let env = 'test'
export class BaseClass{
    
    getFilePath(){
        if(env.toUpperCase() === 'TEST'){
            filePath = 'setup/config/test-config.json'
        }else {
            filePath = 'setup/config/stage-config.json'
        }
       // console.log('config filePath: '+filePath)
        return filePath
    }

    getTestData(){
        filePath = 'setup/config/testdata.json'
        //console.log("testdata filepath: "+filePath)
        return filePath
    }

    readData(filePath: fs.PathOrFileDescriptor) {
        const jsonString = fs.readFileSync(filePath)
        const  data = JSON.parse(jsonString.toString())
        return data
    }

        
    writeData(key: string | number, value: any, fileName: fs.PathOrFileDescriptor){
        let content = JSON.parse(fs.readFileSync(fileName, 'utf8'));
        content[key] = value
        try{
        fs.writeFileSync(fileName, JSON.stringify(content, null, 4));
        } catch (err) {
        console.error('Error while writing into file', err)
        }
    
    }

}
module.exports = { BaseClass }