// * ==================================2=====================================

/*
 todo: 1. Take the object from question 1  
 todo: 2. put all the values into an array with 2 ways that you’ve learned
*/
const obj = { number: 6043, age: 21, pt: 96 };

console.log(Object.values(obj));

console.log(obj.age, obj.number, obj.pt);

for (const key in obj) {
  console.log(obj[key]);
}

const { number, age, pt } = obj;
console.log(number, pt, age);
