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
let multiply = function(x){
    return function(y){
        console.log(x*y);
    }
}

let multiplyByTwo = multiply(2);
multiplyByTwo(3);

let multiplyByThree = multiply(3);
multiplyByThree(3);