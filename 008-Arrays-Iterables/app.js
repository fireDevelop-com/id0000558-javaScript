let id = 0
let num


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

num = [1, 2, 3]
num.splice(0,1,'one')
console.log(num)

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ['Cooking', 'Sports'];
// const personalData = [30, 'Max', {moreDetail: []}];

// const analyticsData = [[1, 1.6], [-5.4, 2.1]];

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// console.log(personalData[1]);

// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading');
// hobbies.unshift('Coding');
// const poppedValue = hobbies.pop();
// hobbies.shift();
// console.log(hobbies);

// hobbies[1] = 'Coding';
// // hobbies[5] = 'Reading'; // rarely used
// console.log(hobbies, hobbies[4]);

// hobbies.splice(1, 0, 'Good Food');
// console.log(hobbies);

// const removedElements = hobbies.splice(-2, 1);
// console.log(hobbies);

// const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
// // const storedResults = testResults.slice(2);
// const storedResults = testResults.concat([3.99, 2]);

// testResults.push(5.91);

// console.log(storedResults, testResults);
// console.log(testResults.indexOf(1.5));

// console.log(testResults.includes(10.99));
// console.log(testResults.indexOf(10.99) !== -1);

// const personData = [{ name: 'Max' }, { name: 'Manuel' }];
// console.log(personData.indexOf({ name: 'Manuel' }));

// const manuel = personData.find((person, idx, persons) => {
//   return person.name === 'Manuel';
// });

// manuel.name = 'Anna';

// console.log(manuel, personData);

// const maxIndex = personData.findIndex((person, idx, persons) => {
//   return person.name === 'Max';
// });

// console.log(maxIndex);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for (const price of prices) {
// //   taxAdjustedPrices.push(price * (1 + tax));
// // }

// prices.forEach((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//   taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;

// const taxAdjustedPrices = prices.map((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//   return priceObj;
// });

// // console.log(prices, taxAdjustedPrices);

// const sortedPrices = prices.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else if (a === b) {
//     return 0;
//   } else {
//     return 1;
//   }
// });
// // console.log(sortedPrices.reverse());
// console.log(sortedPrices);

// const filteredArray = prices.filter(p => p > 6);

// console.log(filteredArray);

// // let sum = 0;

// // prices.forEach((price) => {
// //   sum += price
// // });

// // console.log(sum);

// const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);

// console.log(sum);

// const data = 'new york;10.99;2000';

// const transformedData = data.split(';');
// transformedData[1] = +transformedData[1];
// console.log(transformedData);

// const nameFragments = ['Max', 'Schwarz'];
// const name = nameFragments.join(' ');
// console.log(name);

// const copiedNameFragments = [...nameFragments];
// nameFragments.push('Mr');
// console.log(nameFragments, copiedNameFragments);

// console.log(Math.min(...prices));

// const persons = [{ name: 'Max', age: 30 }, { name: 'Manuel', age: 31 }];
// const copiedPersons = persons.map(person => ({
//   name: person.name,
//   age: person.age
// }));

// persons.push({ name: 'Anna', age: 29 });
// persons[0].age = 31;

// console.log(persons, copiedPersons);

const nameData = ['Max', 'Schwarz', 'Mr', 30];
// const firstName = nameData[0];
// const lastName = nameData[1];

const [ firstName, lastName, ...otherInformation ] = nameData;
console.log(firstName, lastName, otherInformation);
