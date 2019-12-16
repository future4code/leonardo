import {ErrorTracker} from "./errorTracker";
import moment = require("moment");

export class ErrorPrinter implements ErrorTracker {

    onError(message: string, date: moment.Moment): void {
        console.log(`${message} - ${date.format('DD/MM/YYYY, hh[h] mm[min]',)}`)
    }
}