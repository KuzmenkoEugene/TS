class School {
  directions: any = [];

  addDirection(direction: string): any {
    this.directions.push(direction);
  }
}

class Direction {
  levels: any = [];
  _name: string

  constructor(name: string) {
    this._name = name;
  }

  get name(): any {
    return this._name;
  }

  addLevel(level: string): any {
    this.levels.push(level);
  }
}

class Level {
  groups: any = [];
  _name: string;
  _program: string

  constructor(name: string, program: string) {
    this._name = name;
    this._program = program;
  }

  get name(): any {
    return this._name;
  }

  get program(): any {
    return this._program;
  }

  addGroup(group: string): any {
    this.groups.push(group);
  }
}

class Group {
  _students: any = [];
  _directionName: string;
  _levelName: string

  constructor(directionName: string, levelName: string) {
    this._directionName = directionName;
    this._levelName = levelName;
  }

  get students(): any {
    return this._students;
  }

  addStudent(student: string): any {
    this._students.push(student);
  }

  showPerformance() {
    const sortedStudents = this.students.toSorted(
      (a: any, b: any) => b.getPerformanceRating() - a.getPerformanceRating()
    );

    return sortedStudents;
  }
}

class Student {
  grades: any = {};
  attendance: any = [];
  firstName: string;
  lastName: string;
  birthYear: number

  constructor(firstName: string, lastName: string, birthYear: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }

  get fullName(): any {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value: string) {
    [this.lastName, this.firstName] = value.split(" ");
  }

  get age(): any {
    return new Date().getFullYear() - this.birthYear;
  }

  setGrade(subject: string, grade: number): any {
    this.grades[subject] = grade;
  }

  markAttendance(present: number): any {
    this.attendance.push(present);
  }

  getPerformanceRating(): any {
    const gradeValues: any = Object.values(this.grades);

    if (gradeValues.length === 0) return 0;

    const averageGrade: number =
      gradeValues.reduce((sum: number, grade: number) => sum + grade, 0) / gradeValues.length;

    const attendancePercentage: number =
      (this.attendance.filter((present: number) => present).length /
        this.attendance.length) *
      100;

    return (averageGrade + attendancePercentage) / 2;
  }
}
