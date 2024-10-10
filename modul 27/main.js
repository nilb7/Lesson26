var a = 10;
var b = 12;
var c = 18;
var d = 15;

console.log(a < b && c > d)
console.log(a > b && c < d)
console.log(a < b || c > d)
console.log(!(a < b))

var school = ('Digial School')

// template literals

console.log("My school name is " + (school))


// otherday

function showMessage() {
    alert("This meesage  is inside the function");
}
showMessage();

function sum(number1, number2) {
    return number1 + number2;
}
console.log(sum(25, 5));

function toCelcius(f) {
    return (5 / 9) * (f - 32);
}
console.log("54 fahrenheit is equal to" + toCelcius(54) + " celsius")

var result = toCelcius(54);
console.log("54 fahrenheit is equal to " + result + " celsius");

var arrowFunction = () => alert("Hello World");
arrowFunction();

var arrowFunction = name => alert("Hello World ${name}");
arrowFunction("John Doe")

function dsFunction(){
    var localVar = "Digital School";
    alert(localVar);
}

//alert(localVar)

function toSeconds(minutes){
    return minutes * 60;
}
console.log(toSeconds(60));

function triangleArea(baseLength, height){
    return 0.5 * baseLength * height
}
console.log(triangleArea(5, 7));

//Object

var car = {
    name: "Mercedes",
    color: "red",
    year: 2020,
    kilometres: 0,
    startEngine : function(){
        alert("Vrooooom!!")
    },
    get getKilometres(){
        return this.kilometres;
    },
    set setKilometres(km){
        this.kilometres = km;
    }
};

console.log(car.getKilometres);
car.setKilometres = 100;
console.log(car.getKilometres);

var shkolla = {
    name: "Digital School",
    subject: "programming",
    students: 1500,
    year: 2024,
};
alert(car.name);
alert(car['color']);
car.startEngine();

var computer = new Object();
computer.name = "Lenovo";
computer.CPU = "Intel Core i7";
computer.RAM = "16GB";
computer.GPU = "GeForce GT730 2GB Dual DP HP";

computer.type = function(){
    return this.name + "," + this .CPU + "," + this.RAM + ","+ this.GPU;
};

alert(computer.GPU);
alert(computer.type());
delete computer.GPU;
alert(computer.GPU);




