const Eventemitter =require('events')
const eventemitter = new Eventemitter()

eventemitter.on('theval'/* eventlistener*/ ,()=>{
    console.log("this is aryan signing off AFTER COMP,ETEING this tutoprial")
})
eventemitter.emit('theval')//unless the event emitter is not emmited or called 
// it will not show the value of the clalled fumctiomn
eventemitter.on('tutorial',(num1,num2)=>{

  console.log(num1+num2);
})
eventemitter.emit('tutorial',4,8)