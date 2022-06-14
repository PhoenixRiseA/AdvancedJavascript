// var obj = {num:2};

// var addToThis = function(a, b, c) {
//     return this.num + a + b + c;
    
// };
// //console.log(addToThis.call(obj,1,2,3));
// var arr = [1,2,3];
// var bound = addToThis.bind(obj);

// console.log(bound(1,2,3));

Student = {age: 20};

var logAge = function(){
    console.log(this.age);
};

printAge = logAge.bind(Student);

printAge();
