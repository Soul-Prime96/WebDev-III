// let student = {
//     name: "Soul",
//     marks: 95,
//     grade: "A",

//     updateGrade: function() {
//         this.grade = "A+";
//     }
// };

// student.updateGrade();

// console.log( student.name);
// console.log( student.marks);
// console.log( student.grade);




//Rest opertor
// function addNUmbers(...numbers){
//     console.log(numbers);
// }
// addNUmbers(10,20,30,40);



// function sum(...numbers) {
//     let total = 0;

//     for (let x of numbers) {
//         total = total + x;
//     }

//     return total;
// }

// console.log(sum(1, 2, 3, 4));

// function sum(name,...args){
//     console.log(args);
//     let total=0;

//     for(let x of args){
//         total=total+x;
//     }
//     console.log(name);
//     console.log(total);
// }
// sum("Romit", 10,20,30);

function sum(...numbers){
    let total=0;
    for(let v of numbers){
        total=total+ Number(v);
    }
    console.log(total);
}
let x=prompt("Enter a number");
let numbers=x.split(" ");
sum(...numbers);