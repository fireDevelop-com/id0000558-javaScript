// Maximun number in Javascript
console.log(Number.MAX_SAFE_INTEGER )

// Maximun number in Javascript
console.log(Math.pow(2, 53)-1)

// Proof is really the max number, if you increase the result won't get the number increased
console.log(Math.pow(2,53)) // Max number 9007199254740991
console.log(Math.pow(2,5) + 1) // Max number increased 9007199254740991 not increased

// Min number in Javascript
console.log(Number.MIN_SAFE_INTEGER)
// Max decimal number in javascript
console.log(Number.MAX_VALUE)

// convert to number into Binary
// sintaxis: numberToConvert + method + number2ForBinarySistem
console.log((5).toString(2))
console.log((2+3).toString(2))  // same but with some operations


// toFixed
var a = 0.2
var b = 0.4
var sum = a + b
console.log(sum) // output 0.6000000000000001

if(sum === 0.6) {console.log("ok")}
    else{console.log("error: 0.6 is not equal to 0.6000000000000001")}


// ???
var a = (0.2 + 0.4).toFixed(2)
var c = parseInt(a)

var b = 0.60

if(c === b) {console.log("ok")}



// Infinity
var a = 1/0 // output Infinity
Number.isFinite(a) ? console.log("is Finite") : console.log("no Finite")



//get absolute number
console.log(Math.abs(-5))


// function to increase the range from Math.random 0 to 1. This function allow you to use any range
// Math.floor cut decimals, 10.999999999 will turn into 10
// Math.random always is from 0 to 1
function randomIntBetween(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}   
console.log(randomIntBetween(5,10)) // output:  random from number 5 to 10



// Stings - check MDN site for more methods
console.log(`${1}`) // convert 1 to string
console.log('stringToUpperCase'.toUpperCase())
console.log('stringToLowerCase'.toLowerCase())
console.log('string'.startsWith('s')) // true



// Tagged Template - Template literals - Template strings
function productDescription(strings, productName, productPrice) {
    console.log(strings);
    console.log(productName);
    console.log(productPrice);
    let priceCategory = 'pretty cheap regarding its price';
    if (productPrice > 20) {
      priceCategory = 'fairly priced';
    }
    // return `${strings[0]}${productName}${strings[1]}${priceCategory}${
    //   strings[2]
    // }`;
    return {name: productName, price: productPrice};
  }
  
  const prodName = 'JavaScript Course';
  const prodPrice = 29.99;
  
  const productOutput = productDescription`This product (${prodName}) is ${prodPrice}.`;
  console.log(productOutput);
  