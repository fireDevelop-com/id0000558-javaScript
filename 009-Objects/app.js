let id = 0
let person, name, numbers
console.log(`____________________ ${id++} Object & Primitive values ____________________`)
let users = {
  name: 'Max',
  age: 29,
  hobbies: ['Sports', 'Cooking'],
  message: function(){
    console.log('I am a function')
  },
  address: {
      street: 'Some Street 5',
      stateId: 5,
      country: 'Germany',
      phone: {
          number: 690456777,
          isMobile: true
      }
  },
  1.5: 'hi',
  numbers: {
    5:'five', 1:'one', 3:'three'
  }
}


console.log(`____________________ ${id++} Object - Call a function ____________________`)
console.log(users.message)


console.log(`____________________ ${id++} Object - Create and Modify ____________________`)
users.age=30 // modify property
users.age=31 // modify property again 
console.log(users)


console.log(`____________________ ${id++} Object - delete ____________________`)
delete users.age
console.log(users)


console.log(`____________________ ${id++} Object - add ____________________`)
users.isAdmin = true
console.log(users)


console.log(`____________________ ${id++} Object - access to property ____________________`)
console.log(users['name'])


console.log(`____________________ ${id++} Object - key numbrer name ____________________`)
console.log(users[1.5]) // hi
console.log(users['1.5']) // hi


console.log(`____________________ ${id++} Object - key numbrer will be sorted but not key string ____________________`)
console.log(users.numbers) // 1, 3, 5


console.log(`____________________ ${id++} Dynamic Property ____________________`)
 users = {
  name:'one'
}
console.log(users.name)


console.log(`____________________ ${id++} Dynamic Property Assignment ____________________`)
name = 'Petter'
users = {
    [name]: '...'
};
console.log(users['Petter'])


console.log(`____________________ ${id++} key with spaces ____________________`)
users = {
  'key with spaces': 'Mery'
}
console.log(users['key with spaces'])


console.log(`____________________ ${id++} key with slash ____________________`)
users = {
  'key-with-spaces': 'Petter'
}
console.log(users['key-with-spaces'])


 