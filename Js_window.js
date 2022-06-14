// var obj = {num:2};

// var addToThis = function(a, b, c) {
//     return this.num + a + b + c;
    
// };
// //console.log(addToThis.call(obj,1,2,3));
// var arr = [1,2,3];
// var bound = addToThis.bind(obj);

// console.log(bound(1,2,3));

// Student = {age: 20};

// var logAge = function(){
//     console.log(this.age);
// };

// printAge = logAge.bind(Student);

// printAge();

// fUNCTION currying 1st method
// let multiply = function(x, y){
//     console.log(x * y);
// };
// let multiplyByTwo = multiply.bind(this,2);
// multiplyByTwo(5);

// let multiplyByThree = multiply.bind(this, 3);
// multiplyByThree(6);
// fUNCTION currying 2nd method
// let multiply = function(x){
//     return function(y){
//         console.log(x*y);
//     }
// }

// let multiplyByTwo = multiply(2);
// multiplyByTwo(3);

// let multiplyByThree = multiply(3);
// multiplyByThree(3);

// const name = (arr)=>{
//     var count = 0;    
    
//     return ()=> {
//         console.log("Hello ",arr[count]);
//         count++;
//     }
    
    
// }

// let fun = name(["Ram","Shyam"]);

// fun();// Print Hello Ram

// fun();//print Hello Shyam
// a()

// b()



// function a(){

// console.log('inside a');

// }



// var b = function (){

// console.log('inside b');

// }
//Function statement
// function a(){
//     console.log("a called")
// }
// //Function Expression
// var b = function(){
//     console.log("b called")
// }

// // major difference between fn statement and fn expression is "hoisting"

// // Anonymous function: functions without names are called anonymous functions
// // Anounymous functions are used in a place where functions are used as values
// // function (){

// // }

// // Difference between Parameters and Arguments
// //parameters are used as local variables in function scope/function definition.
// //Arguments are passed in a function call 

// //First class functions
// //we can pass functions inside functions as arguments
// var b = function(param1){
//     console.log(param1);
// }
// function xrz(){

// }
// b(xrz);

//Currying

// function addConstValue(constant1){
//     return (value) => {
//         return value + constant1;
//     }
// }

// console.log(addConstValue(15)(3));

// function mulConstValue(constant2){
//     return (value) =>{
//         return value*constant2;
//     }
// }

// console.log(mulConstValue(13)(3));

//House
// // this inside glocal scope
// 'use strict';
// this.table = 'window table';

// this.garage = {
//     table: 'garage table',
// };

// let johnsRoom = {
//     table: 'Johns table',    
// };

// this inside a function
// const cleanTable = function(soap){
//         console.log(`cleaning ${this.table} using ${soap}`);

// };
// cleanTable.call(this, 'some soap');
// cleanTable.call(this.garage,'some soap');
// cleanTable.call(johnsRoom,'some soap');

// this inside an inner function
// const cleanTable = function(soap){
//     let that = this;
//     const innerFunction = function(){
//         console.log(`cleaning ${that.table} using ${soap}`);
//     }
//     innerFunction(soap);

// };
// cleanTable.call(this, 'some soap');
// cleanTable.call(this.garage,'some soap');
// cleanTable.call(johnsRoom,'some soap');

// using bind
// const cleanTable = function(soap){
    
//     const innerFunction = function(){
//         console.log(`cleaning ${this.table} using ${soap}`);
//     }
//     //innerFunction.call(this,soap);
//     innerFunction.bind(this)(soap);
// };
// cleanTable.call(this, 'some soap');
// cleanTable.call(this.garage,'some soap');
// cleanTable.call(johnsRoom,'some soap');

// // using arrow funcitons
// const cleanTable = function(soap){
    
//     const innerFunction = (_soap) =>{
//         console.log(`cleaning ${this.table} using ${soap}`);
//     }
//     //innerFunction.call(this,soap);
//     innerFunction.bind(this)(soap);
// };
// cleanTable.call(this, 'some soap');
// cleanTable.call(this.garage,'some soap');
// cleanTable.call(johnsRoom,'some soap');

// // 'this' inside a constructor

// let createRoom = function(name){
//     this.table = `${name}'s table`
// }

// createRoom.prototype.cleanTable = function(soap){
//     console.log(`cleaning ${this.table} using ${soap}`);
// }

// const jillsRoom = new createRoom('Jill');
// const johnsRoom = new createRoom('John');
// jillsRoom.cleanTable('some soap');
// johnsRoom.cleanTable('some soap');


// // 'this' inside a class

// class createRoom {
//     constructor(name){
//         this.table = `${name}'s table`
//     }
//     cleanTable(soap){
//         console.log(`cleaning ${this.table} using ${soap}`);
//     }
// }


// const jillsRoom = new createRoom('Jill');
// const johnsRoom = new createRoom('John');
// jillsRoom.cleanTable('some soap');
// johnsRoom.cleanTable('some soap');

// class Student{
//     static count = 0;
//     constructor(name, age, phoneNumber, marks){
//         this.name = name;
//         this.age = age;
//         this.phoneNumber = phoneNumber;
//         this.marks = marks;
//         Student.countStudent();

//     }
//     static countStudent(){

//         return Student.count++;     //this is how u access static variable

//     }
//     eligibleForCollege(){
//         if(this.marks>=40){
//             console.log('Eligible for college');
//         }else{
//             console.log('Not eligible for college');
//         }

//     }

   

// }

// let s1 = new Student('Jill', '15', '252345254', '77');
// let s2 = new Student('John' ,'15', '2523346534', '76');
// let s3 = new Student('Jack','15', '2523534435', '39');
// let s4 = new Student('Korn','15', '2523435543', '60');
// let s5 = new Student('Kandy','15', '252346546', '20');

// console.log(Student.countStudent());
// s1.eligibleForCollege();
// s2.eligibleForCollege();
// s3.eligibleForCollege();
// s4.eligibleForCollege();
// s5.eligibleForCollege();

"use strict";

// var a = 4;

// let square = () => {return a*a};
// // console.log(square());
// let mult = (a,b) => {return a*b};
// console.log(mult(3,6));
// var x = function(){
    
//     this.val = 1;
//     setTimeout(() => {
//         this.val++;
//         console.log(this.val);
//     },1)
// };
// var xx = new x();
// spread operator
// var x = (...n) =>{
//     console.log(n[0]);
// };

// x(1,2,3);


class Student{
    static count = 0;
    constructor(name, age, phoneNumber, marks){
        this.name = name;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.marks = marks;
        Student.countStudent();

    }
    static countStudent(){

        return Student.count++;     //this is how u access static variable

    }
    setPlacementAge(minPlacementAge){
        console.log(this);
        return (minMarks) =>{
            if(this.marks > minMarks && this.age>minPlacementAge){
                console.log(this.name," is eligible for placements");
            }else{
                console.log(this.name," is not ready for placements");
            }
        }
    }

}

let s1 = new Student('Jill', '19', '252345254', '77');
let s2 = new Student('John' ,'21', '2523346534', '30');
let s3 = new Student('Jack','21', '2523534435', '39');
let s4 = new Student('Korn','23', '2523435543', '60');
let s5 = new Student('Kandy','18', '252346546', '20');

console.log(Student.countStudent());
s1.setPlacementAge(18)(40);
s2.setPlacementAge(18)(40);
s3.setPlacementAge(18)(40);
s4.setPlacementAge(18)(40);
s5.setPlacementAge(18)(40);