// 1.
const Event=require('events');//Event is class , require is a fetcher and events is a predefined class

const ud=new Event; // ud is a object

//on is used for creating and emit is used for executing or displaying
ud.on('greet',(name)=>{
    console.log(`Hello There ${name}`)
}); //greet is name of function

ud.on('exit',(name)=>{
    console.log(`See You ${name}`)
}); //exit is name of function 

ud.emit('greet','Romit'); //greet function called with its name
ud.emit('exit','Bruhh'); //exit function called with its name


// 2.
class Button extends Event{
    click(){
        this.emit('click');
    }
}
const button=new Button();
button.on('click',()=>{
    console.log("Button Clicked")
});
button.click();


//3.
console.log("Start");
setTimeout(()=>{
    console.log("Yooooo i have came after 2 second");
},2000);
setImmediate(()=>{
    console.log("Immediate Terminator");
});
process.nextTick(()=>{
    console.log("After Synchrouos code");
});

console.log("Exit");
