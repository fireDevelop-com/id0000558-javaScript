let a = { x:2, y:4 }

  function sum (){
  console.log(this.x + this.y)
}

let total = sum.bind( a)
total()

//////////////////////////////

var x = 2
var module = {
  x:1,
  getX: function(){
    console.log(this.x)
  }
}

module.getX() // output 1
var getXglobal = module.getX
getXglobal() // output 2

var b = { x:3 }
var getXbind = getXglobal.bind(b)
getXbind()

//////////////////////////////

function addAndThis(n1, n2) {
  console.log("THIS:" + this + " SUM:" + (n1+n2));
}

var boundNullThisAddAndThis = addAndThis.bind(null);
var boundUndefinedThisddAndThis = addAndThis.bind(undefined);
var boundStringThisAddAndThis = addAndThis.bind("TEST");

addAndThis(10, 20);
boundNullThisAddAndThis(100, 200);
boundUndefinedThisddAndThis(1000, 2000);
boundStringThisAddAndThis(10000, 20000);

//////////////////////////////

function multi(a, b) {
  return a * b;
}

var x = multi.bind(null, 3);

console.log( x() ) // NAN
console.log( x(3) ) // 9
console.log( x(5,7) ) // 15




function multi(a, b,c) {
  return a * b * c
}

var x = multi.bind(2, 3,100);

console.log( x() ) // NAN
console.log( x(3) ) // 9
console.log( x(5,7,2) ) // 15