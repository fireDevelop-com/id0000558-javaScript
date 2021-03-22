//  PURE FUNCTION (always produces the same result for the same input)
function add(num1, num2){
  return num1 + num2
}
console.log(add(2,3))



//  INPURE FUNCTION (It's impure because we can not predict the result)
function random(num1){
  return num1 + Math.random()
}
console.log(random(5)) 


//  SIDE EFFECT (it changes anything outside of the function)
let previousResult = 0
console.log(previousResult)
function addMoreNumbers(num1, num2){
  const sum = num1 + num2
  previousResult = sum  // this is the side effect
  return sum
}
addMoreNumbers(1,5)
console.log(previousResult)



// SIDE EFFECT
const hobbies = ['Sport', 'Cooking']  // global enviromental
function printHobbies(){
  hobbies.push('new Hobby')
  console.log(hobbies)
}
printHobbies()



// FACTORY FUNCTIONS
function calcTotal(amount){ // amount would be a variable of its lexical enviromental
  function calcTax(tax){
    return amount * tax
  } 
  return calcTax
}

const vat21 = calcTotal(0.21)
const vat10 = calcTotal(0.10)

console.log(vat21(100))
console.log(vat10(100))



// CLOSURE (every function in Javascript is a closure)
// RESTRICT VARIABLES
{ 
  const age=40
  console.log(age)
}
// console.log(age) //Error: "age is not defined"


//  IIFEs (Inmediately Invoked Function Expression)
(function(){
  var age=41
  console.log('My age ' + age)
})()


var result = (function(){
  var name = "Barry"
  return name
})
console.log(result)



// RECURSION 1
// function powerOf(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }


function powerOf(x, n) {

  // if (n === 1) {
  //   return x;
  // }
  // return x * powerOf(x, n - 1);

  return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3)); // 2 * 2 * 2






 
// RECURSION ADVANCE
const myself = {
  name: 'Max',
  friends: [
    {
      name: 'Manuel',
      friends: [
        {
          name: 'Chris',
          friends: [
            {
              name: 'Hari'
            },
            {
              name: 'Amilia'
            }
          ]
        }
      ]
    },
    {
      name: 'Julia'
    }
  ]
};

function getFriendNames(person) {
  const collectedNames = [];

  if (!person.friends) {
    return [];
  }
  
  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendNames(friend));
  }
  
  return collectedNames;
}

console.log(getFriendNames(myself));