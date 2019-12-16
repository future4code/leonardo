import { Speciality } from './speciality';
import { MobileClass } from './mobileClass';
import { WebClass } from './webClass';
import { Teacher } from './teacher';
import { JSONFileManager } from './JSONFileManager';
import { Student } from './student';
import moment = require('moment');

const classWeb = new MobileClass(1, moment(), moment(),  )
const student = new Student('leo', 'leo@leo', moment("12-25-1995", "MM-DD-YYYY"), classWeb.classNumber)
const student1 = new Student('jose', 'leo@leo', moment("12-25-1995", "MM-DD-YYYY"), classWeb.classNumber)
const student2 = new Student('maria', 'leo@leo', moment("12-25-1995", "MM-DD-YYYY"), classWeb.classNumber)
const teacher = new Teacher('jose', 'jose@s', moment(), [Speciality.Back])
const teacher2 = new Teacher('laura', 'jose@s', moment(), [Speciality.CSS])
classWeb.addUser(student)
classWeb.addUser(student1)
classWeb.addUser(student2)
classWeb.addUser(teacher)
classWeb.addUser(teacher2)
const file: string = 'classes.json'
const classRepository = new JSONFileManager(file)
const classMobile = new WebClass('Turing', moment("12-25-1995", "MM-DD-YYYY"), moment("12-25-1995", "MM-DD-YYYY") )
const student4 = new Student('leo', 'leo@leo', moment("12-25-1995", "MM-DD-YYYY"), classMobile.patron)
const student5 = new Student('jose', 'leo@leo', moment("12-25-1995", "MM-DD-YYYY"), classMobile.patron)
const student6 = new Student('maria', 'leo@leo', moment("12-25-1995", "MM-DD-YYYY"), classMobile.patron)
classMobile.addUser(student)
classMobile.addUser(student1)
classMobile.addUser(student2)
classMobile.addUser(teacher)
classMobile.addUser(teacher2)
classRepository.saveToJSON(classMobile)
classRepository.saveToJSON(classWeb)
console.log(classRepository.getJSONContent())
