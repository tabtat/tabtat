let number: number = 10
console.log(number)

{
    let myName: string = "John"
    console.log(`My Name is ${myName}`)
}

let myName2: string = "David"
console.log(`He Name is ${myName2}`)

let w: number = 20
let h: number = 30
console.log(`พื้นที่สี่เหลี่ยมเท่ากับ ${w * h}`)

let colors:string[] = ["Red","Green", "Blue"]
console.log(colors[1])

type StudentType = {
    stdid: string,
    stdName:string,
    major:string,
    grade:number
}

let student:StudentType = {
    stdid: "63000",
    stdName: "Tabtat seeladlow",
    major: "Computer Engineering",
    grade: 2.90
}

console.log(`รหัสนักศึกษา ${student.stdid}`)

let check: boolean = true;
let score1: number = 0;
let msg: string="Error";
let cars: string[] = ["Toyota","Suzuki","Honda"];
let x: number;

console.log(x)

let showMsg: Function = function (msg) {
    console.log(`แสดงข้อความ ${msg}`)
}
showMsg

const faculty = "Engineering"

    // faculty = "Accounting"
{
let myName: string = process.argv[2]
console.log(`My name is ${myName}`)
}

{
let salary = process.argv.slice(2)
console.log(salary)
}

let n1:number = 10
let n2:number = 15
let message:string;

if (n1>n2){
    message = "n1 มากกว่า n2"
}else if(n2>n1){
    message = "n2 มากกว่า n1"
}else{
    message = "n1 = n2"
}

console.log(message)

for (let i :number = 0; i <=10; i++){
    console.log(i)
}

for (let index in cars) {
    console.log(cars[index])
}