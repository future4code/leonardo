import { Class } from "./class";
import moment = require("moment");

export class MobileClass extends Class {
    constructor(
        public classNumber: number,
        public startDate: moment.Moment,
        public endDate: moment.Moment,
        
    ) {
        super(startDate, endDate, )
    }
}