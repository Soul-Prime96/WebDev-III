// console.log("====Variables====");

// // var text="Something";
// var fname="Romit";
// var lname="Gupta";
// console.log(fname+" "+lname);


// console.log("====If Else Statement====");
// var a=40;
// var b=30;
// if(a>b) console.log("A is greater than B");
// else console.log("B is greater than A");


// console.log("\n====Function====");
// function abes(){
//     console.log("Welcome Students");
//     console.log("Welcome to Node.js");
// }
// abes();


// console.log("\n====Function with Parameters====")
// function greet(fnmae,lname){
//     console.log("Hello",fnmae,lname);
// }
// greet("Romit","Gupta");


// console.log("\n====Function Return====")
// function add(x,y){
//     return x+y;
// }
// var result=add(20,30);
// console.log(result);


// console.log("\n====Default Arguments====");
// function fullName(fname="ABES",lname="EC"){
//     return fname+" "+lname;
// }
// console.log(fullName());
// console.log(fullName("Romit","Gupta"));


console.log("\n====Percentage====");
function totalMarks(math,english,science){
    return math+ english +science;
}

function percentage(total){
    return (total/300)*100;
}

var total=totalMarks(90,80,70);
console.log("Total Marks:",total);
console.log("Percentage:",percentage(total)+"%");