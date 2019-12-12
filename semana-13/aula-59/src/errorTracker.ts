import * as moment from "moment";

export interface ErrorTracker {
    onError(message: string, date: moment.Moment): void
}