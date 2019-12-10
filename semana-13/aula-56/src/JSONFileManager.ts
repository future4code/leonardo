import * as fs from 'fs'

export class JSONFileManager {
    fileName: string;
    constructor(fileName: string) {
        this.fileName = fileName
    }

    saveToJSON(objectToSave: object) {
        fs.writeFileSync(this.fileName, JSON.stringify(objectToSave, null, 2))
    }

    getJSONContent() {
        return JSON.parse(fs.readFileSync(this.fileName).toString())
    }
}