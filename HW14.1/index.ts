enum TodoStatus {
  Pending = "Pending",
  Completed = "Completed",
}

type TodoType = "Default" | "СonfirmationOfEditing";
type ItemType = "title" | "text";

interface INote {
  id: number;
  title: string;
  text: string;
  status: TodoStatus;
  noteType: TodoType;
  createdAt: Date;
  updatedAt: Date;
}

class TodoList {
  public list: INote[] = [];
  private nextId: number = 1;

  addNote(title: string, text: string, noteType: TodoType = "Default"): INote {
    if (!title) {
      throw new Error("Your title is empty");
    }
    if (!text) {
      throw new Error("Your text is empty");
    }
    const newTodo: INote = {
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
  }

  editNote(
    id: number,
    name: ItemType,
    text: string,
    confirm: boolean = true
  ): string | INote[] {
    let noteFound = false;

    this.list.forEach((el) => {
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
    } else {
      return "Note not found";
    }
  }

  deleteNote(id: number): INote | string {
    let deleteItem = this.list.filter((el) => el.id === id);
    if (deleteItem.length > 0) {
      this.list = this.list.filter((el) => el.id != id);
      return deleteItem[0];
    }
    return "not found";
  }

  getNote(id: number): INote | string {
    let itemValue = this.list.filter((el) => el.id === id);
    if (itemValue.length > 0) return itemValue[0];
    return "not found";
  }

  getAllNotes(): INote[] {
    return this.list;
  }

  getNotesNumber(): number | string {
    if (this.list.length === 0) return `Notes: 0`;
    let pendingValues = this.list.filter(
      (el) => el.status === TodoStatus.Pending
    );
    return `Notes: ${this.list.length}, Pending: ${pendingValues.length}`;
  }

  doneNote(id: number): INote[] | string {
    let noteFound = false;

    this.list.forEach((el) => {
      if (el.id === id) {
        el.status = TodoStatus.Completed;
        el.updatedAt = new Date();
        noteFound = true;
      }
    });

    if (noteFound) {
      return this.list;
    } else {
      return "Note not found";
    }
  }
}

class SearchableTodoList extends TodoList {
  findNotesByTitleOrText(searchText: string): INote[] {
    return this.list.filter(
      (note) =>
        note.title.indexOf(searchText) !== -1 ||
        note.text.indexOf(searchText) !== -1
    );
  }
}

class SortableTodoList extends TodoList {
  sortNotes(sortBy: "status" | "createdAt"): INote[] {
    if (sortBy === "status") {
      return this.list.sort((a, b) => {
        if (a.status > b.status) return 1;
        if (a.status < b.status) return -1;
        return 0;
      });
    } else if (sortBy === "createdAt") {
      return this.list.sort(
        (a, b) => a.createdAt.getTime() - b.createdAt.getTime()
      );
    }
    return this.list;
  }
}
