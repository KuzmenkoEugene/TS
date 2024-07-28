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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Vehicle = /** @class */ (function () {
    function Vehicle(brand) {
        this.brand = brand;
    }
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(brand, seats) {
        var _this = _super.call(this, brand) || this;
        _this.seats = seats;
        return _this;
    }
    Car.prototype.getType = function () {
        return "car";
    };
    Car.prototype.performAction = function () {
        return "Car ".concat(this.brand, " with ").concat(this.seats, " seats is starting its engine.");
    };
    return Car;
}(Vehicle));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(brand, capacity) {
        var _this = _super.call(this, brand) || this;
        _this.capacity = capacity;
        return _this;
    }
    Truck.prototype.getType = function () {
        return "truck";
    };
    Truck.prototype.getAction = function () {
        return "Truck ".concat(this.brand, " with capacity ").concat(this.capacity, " kg is loading cargo.");
    };
    return Truck;
}(Vehicle));
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle(brand, hasSidecar) {
        var _this = _super.call(this, brand) || this;
        _this.hasSidecar = hasSidecar;
        return _this;
    }
    Motorcycle.prototype.getType = function () {
        return "motorcycle";
    };
    Motorcycle.prototype.action = function () {
        var sidecarStatus = this.hasSidecar ? "with" : "without";
        return "Motorcycle ".concat(this.brand, " ").concat(sidecarStatus, " sidecar is revving its engine.");
    };
    return Motorcycle;
}(Vehicle));
var VehicleList = /** @class */ (function () {
    function VehicleList() {
        this.vehicles = [];
    }
    VehicleList.prototype.saveToLocalStorage = function () {
        if (localStorage) {
            var vehiclesJSON = this.vehicles.map(function (vehicle) { return (__assign({}, vehicle)); });
            localStorage.setItem("vehicles", JSON.stringify(vehiclesJSON));
        }
    };
    VehicleList.prototype.performVehicleActions = function (vehicle) {
        switch (vehicle.getType()) {
            case "car":
                if (vehicle instanceof Car) {
                    return vehicle.performAction();
                }
                break;
            case "truck":
                if (vehicle instanceof Truck) {
                    return vehicle.getAction();
                }
                break;
            case "motorcycle":
                if (vehicle instanceof Motorcycle) {
                    return vehicle.action();
                }
                break;
        }
        throw new Error("Unhandled vehicle type: ".concat(vehicle.brand));
    };
    VehicleList.prototype.addVehicle = function (vehicle) {
        this.vehicles.push(vehicle);
        this.saveToLocalStorage();
    };
    VehicleList.prototype.loadFromLocalStorage = function () {
        var vehiclesJSON = JSON.parse(localStorage.getItem("vehicles") || "[]");
        this.vehicles = vehiclesJSON;
    };
    return VehicleList;
}());
