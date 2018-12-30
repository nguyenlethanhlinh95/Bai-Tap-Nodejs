var events = require('events');
//tao moi doi tuong
var em = new events.EventEmitter();

//bat lang nghe su kien
em.on('FristEvent',function(data){
    console.log(data); 
});
//Phát ra sự kiện:
em.emit('FristEvent', 'This is my first NodeJS event emitter example');

