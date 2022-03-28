const fs = require('fs')

const readJSONFile = (url:string, encoding:string = 'utf8'):Array<any> => {
    let fileContent =  fs.readFileSync(url, {encoding:encoding, flag:'r'})
    return JSON.parse(fileContent)
}

export { readJSONFile }