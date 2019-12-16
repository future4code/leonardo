
import {Class} from "./class";
import moment = require("moment");

export class WebClass extends Class{
    constructor(
        public patron: string,
        public startDate: moment.Moment,
        public endDate: moment.Moment,
        
    ) {
        super(startDate, endDate)
    }
}