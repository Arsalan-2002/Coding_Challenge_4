class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} going at ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} going at ${this.speed} km/h`);
    }
}

class EV extends Car {
    constructor(make, speed, charge) {
        super(make, speed);
        this.charge = charge;
    }

    chargeBattery(chargeTo) {
        this.charge = chargeTo;
    }

    accelerate() {
        this.speed += 20;
        this.charge -= 1;
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
    }
}

const tesla = new EV('Tesla', 120, 23);

console.log('Initial state:');
console.log(`Make: ${tesla.make}`);
console.log(`Speed: ${tesla.speed} km/h`);
console.log(`Charge: ${tesla.charge}%`);

tesla.accelerate(); 
tesla.accelerate();
tesla.accelerate(); 

tesla.brake(); 
tesla.brake(); 

tesla.chargeBattery(80);
console.log(`After charging, charge is ${tesla.charge}%`); 

tesla.accelerate();
tesla.accelerate(); 
tesla.accelerate(); 

console.log('Final state:');
console.log(`Make: ${tesla.make}`);
console.log(`Speed: ${tesla.speed} km/h`);
console.log(`Charge: ${tesla.charge}%`);
