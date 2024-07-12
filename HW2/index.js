var School = /** @class */ (function () {
    function School() {
        this._areas = [];
        this._lecturers = [];
    }
    School.prototype.addArea = function (area) {
        this._areas.push(area);
    };
    School.prototype.removeArea = function (areaName) {
        this._areas = this._areas.filter(function (area) { return area !== areaName; });
    };
    School.prototype.addLecturer = function (lecturers) {
        this._lecturers.push(lecturers);
    };
    School.prototype.removeLecturer = function (name) {
        this._lecturers = this._lecturers.filter(function (lecturer) { return lecturer.name !== name; });
    };
    Object.defineProperty(School.prototype, "areas", {
        get: function () {
            return this._areas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(School.prototype, "lecturers", {
        get: function () {
            return this._lecturers;
        },
        enumerable: false,
        configurable: true
    });
    return School;
}());
var Area = /** @class */ (function () {
    function Area(name) {
        this._levels = [];
        this._name = '';
        this._name = name;
    }
    Area.prototype.addLevel = function (level) {
        this._levels.push(level);
    };
    Area.prototype.removeLevel = function (levelValue) {
        this._levels = this._levels.filter(function (level) { return level !== levelValue; });
    };
    Object.defineProperty(Area.prototype, "levels", {
        get: function () {
            return this._levels;
        },
        enumerable: false,
        configurable: true
    });
    return Area;
}());
var Level = /** @class */ (function () {
    function Level(name, description) {
        this._groups = [];
        this._name = '';
        this._description = '';
        this._name = name;
        this._description = description;
    }
    Level.prototype.addGroup = function (groups) {
        this._groups.push(groups);
    };
    Level.prototype.removeGroup = function (valueGroup) {
        this._groups = this._groups.filter(function (group) { return group !== valueGroup; });
    };
    Object.defineProperty(Level.prototype, "groups", {
        get: function () {
            return this._groups;
        },
        enumerable: false,
        configurable: true
    });
    return Level;
}());
var Group = /** @class */ (function () {
    function Group(directionName, levelName) {
        this._area = '';
        this._status = '';
        this._students = [];
        this._directionName = directionName;
        this._levelName = levelName;
    }
    Group.prototype.addStudent = function (name) {
        this._students.push(name);
    };
    Group.prototype.removeStudent = function (name) {
        this._students = this._students.filter(function (student) { return student != name; });
    };
    Object.defineProperty(Group.prototype, "status", {
        set: function (status) {
            this._status = status;
        },
        enumerable: false,
        configurable: true
    });
    Group.prototype.showPerformance = function () {
        var sortedStudents = this._students.toSorted(function (a, b) { return b.getPerformanceRating() - a.getPerformanceRating(); });
        return sortedStudents;
    };
    return Group;
}());
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
