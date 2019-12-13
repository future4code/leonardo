import { User } from "./user";
import moment = require("moment");


export class Student implements User {

    constructor(
        public name: string,
        public email: string,
        public birthday: moment.Moment,
        public className: any,
        ) {

    }
    
}       