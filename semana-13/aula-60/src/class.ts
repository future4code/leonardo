import { User } from './user';
import moment = require("moment");
import { Student } from "./student";
import { Teacher } from "./teacher";

export abstract class Class  {
    students: Student[] = [];
    teachers: Teacher[] = []
    constructor(
        startDate: moment.Moment,
        endDate: moment.Moment,

    ) {

    }
    addUser(user: User): void {
        if( user instanceof Student){
            this.students.push(user)
        }else if ( user instanceof Teacher){
            this.teachers.push(user)
        }else{
            console.log('usuario não aceito')
        }
    }

}