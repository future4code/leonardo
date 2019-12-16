import * as moment from "moment";

export class Error {
    constructor(
        public message: string,
        public date: moment.Moment
    ) {

    }

}