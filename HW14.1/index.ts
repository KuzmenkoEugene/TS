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

class Note implements INote {
  public id: number;
  public title: string;
  public text: string;
  public status: TodoStatus;
  public noteType: TodoType;
  public createdAt: Date;
  public updatedAt: Date;

  constructor(id: number, title: string, text: string, noteType: TodoType) {
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

  markAsCompleted(): void {
    this.status = TodoStatus.Completed;
    this.updatedAt = new Date();
  }

  edit(field: ItemType, newValue: string, confirm: boolean = true): void {
    if (this.noteType === "СonfirmationOfEditing" && !confirm) {
      throw new Error("Editing requires confirmation");
    }

    this[field] = newValue;
    this.updatedAt = new Date();
  }
}

class TodoList {
  public list: INote[] = [];
  private nextId: number = 1;

  addNote(title: string, text: string, noteType: TodoType = "Default"): INote {
    if (!title || !text) {
      throw new Error("Title and text cannot be empty");
    }

    const newNote: INote = {
      id: this.nextId++,
      title,
      text,
      status: TodoStatus.Pending,
      noteType,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.list.push(newNote);
    return newNote;
  }

  editNote(
    id: number,
    field: ItemType,
    newValue: string,
    confirm: boolean = true
  ): string | INote[] {
    let note: INote | null = null;

    for (let i = 0; i < this.list.length; i++) {
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
  }

  deleteNote(id: number): INote | string {
    let noteIndex: number = -1;

    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id === id) {
        noteIndex = i;
        break;
      }
    }

    if (noteIndex !== -1) {
      return this.list.splice(noteIndex, 1)[0];
    }

    return "Note not found";
  }

  getNote(id: number): INote | string {
    let note: INote | null = null;

    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id === id) {
        note = this.list[i];
        break;
      }
    }

    return note ? note : "Note not found";
  }

  getAllNotes(): INote[] {
    return this.list;
  }

  getNotesStats(): string {
    const total = this.list.length;
    const pending = this.list.filter(
      (note) => note.status === TodoStatus.Pending
    ).length;
    return `Total: ${total}, Pending: ${pending}`;
  }

  markAsCompleted(id: number): INote[] | string {
    let note: INote | null = null;

    for (let i = 0; i < this.list.length; i++) {
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
  }
}

class SearchableTodoList extends TodoList {
  findNotesByTitleOrText(searchText: string): INote[] {
    const lowerSearchText = searchText.toLowerCase();

    return this.getAllNotes().filter(
      (note) =>
        note.title.toLowerCase().indexOf(lowerSearchText) !== -1 ||
        note.text.toLowerCase().indexOf(lowerSearchText) !== -1
    );
  }
}

class SortableTodoList extends TodoList {
  sortNotes(sortBy: "status" | "createdAt"): INote[] {
    const notes = [...this.getAllNotes()];

    if (sortBy === "status") {
      return notes.sort((a, b) => {
        if (a.status > b.status) return 1;
        if (a.status < b.status) return -1;
        return 0;
      });
    } else if (sortBy === "createdAt") {
      return notes.sort(
        (a, b) => a.createdAt.getTime() - b.createdAt.getTime()
      );
    }

    return notes;
  }
}
