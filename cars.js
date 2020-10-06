class Vehicle { //Parent class
    constructor(make, model, year){ // constructor with 3 arguements (make, model, year)
        this.make = make; // declare local variable make
        this.model = model; // declare local variable model
        this.year = year; // declare local variable year
    }//END constructor

    Information(){ // method
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
        // writes to console - calls make, model, year
    }// END Information

}// class Vehicle

//let myVehicle = new Vehicle('Kia', 'Yellow', 2008); // takes input variables
//let info = myVehicle.Information(); // calls method in class

class Cars extends Vehicle { // Child class inherits Parent class
    constructor(make, model, year, doors){ // constructor with 4 arguements (make, model, year, doors)
        super(make, model, year); // calls parent constructor
        this.doors = doors; // declare local variable doors
    }// END constructor

    Information(){
        super.Information(); // calls parent method Information - writes to console - calls make, model, year
        console.log(`Doors: ${this.doors}`); // writes to console - calls doors.
    }// END Information

}// END class Cars

let myCar = new Cars('Ford', 'Red', 2011, 5); // takes input variables
myCar.Information(); // calls method in class Cars