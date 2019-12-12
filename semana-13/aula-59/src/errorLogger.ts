import {ErrorTracker} from "./errorTracker";
import * as moment from "moment";
import {JSONFileManager} from "./JSONFileManager";
import {Error} from './error'

export class ErrorLogger implements ErrorTracker {
    protected fileManager: JSONFileManager;
    protected file: string = 'errorLog.json';

    onError(message: string, date: moment.Moment): void {
        const error = new Error(message, date);
        this.fileManager = new JSONFileManager(this.file);
        this.fileManager.saveToJSON(error)

    }

}