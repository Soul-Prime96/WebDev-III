console.log("====Array Methods====");
let numbers=[10,20,30,40,50];
console.log(numbers);

numbers.push(60); console.log(numbers);
numbers.pop(); console.log(numbers);
numbers.unshift(0); console.log(numbers); // push from front
numbers.shift(); console.log(numbers); // pop from front


console.log("====Date Object====");
let date=new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());


console.log("====Math Object====");
console.log(Math.PI);
console.log(Math.max(10,20,30,40));
console.log(Math.min(10,20,30,40));
console.log(Math.round(5.6));
console.log(Math.ceil(9.9));
console.log(Math.floor(9.9));
console.log(Math.sqrt(16));
console.log(Math.pow(2,10));