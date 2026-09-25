const fs=require('fs');

//C=create
fs.writeFile("std.txt","Name:Romit",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("File created");
    }
});

// R=read
fs.readFile("std.txt","utf-8",(err,data)=>{
    if(err){
        console.log(`Unsuccessful ${err}`);
    }
    else{
        console.log("File has been read");
    }
});

// U=update
fs.appendFile("std.txt","\nAge:28",(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("File has been updated");
    }
});

// D=delete
