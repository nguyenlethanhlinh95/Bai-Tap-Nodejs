var fs = require('fs');

//chay theo thu tu
// var data = fs.readFileSync('test.txt');

// console.log(data.toString());
// console.log('Program ended');


//Chay bat dong bo
fs.readFile('test.txt',function(err,data){
    if(err) throw err;
    console.log(data.toString());
});

console.log('Program ended');