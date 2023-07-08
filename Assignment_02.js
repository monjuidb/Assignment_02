
//=======================Exercise 1==============================

const  destructureExample=(obj, arr)=> {
  const { name, age } = obj;
  const [indx0, , indx2] = arr;

  return { name, age};
}
const person = { name: 'John', age: 30, city: 'New York' };

const arr1 = [10, 20, 30, 40];
const result=destructureExample(person,arr1)
console.log(result)


//=======================Exercise 2==============================
const  sumNumbers=(...numbers)=> {
  let sumTotal= numbers.reduce((sum, number) => sum + number, 0);
  console.log(sumTotal)
}

sumNumbers(1, 2, 3, 4, 5);


//=======================Exercise 3==============================
const  createGreeting=(name)=> {
  let greetings =`Hello, ${name}! Welcome to our website.`
  console.log(greetings)
}
createGreeting('John');


//=======================Exercise 4==============================

const  isEven=(number)=> {
  let result= number % 2 === 0 ? "Even" : "Odd"
  console.log(result)
}

isEven(7)

//=======================Exercise 5==============================

const multiply = (a, b) => a * b;

//=======================Exercise 6==============================
const getLargestNumber=(num1, num2)=>  console.log( num1 >= num2 ? num1 : num2)

getLargestNumber(5,10)

//=======================Exercise 7==============================
const  getAddressCity=(address)=>   address?.city ?? "Unknown";
const addressWithCity = { street: '123 Main St', country: 'USA' };
const addressWothoutCity = { street: '123 Main St',city:'New York', country: 'USA' };
console.log(getAddressCity(addressWithCity));
console.log(getAddressCity(addressWothoutCity));

//=======================Exercise 8==============================

const  doubleNumbers=(numbersArray)=>   numbersArray.map(number => number * 2);
const arr2=[1,23,4,5,7]
console.log(doubleNumbers(arr2));

//=======================Exercise 9==============================

const  filterEvenNumbers=(numbersArray)=>   numbersArray.filter(number => number % 2 === 0)
const arr3=[1,23,4,8,5,7]
console.log(filterEvenNumbers(arr3));

//=======================Exercise 10==============================

const sumArray = numbers => numbers.reduce((sum, number) => sum + number, 0);
const arr4=[1,23,4,8,5,7]
console.log(sumArray(arr4));


//=======================Exercise 11==============================
const sortNumbers = numbers => numbers.sort((a, b) => a - b);
const arr5=[1,23,4,8,5,7]
console.log(sortNumbers(arr5));






