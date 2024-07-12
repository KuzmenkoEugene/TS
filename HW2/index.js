// type Lecturers = {
//   name: string,
//   surname: string,
//   position: string,
//   company: string,
//   experience: string,
//   courses: string,
//   contacts: string
// }
// class School {
//   public _areas: string[] = [];
//   public _lecturers: Lecturers[] = []; 
//   addArea(area: string): void {
//     this._areas.push(area)
//   }
//   removeArea(areaName: string): void {
//     this._areas = this._areas.filter(area => area !== areaName);
//   }
//   addLecturer(lecturers: Lecturers): void {
//     this._lecturers.push(lecturers)
//   }
//   removeLecturer(name: string): void {
//     this._lecturers = this._lecturers.filter(lecturer => lecturer.name !== name);
//   }
//   get areas(): string[] {
//     return this._areas;
//   }
//   get lecturers(): Lecturers[] {
//     return this._lecturers;
//   }
// }
// class Area {
//   public _levels: string[] = [];
//   public _name: string = ''
//   constructor(name: string) {
//     this._name = name;
//   }
//   addLevels(level: string): void {
//     this._levels.push(level)
//   }
//   removeLevels(levelValue: string): void {
//     this._levels = this._levels.filter(level => level !== levelValue);
//   }
//   get levels(): string[] {
//     return this._levels
//   }
// }
// class Level {
//   public _groups: string[] = [];
//   public _name: string = '';
//   constructor(name: string, groups: string[]) {
//     this._name = name;
//     this._groups = groups;
//   }
//   addGroups(groups: string): void {
//     this._groups.push(groups)
//   }
//   removeGroups(): void {
//     this._groups.shift()
//   }
//   get groups(): string[] {
//     return this._groups
//   }
// }
// class Group {
//   // implement getters for fields and 'add/remove student' and 'set status' methods
//   public _area: string[] = [];
//   public _status: string = '';
//   public _students = []; // Modify the array so that it has a valid toSorted method*
//   public _directionName: string;
//   public _levelName: string 
//   constructor(directionName: string, levelName: string) {
//     this._directionName = directionName;
//     this._levelName = levelName;
//   }
//   addStudent(directionName: string, levelName: string) {
//     this._students.push()
//   }
//   removeStudent(directionName: string, levelName: string) {
//     this._students.push()
//   }
//   set status(status: string) {
//      this._status = status
//   }
//   showPerformance() {
//     const sortedStudents = this._students.toSorted((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
//     return sortedStudents;
//   }
// }
var Student = /** @class */ (function () {
    function Student(firstName, lastName, birthYear) {
        this._grades = [];
        this._visits = [];
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthYear = birthYear;
    }
    Object.defineProperty(Student.prototype, "fullName", {
        get: function () {
            return "".concat(this._lastName, " ").concat(this._firstName);
        },
        set: function (value) {
            var _a;
            _a = value.split(' '), this._lastName = _a[0], this._firstName = _a[1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "grades", {
        set: function (value) {
            this._grades.push(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "visits", {
        set: function (value) {
            this._visits.push(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "age", {
        get: function () {
            return new Date().getFullYear() - this._birthYear;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.getPerformanceRating = function () {
        var gradeValues = Object.values(this._grades);
        if (!gradeValues.length)
            return 0;
        var averageGrade = gradeValues.reduce(function (sum, grade) { return sum + grade; }, 0) / gradeValues.length;
        var attendancePercentage = (this._visits.filter(function (present) { return present; }).length / this._visits.length) * 100;
        return (averageGrade + attendancePercentage) / 2;
    };
    return Student;
}());
var studentPerson = new Student('Eugene', 'Kuzmenko', 1994);
console.log(studentPerson.fullName);
studentPerson.grades = 100, 22, 100, 100;
studentPerson.visits = 43, 10, 55, 100;
console.log(studentPerson.getPerformanceRating());
