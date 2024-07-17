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
var Shapes = /** @class */ (function () {
    function Shapes(name, color) {
        this.name = name;
        this.color = color;
    }
    return Shapes;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(name, color) {
        return _super.call(this, name, color) || this;
    }
    Circle.prototype.calculateArea = function (radius) {
        return Math.PI * Math.pow(radius, 2);
    };
    return Circle;
}(Shapes));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(name, color) {
        return _super.call(this, name, color) || this;
    }
    Rectangle.prototype.calculateArea = function (width, height) {
        this._width = width;
        this._height = height;
        return (this.result = width * height);
    };
    Rectangle.prototype.print = function () {
        if (this.result === 0) {
            throw Error();
        }
        return "".concat(this._width, " * ").concat(this._height, " = ").concat(this.result);
    };
    return Rectangle;
}(Shapes));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(name, color) {
        return _super.call(this, name, color) || this;
    }
    Square.prototype.calculateArea = function (side) {
        this._side = side;
        return (this.result = Math.pow(side, 2));
    };
    Square.prototype.print = function () {
        if (this.result === 0) {
            throw Error();
        }
        return "".concat(this._side, "^").concat(2, " = ").concat(this.result);
    };
    return Square;
}(Shapes));
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(name, color) {
        return _super.call(this, name, color) || this;
    }
    Triangle.prototype.calculateArea = function (base, height) {
        return (base * height) / 2;
    };
    return Triangle;
}(Shapes));
