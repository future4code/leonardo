import { Speciality } from './speciality';
import { User } from "./user";
import moment = require("moment");

export class Teacher implements User {
    
    constructor(
        public name: string,
        public email: string,
        public birthday: moment.Moment,
        public speciality: Speciality[]
        ) {

    }
}