var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var TodoStatus;
(function (TodoStatus) {
    TodoStatus["Pending"] = "Pending";
    TodoStatus["Completed"] = "Completed";
})(TodoStatus || (TodoStatus = {}));
var Note = /** @class */ (function () {
    function Note(id, title, text, noteType) {
        if (!title) {
            throw new Error("Title is empty");
        }
        if (!text) {
            throw new Error("Text is empty");
        }
        this.id = id;
        this.title = title;
        this.text = text;
        this.status = TodoStatus.Pending;
        this.noteType = noteType;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
    Note.prototype.markAsCompleted = function () {
        this.status = TodoStatus.Completed;
        this.updatedAt = new Date();
    };
    Note.prototype.edit = function (field, newValue, confirm) {
        if (confirm === void 0) { confirm = true; }
        if (this.noteType === "СonfirmationOfEditing" && !confirm) {
            throw new Error("Editing requires confirmation");
        }
        this[field] = newValue;
        this.updatedAt = new Date();
    };
    return Note;
}());
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.list = [];
        this.nextId = 1;
    }
    TodoList.prototype.addNote = function (title, text, noteType) {
        if (noteType === void 0) { noteType = "Default"; }
        if (!title || !text) {
            throw new Error("Title and text cannot be empty");
        }
        var newNote = {
            id: this.nextId++,
            title: title,
            text: text,
            status: TodoStatus.Pending,
            noteType: noteType,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        this.list.push(newNote);
        return newNote;
    };
    TodoList.prototype.editNote = function (id, field, newValue, confirm) {
        if (confirm === void 0) { confirm = true; }
        var note = null;
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i].id === id) {
                note = this.list[i];
                break;
            }
        }
        if (!note) {
            return "Note not found";
        }
        if (note.noteType === "СonfirmationOfEditing" && !confirm) {
            throw new Error("Editing requires confirmation");
        }
        note[field] = newValue;
        note.updatedAt = new Date();
        return this.list;
    };
    TodoList.prototype.deleteNote = function (id) {
        var noteIndex = -1;
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i].id === id) {
                noteIndex = i;
                break;
            }
        }
        if (noteIndex !== -1) {
            return this.list.splice(noteIndex, 1)[0];
        }
        return "Note not found";
    };
    TodoList.prototype.getNote = function (id) {
        var note = null;
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i].id === id) {
                note = this.list[i];
                break;
            }
        }
        return note ? note : "Note not found";
    };
    TodoList.prototype.getAllNotes = function () {
        return this.list;
    };
    TodoList.prototype.getNotesStats = function () {
        var total = this.list.length;
        var pending = this.list.filter(function (note) { return note.status === TodoStatus.Pending; }).length;
        return "Total: ".concat(total, ", Pending: ").concat(pending);
    };
    TodoList.prototype.markAsCompleted = function (id) {
        var note = null;
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i].id === id) {
                note = this.list[i];
                break;
            }
        }
        if (!note) {
            return "Note not found";
        }
        note.status = TodoStatus.Completed;
        note.updatedAt = new Date();
        return this.list;
    };
    return TodoList;
}());
var SearchableTodoList = /** @class */ (function (_super) {
    __extends(SearchableTodoList, _super);
    function SearchableTodoList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SearchableTodoList.prototype.findNotesByTitleOrText = function (searchText) {
        var lowerSearchText = searchText.toLowerCase();
        return this.getAllNotes().filter(function (note) {
            return note.title.toLowerCase().indexOf(lowerSearchText) !== -1 ||
                note.text.toLowerCase().indexOf(lowerSearchText) !== -1;
        });
    };
    return SearchableTodoList;
}(TodoList));
var SortableTodoList = /** @class */ (function (_super) {
    __extends(SortableTodoList, _super);
    function SortableTodoList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SortableTodoList.prototype.sortNotes = function (sortBy) {
        var notes = __spreadArray([], this.getAllNotes(), true);
        if (sortBy === "status") {
            return notes.sort(function (a, b) {
                if (a.status > b.status)
                    return 1;
                if (a.status < b.status)
                    return -1;
                return 0;
            });
        }
        else if (sortBy === "createdAt") {
            return notes.sort(function (a, b) { return a.createdAt.getTime() - b.createdAt.getTime(); });
        }
        return notes;
    };
    return SortableTodoList;
}(TodoList));
