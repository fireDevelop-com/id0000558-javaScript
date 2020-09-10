let id = 0
let sum = 0
let num, num1, num2, price, prices, tax, total, result, object, copiedNum, users, usersCopied



console.log(`____________________ ${id++} Array example ____________________`)
num = [1, 2, 3]
console.log(num)


console.log(`____________________ ${id++} Array example ____________________`)
num = Array (1, 2, 3)
console.log(num)


console.log(`____________________ ${id++} Array example ____________________`)
num = new Array (1, 2, 3)
console.log(num)


console.log(`____________________ ${id++} Array example ____________________`)
num = Array.of (1, 2, 3)
console.log(num)


console.log(`____________________ ${id++} Error empty if only one index ____________________`)
num = Array(5)
console.log(num)


console.log(`____________________ ${id++} Array Splite ____________________`)
num = Array.from ("123")
console.log(num)
num = Array.from ("Some Text")
console.log(num)


console.log(`____________________ ${id++} NodeList ____________________`)
num = document.querySelectorAll('li')
console.log(num)


console.log(`____________________ ${id++} Array String ____________________`)
num = [01, 'Jhon', {country: ['US']}]
console.log(num)


console.log(`____________________ ${id++} Multi-dimension Nested Analitics Data ____________________`)
num = [[-1, 1.5], [2, -2.5]]
console.log(num)

for (const x of num){
    for(y of x){
        console.log(y)
    }
}


console.log(`____________________ ${id++} unshift, shift, push, pop ____________________`)
num = [3, 4]
num.unshift(1, 2)
num.shift()
num.push(5, 6)
num.pop()
console.log(num)


console.log(`____________________ ${id++} create empty Index until desired place ____________________`)
num = [3, 4]
num[10]=10
console.log(num)


console.log(`____________________ ${id++} splice (index,qty) ____________________`)
num = [2, 3]
num.splice(0,0,1)
console.log(num)

num.splice(1,0,'one')
console.log(num)


console.log(`____________________ ${id++} splice add ____________________`)
num = [1, 2, 3]
num.splice(0,1,'one')
console.log(num)


console.log(`____________________ ${id++} splice remove from last element ____________________`)
num = [1, 2, 3]
num.splice(-1, 1)
console.log(num)


console.log(`____________________ ${id++} slice point to old memory ____________________`)
num = [1, 2, 3]
num2 = num
num.push(4)
console.log(num, num2) // [1, 2, 3, 4] = [1, 2, 3, 4] 

num2 = num.slice()
num.push(5)
console.log(num, num2) // [1, 2, 3, 4, 5] ≠ [1, 2, 3, 4] 

num2 = num.slice(3, 5)
console.log(num2) //[4, 5]

num2 = num.slice(-3, -1)
console.log(num2) //[3, 4]


console.log(`____________________ ${id++} concat ____________________`)
num = [1, 2, 3]
num2 = num.concat(4, 5)
console.log(num2) // [1, 2, 3, 4, 5]

num.push(6)
console.log(num2) // [1, 2, 3, 4, 5]


console.log(`____________________ ${id++} indexOf ____________________`)
num = [1, 2, 3, 3]
console.log (num.indexOf(3)) // output 2. You only get the FIRST match
console.log (num.lastIndexOf(3)) // output 3. You only get the LAST match


console.log(`____________________ ${id++} indexOf -1 ____________________`)
num = [{name:'one'}, {name:'two'}]
console.log (num.indexOf({name:'one'})) // output -1. mean can`t find.


console.log(`____________________ ${id++} find - works with real index no copies like splice ____________________`)
num = [1, 2, 3]

function findNum (x) {
    return x = 3
          
}
num2 = num.find(findNum)
console.log(num2)

console.log(`____________________ ${id++} find ____________________`)


var ages = [3, 10, 19, 20];
function checkAdult(age) {
  return age >= 18;
}
function myFunction() {
  return ages.find(checkAdult)
}
console.log(myFunction())

console.log(`____________________ ${id++} find - Find an object in an array by one of its properties ____________________`)
 num = [
    {id: 1, name: 'one'},
    {id: 2, name: 'two'},
    {id: 3, name: 'three'}
  ]
  function f1(x) { 
    return x.id === 3
  }
  console.log(num.find(f1))


console.log(`____________________ ${id++} find - Using arrow function and destructuring ____________________`)


console.log(`____________________ ${id++} for ____________________`)
prices = [10, 20, 30]
tax = 1.21
total = []
for (price of prices){
    total.push(price * tax)
}
console.log(total)

console.log(`____________________ ${id++} forEach ____________________`)
prices = [10, 20, 30]
tax = 1.21
total = []
prices.forEach((value, index) => {
   object = {value: value * tax, index: index}
  total.push(object)
})
console.log(total)


console.log(`____________________ ${id++} forEach normal Function____________________`)
prices = [10, 20, 30]
prices.forEach((value) => {
  sum += value
})
console.log(sum)


console.log(`____________________ ${id++} forEach short Function____________________`)




console.log(`____________________ ${id++} map ____________________`)
 prices = [10, 20, 30]
 tax = 1.21
 total = prices.map((value, index) => {
   object = { value:value*tax, index:index }
  return object
})
console.log(total)


console.log(`____________________ ${id++} sort ____________________`)
prices = [10, 20, 30]
total = prices.sort((a, b) => {
  if (a > b) {
    return -1
  } else if (a === b) {
    return 0
  } else {
    return 1
  }
});
console.log(total)
console.log(total.reverse())


console.log(`____________________ ${id++} filter ____________________`)
prices = [10, 20, 30]
total = prices.filter((value, index, array) => {
  return value > 20
})
console.log(total)


console.log(`____________________ ${id++} filter shorter Function ____________________`)
prices = [10, 20, 30]
total = prices.filter(value => value === 10)
console.log(total)


console.log(`____________________ ${id++} reduce ____________________`)
prices = [1, 2, 3]
total = prices.reduce((previousValue, currentValue) => {
  return previousValue + currentValue
}, 0)
console.log(total) // output = 0 + 1 + 2 + 3 = 6


console.log(`____________________ ${id++} reduce shorter function ____________________`)
prices = [1, 2, 3]
total = prices.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
console.log(total) // output = 0 + 1 + 2 + 3 = 6


console.log(`____________________ ${id++} map reduce ____________________`)

prices = [{value: 1}, {value: 2}, {value: 3}];
total = prices.map(object => object.value); // produces [10.99, 5.99, 29.99]
console.log(total.reduce((previousValue, currentValue) => previousValue + currentValue, 0))


console.log(`____________________ ${id++} map reduce ____________________`)
prices = [{value: 1}, {value: 2}, {value: 3}];
total = prices.reduce((previousValue, currentValue) => previousValue + currentValue.value, 0); // => 46.97
console.log(total)

console.log(`____________________ ${id++} map reduce ____________________`)
prices = [{value: 1}, {value: 2}, {value: 3}];
total = prices.map(object => object.value).reduce((previousValue, currentValue) => previousValue + currentValue, 0); // => 46.97
console.log(total)


console.log(`____________________ ${id++} split - separate by semicolon ____________________`)
num = '1;2;3'
console.log(total = num.split(';'))


console.log(`____________________ ${id++} split - add text to string ____________________`)
console.log(total[0] = 100+total[0])


console.log(`____________________ ${id++} split - convert array to string ____________________`)
num = ['one', 'two']
console.log(num.join(' '))


console.log(`____________________ ${id++} Spread min value ____________________`)
num = [1, 2, 3]
console.log(Math.min(...num))


console.log(`____________________ ${id++} Spread push ____________________`)
num = ['one', 'two', 'three']
copiedNum = [...num]
num.push('four')
console.log(num, copiedNum)


console.log(`____________________ ${id++} Spread push and modified by index ____________________`)
users = [{id:1, name:'jhon'}, {id:2, name:'mery'}]
usersCopied = [...users]
users.push({id:3, name:'petter'})
console.log(users, usersCopied)

users[2].id = 300
console.log(users,usersCopied)

console.log(`____________________ ${id++} Spread simulation with map ____________________`)
userCopied = users.map(users => ({
  id: users.id,
  name: users.name
}))
console.log(users,usersCopied)


console.log(`____________________ ${id++} Spread ____________________`)
num = ['one', 'two', 'three', 'four', 'five']
const [ one, two, ...rest ] = num
console.log(one, two, rest)


console.log(`____________________ ${id++} Set has ____________________`)
num = new Set([1, 2, 3])
console.log(num.has(1)) // output true

for( x of num.entries()){
  console.log(x)
}

for( x of num.entries()){
  console.log(x[0])
}


console.log(`____________________ ${id++} Set & map ____________________`)
num1 = { key: 'one' }
num2 = { key: 'two' }
total = new Map([[num1, [{ value: 'yesterday', id: 1 }]]]) 
console.log(total)
console.log(total.set(num2, [{ value: 'today', id: 2 }]))
console.log(total.get(num1))
console.log(total.get(num2))


console.log(`____________________ ${id++} Map entries ____________________`)
num1 = {name: 'one'}
num2 = {name: 'two'}
total = new Map ([[num1, [{value:'today', id:1}]]])
total.set(num2, [{value:'today', id:2}])
for([key, value] of total.entries()){
  console.log(key,value)
}


console.log(`____________________ ${id++} Map keys ____________________`)
num1 = {name: 'one'}
num2 = {name: 'two'}
total = new Map ([[num1, [{value:'today', id:1}]]])
total.set(num2, [{value:'today', id:2}])
for(let key of total.keys()){
  console.log(key)
}


console.log(`____________________ ${id++} Map value ____________________`)
num1 = {name: 'one'}
num2 = {name: 'two'}
total = new Map ([[num1, [{value:'today', id:1}]]])
total.set(num2, [{value:'today', id:2}])
for(let value of total.values()){
  console.log(value)
}


console.log(`____________________ ${id++} Map size ____________________`)
console.log(total.size);


console.log(`____________________ ${id++} WeakSeat - keep array in garbage collecting ____________________`)
num = {name:'one'}
total = new WeakSet()
total.add(num)
num = null
console.log(total)


console.log(`____________________ ${id++} WeakMap ____________________`)
num = {name:'one'}

total = new WeakMap()
total.set(num, 'extra info')
num = null
console.log(total)


console.log(`____________________ ${id++} Exercise 1 ____________________`)
num = [1, 2, 3, 4, 5, 6, 7]
total = num.filter((value) => {
  return value
})
console.log(total)