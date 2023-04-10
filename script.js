class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk(){return "Beep."}

    toString(){
        const {make,model,year} = this;
        return `The vehicle is a ${make} ${model} from ${year}.}`
    }

}

class Car extends Vehicle{
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle{
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels = 2;
    }

    revEngine(){return "VROOM!!!";}
}

class Garage{
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }

    add(vehicle){
        //Checks if it's at capacity
        if(this.vehicles.length >= this.capacity){
            return "Sorry, we're full.";
        }
        //Checks for a make, model, and year to make sure it's a car
        else if(!(vehicle instanceof Vehicle)){
            return "Only vehicles are allowed in here!";
        }
        //Adds the vehicle
        else{
            this.vehicles.push(vehicle);
            return "Vehicle added!";
        }
    }
}