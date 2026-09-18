// class Sec_A{
//     name;
//     roll;
//     add;
//     marks;
//     constructor(name, roll, add, marks){
//         this.name=name;
//         this.roll=roll;
//         this.add=add;
//         this.marks=marks;
//     }
//     show(){
//         console.log(this.name);
//         console.log(this.roll);
//         console.log(this.add);
//         console.log(this.marks);
//     }
// }

// let s=new Sec_A();
// s.show();
// let s1=new Sec_A("Romit", 160, 3193, 500);
// s1.show();



// class Hello2{
//     static name="Romit Gupta";
//     static show(){
//         console.log("Hello, "+Hello2.name);
//     }
// }
// Hello2.show();


// class Hello3{
//     instance="Hello I am under the water";
//     static name="Fahhhhhhhh";
//     method(){
//         this.instance=instance;
//     }
//     static shows(){
//         console.log(Hello3.name);
//     };
// show(){
//     console.log(this.instance);
// }
// }
// Hello3.shows();
// let h3=new Hello3();
// h3.show();



// class Student{
//     roll;
//     name;
//     marks;
//     static cout=0;
//     constructor(name,roll,marks){
//         this.name=name;
//         this.roll=roll;
//         this.marks=marks;
//         Student.cout = Student.cout + 1;
//     }
//     static count(){
//         console.log(Student.cout);
//     }
//     displayResult(){
//         console.log(this.name);
//         console.log(this.roll);
//         console.log(this.marks);
//         if(this.marks>=100) console.log("Passed");
//         else console.log("Failed");
//     }
// }
// let s=new Student("Romit",160,500);
// Student.count();
// s.displayResult();


class BankAccount{
    acc;
    name;
    balance;
    constructor(acc,name,balance){
        this.acc=acc;
        this.name=name;
        this.balance=balance;
    }
    static bankInfo(){
        console.log("My Bank is Fahhhhh");
    }

    depoist(amount){
        this.balance=this.balance+amount;
        console.log(amount+" inserted");

    }
    withdraw(amount){
        if(this.balance<amount){
            console.log("You are dumb");
        }
        this.balance=this.balance-amount;
        console.log(amount+" withdrawn");
    }
    display(amount){
        console.log(this.balance);
    }
}
let b=new BankAccount(120,"Romit",10000);
BankAccount.bankInfo();
b.depoist(100000);
b.withdraw(4000);
b.display();