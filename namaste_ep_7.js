// 

function a() {
  console.log("hello");
//   console.log(d); //   ReferenceError: d is not defined
  console.log(c); // 10 it is a hoisting before initialization we can call it or print it
  //  b();   //  RangeError: Maximum call stack size exceeded
}
var d = 7;
function b() {
  var d = 7;
  // let c = 10;   // ReferenceError: c is not defined
  a();
}
let c = 10;
b();
// console.log(d);   ReferenceError: d is not defined  here js is not allow to print d 
