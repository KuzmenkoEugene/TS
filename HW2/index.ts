type Lecturers = {
  name: string,
  surname: string,
  position: string,
  company: string,
  experience: string,
  courses: string,
  contacts: string
}

class School {

  public _areas: string[] = [];
  public _lecturers: Lecturers[] = []; 

  addArea(area: string): void {
    this._areas.push(area)
  }

  removeArea(areaName: string): void {
    this._areas = this._areas.filter(area => area !== areaName);
  }

  addLecturer(lecturers: Lecturers): void {
    this._lecturers.push(lecturers)
  }

  removeLecturer(name: string): void {
    this._lecturers = this._lecturers.filter(lecturer => lecturer.name !== name);
  }

  get areas(): string[] {
    return this._areas;
  }

  get lecturers(): Lecturers[] {
    return this._lecturers;
  }
}

class Area {
  public _levels: string[] = [];
  public _name: string = ''

  constructor(name: string) {
    this._name = name;
  }

  addLevel(level: string): void {
    this._levels.push(level)
  }

  removeLevel(levelValue: string): void {
    this._levels = this._levels.filter(level => level !== levelValue);
  }

  get levels(): string[] {
    return this._levels
  }
}

class Level {

  public _groups: string[] = [];
  public _name: string = '';
  public _description: string = ''

  constructor(name: string, description: string) {
    this._name = name;
    this._description = description;
  }

  addGroup(groups: string): void {
    this._groups.push(groups)
  }

  removeGroup(valueGroup: string): void {
    this._groups = this._groups.filter(group => group !== valueGroup);
  }

  get groups(): string[] {
    return this._groups
  }
}

class Group {

  public _area: string = '';
  public _status: string = '';
  public _students: string[] = []; 
  public _directionName: string;
  public _levelName: string 

  constructor(directionName: string, levelName: string) {
    this._directionName = directionName;
    this._levelName = levelName;
  }

  addStudent(name: string): void {
    this._students.push(name)
  }

  removeStudent(name: string): void {
    this._students = this._students.filter(student => student != name)
  }

  set status(status: string) {
     this._status = status
  }

  showPerformance() {
    const sortedStudents: string[] = this._students.toSorted((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
    return sortedStudents;
  }
}

class Student {

  public _firstName: string;
  public _lastName: string;
  public _birthYear: number;
  public _grades: number[] = []; 
  public _visits: number[] = []; 

  constructor(firstName: string, lastName: string, birthYear: number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthYear = birthYear;
  }

  get fullName(): string {
    return `${this._lastName} ${this._firstName}`;
  }

  set fullName(value: string) {
    [this._lastName, this._firstName] = value.split(' ');
  }

  set grades(value: number) {
    this._grades.push(value)
  }

  set visits(value: number) {
    this._visits.push(value)
  }

  get age(): number {
    return new Date().getFullYear() - this._birthYear;
  }

  getPerformanceRating(): number {
    const gradeValues: number[] = Object.values(this._grades);

    if (!gradeValues.length) return 0;

    const averageGrade: number = gradeValues.reduce((sum: number, grade: number) => sum + grade, 0) / gradeValues.length;
    const attendancePercentage: number = (this._visits.filter(present => present).length / this._visits.length) * 100;

    return (averageGrade + attendancePercentage) / 2;
  }
}

