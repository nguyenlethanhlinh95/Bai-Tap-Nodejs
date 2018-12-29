var fs = require('fs');

//appendFile ghi vao cuoi file
//Create file: appendFile(), open(), writeFile()
// fs.appendFile('mytextFile.txt','Hello content',function(err){
//     if(err) throw err;

//     console.log('Saved');
// });


// fs.open('mytestFile.txt','w',function(err,file){
//     if (err) throw err;

//     console.log('Saved');
//     console.log(file);
// });


//ghi de len file
// fs.writeFile('mytextFile.txt','Content TEDU',function(err){
//     if (err) throw err;
//     console.log('Saved');
// });


//Xoa file
// fs.unlink('mytextFile.txt',function(err){
//     if(err) throw err;
//     console.log('Saved');
// });


//rename file
fs.rename('mytextFile.txt','mytextFile_change.txt',function(err){
    if(err) throw err;
    console.log('File renamed');
});