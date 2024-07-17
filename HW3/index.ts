interface Iprint {
  print(): string;
}

abstract class Shapes {
  constructor(readonly name: string, readonly color: string) {}

  public abstract calculateArea(...args: number[]): number;
}

class Circle extends Shapes {
  constructor(name: string, color: string) {
    super(name, color);
  }

  public calculateArea(radius: number): number {
    return Math.PI * Math.pow(radius, 2);
  }
}

class Rectangle extends Shapes implements Iprint {
  private _width: number = 0;
  private _height: number = 0;
  private result: number = 0;

  constructor(name: string, color: string) {
    super(name, color);
  }

  public calculateArea(width: number, height: number): number {
    this._width = width;
    this._height = height;
    return (this.result = width * height);
  }

  public print(): string {
    if (this.result === 0) {
      throw new Error();
    }

    return `${this._width} * ${this._height} = ${this.result}`;
  }
}

class Square extends Shapes implements Iprint {
  private _side: number = 0;
  private result: number = 0;

  constructor(name: string, color: string) {
    super(name, color);
  }

  public calculateArea(side: number): number {
    this._side = side;
    return (this.result = Math.pow(side, 2));
  }

  public print(): string {
    if (this.result === 0) {
      throw new Error();
    }

    return `${this._side}^${2} = ${this.result}`;
  }
}

class Triangle extends Shapes {
  constructor(name: string, color: string) {
    super(name, color);
  }

  public calculateArea(base: number, height: number): number {
    return (base * height) / 2;
  }
}
