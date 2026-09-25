// class Employee{
//     constructor(id,name,sal){
//         this.id=id;
//         this.name=name;
//         this.salary=sal;
//     }
//     calculateSalary(){
//         console.log(this.salary);
//     }
// }

// class Manager extends Employee{
//     constructor(id,name,sal,incentive){
//         super(id,name,sal);
//         this.incentive=incentive;
//     }
//     calculateSalary(){
//         console.log(this.salary+this.incentive);
//     }
// }

// let e1=new Employee(101,"Romit",500000);
// let m1=new Manager(450,"Fahhhh",6,250000);
// e1.calculateSalary();
// m1.calculateSalary();


function printName(){
    setTimeout(function(){
        console.log("Fahhhhhh")
    },3000);
}
printName();
console.log("Meowwwwww");