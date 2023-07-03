var number = 10;
console.log(number);
{
    var myName = "John";
    console.log("My Name is ".concat(myName));
}
var myName2 = "David";
console.log("He Name is ".concat(myName2));
var w = 20;
var h = 30;
console.log("\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E35\u0E48\u0E40\u0E2B\u0E25\u0E35\u0E48\u0E22\u0E21\u0E40\u0E17\u0E48\u0E32\u0E01\u0E31\u0E1A ".concat(w * h));
var colors = ["Red", "Green", "Blue"];
console.log(colors[1]);
var student = {
    stdid: "63000",
    stdName: "Tabtat seeladlow",
    major: "Computer Engineering",
    grade: 2.90
};
console.log("\u0E23\u0E2B\u0E31\u0E2A\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32 ".concat(student.stdid));
var check = true;
var score1 = 0;
var msg = "Error";
var cars = ["Toyota", "Suzuki", "Honda"];
var x;
console.log(x);
var showMsg = function (msg) {
    console.log("\u0E41\u0E2A\u0E14\u0E07\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21 ".concat(msg));
};
showMsg;
var faculty = "Engineering";
// faculty = "Accounting"
{
    var myName = process.argv[2];
    console.log("My name is ".concat(myName));
}
{
    var salary = process.argv.slice(2);
    console.log(salary);
}
var n1 = 10;
var n2 = 15;
var message;
if (n1 > n2) {
    message = "n1 มากกว่า n2";
}
else if (n2 > n1) {
    message = "n2 มากกว่า n1";
}
else {
    message = "n1 = n2";
}
console.log(message);
for (var i = 0; i <= 10; i++) {
    console.log(i);
}
for (var index in cars) {
    console.log(cars[index]);
}
