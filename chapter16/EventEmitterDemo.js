const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

function asyncDoSomething()
{
    setTimeout(()=>{
        console.log('Do something completed');
        eventEmitter.emit('somethingCompleted',{data:100});
    })
}
eventEmitter.on('start',(data)=>{
    console.log('Start event ',data);
});
console.log('Before emit ');
eventEmitter.emit('start',{
    data:'Something'
});

eventEmitter.on('somethingCompleted',(data)=>{
    console.log('somethingCompleted event ',data);
});
eventEmitter.on('somethingCompleted',(data)=>{
    console.log('somethingCompleted event 2 ',data);
});
asyncDoSomething();