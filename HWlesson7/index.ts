import { LocalStorage } from "node-localstorage";

const localStorage = new LocalStorage("./scratch");

abstract class Vehicle {
  constructor(public brand: string) {}
  abstract getType(): string;
}

class Car extends Vehicle {
  constructor(brand: string, public seats: number) {
    super(brand);
  }

  getType(): string {
    return "car";
  }

  performAction(): string {
    return `Car ${this.brand} with ${this.seats} seats is starting its engine.`;
  }
}

class Truck extends Vehicle {
  constructor(brand: string, public capacity: number) {
    super(brand);
  }

  getType(): string {
    return "truck";
  }

  getAction(): string {
    return `Truck ${this.brand} with capacity ${this.capacity} kg is loading cargo.`;
  }
}

class Motorcycle extends Vehicle {
  constructor(brand: string, public hasSidecar: boolean) {
    super(brand);
  }

  getType(): string {
    return "motorcycle";
  }

  action(): string {
    const sidecarStatus = this.hasSidecar ? "with" : "without";
    return `Motorcycle ${this.brand} ${sidecarStatus} sidecar is revving its engine.`;
  }
}

class VehicleList {
  public vehicles: Vehicle[] = [];

  private saveToLocalStorage(): void {
    if (localStorage) {
      const vehiclesJSON = this.vehicles.map((vehicle) => ({
        ...vehicle,
      }));

      localStorage.setItem("vehicles", JSON.stringify(vehiclesJSON));
    }
  }

  performVehicleActions(vehicle: Vehicle): string {
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

    throw new Error(`Unhandled vehicle type: ${vehicle.brand}`);
  }

  addVehicle(vehicle: Vehicle) {
    this.vehicles.push(vehicle);

    this.saveToLocalStorage();
  }

  public loadFromLocalStorage(): void {
    const vehiclesJSON: (Car | Truck | Motorcycle)[] = JSON.parse(
      localStorage.getItem("vehicles") || "[]"
    );
    this.vehicles = vehiclesJSON;
  }
}
