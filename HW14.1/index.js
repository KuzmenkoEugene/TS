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
var TodoStatus;
(function (TodoStatus) {
    TodoStatus["Pending"] = "Pending";
    TodoStatus["Completed"] = "Completed";
})(TodoStatus || (TodoStatus = {}));
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.list = [];
        this.nextId = 1;
    }
    TodoList.prototype.addNote = function (title, text, noteType) {
        if (noteType === void 0) { noteType = "Default"; }
        if (!title) {
            throw new Error("Your title is empty");
        }
        if (!text) {
            throw new Error("Your text is empty");
        }
        var newTodo = {
            id: this.nextId++,
            title: title,
            text: text,
            status: TodoStatus.Pending,
            noteType: noteType,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        this.list.push(newTodo);
        return newTodo;
    };
    TodoList.prototype.editNote = function (id, name, text, confirm) {
        if (confirm === void 0) { confirm = true; }
        var noteFound = false;
        this.list.forEach(function (el) {
            if (el.id === id) {
                if (el.noteType === "СonfirmationOfEditing" && !confirm) {
                    throw new Error("confirmation required");
                }
                el[name] = text;
                el.updatedAt = new Date();
                noteFound = true;
            }
        });
        if (noteFound) {
            return this.list;
        }
        else {
            return "Note not found";
        }
    };
    TodoList.prototype.deleteNote = function (id) {
        var deleteItem = this.list.filter(function (el) { return el.id === id; });
        if (deleteItem.length > 0) {
            this.list = this.list.filter(function (el) { return el.id != id; });
            return deleteItem[0];
        }
        return "not found";
    };
    TodoList.prototype.getNote = function (id) {
        var itemValue = this.list.filter(function (el) { return el.id === id; });
        if (itemValue.length > 0)
            return itemValue[0];
        return "not found";
    };
    TodoList.prototype.getAllNotes = function () {
        return this.list;
    };
    TodoList.prototype.getNotesNumber = function () {
        if (this.list.length === 0)
            return "Notes: 0";
        var pendingValues = this.list.filter(function (el) { return el.status === TodoStatus.Pending; });
        return "Notes: ".concat(this.list.length, ", Pending: ").concat(pendingValues.length);
    };
    TodoList.prototype.doneNote = function (id) {
        var noteFound = false;
        this.list.forEach(function (el) {
            if (el.id === id) {
                el.status = TodoStatus.Completed;
                el.updatedAt = new Date();
                noteFound = true;
            }
        });
        if (noteFound) {
            return this.list;
        }
        else {
            return "Note not found";
        }
    };
    return TodoList;
}());
var SearchableTodoList = /** @class */ (function (_super) {
    __extends(SearchableTodoList, _super);
    function SearchableTodoList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SearchableTodoList.prototype.findNotesByTitleOrText = function (searchText) {
        return this.list.filter(function (note) {
            return note.title.indexOf(searchText) !== -1 ||
                note.text.indexOf(searchText) !== -1;
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
        if (sortBy === "status") {
            return this.list.sort(function (a, b) {
                if (a.status > b.status)
                    return 1;
                if (a.status < b.status)
                    return -1;
                return 0;
            });
        }
        else if (sortBy === "createdAt") {
            return this.list.sort(function (a, b) { return a.createdAt.getTime() - b.createdAt.getTime(); });
        }
        return this.list;
    };
    return SortableTodoList;
}(TodoList));
