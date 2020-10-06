class BMI {
    constructor(height, weight){ // constructor with 2 arguements (height, weight)
        this.height = height; // declares local varaibale height
        this.weight = weight; // declares local varaibale weight
    }// END constructor

    calcuelateBMI(){ // method calcuelateBMI
       let bmi = this.weight/(this.height**2); // BMI calculation
       return bmi; // returns value bmi
    }// END calculateBMI

}// END class BMI

let MyBmi = new BMI(1.9, 105); // declares variable input (height, weight)
let calcuelateBMI = MyBmi.calcuelateBMI(); // calcuelateBMI = calls method in class
console.log(calcuelateBMI); // writes to console - calls calcuelateBMI