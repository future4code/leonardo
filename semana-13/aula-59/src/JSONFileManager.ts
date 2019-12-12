import * as fs from 'fs'

export class JSONFileManager {
    fileName: string;

    constructor(fileName: string) {
        this.fileName = fileName
    }

    saveToJSON(objectToSave: object) {
        const old: any = JSON.parse(fs.readFileSync(this.fileName).toString());
        old.push(objectToSave);
        fs.writeFileSync(this.fileName, JSON.stringify(old, null, 2))
    }

    getJSONContent() {
        return JSON.parse(fs.readFileSync(this.fileName).toString())
    }
}