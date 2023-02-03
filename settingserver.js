const Eventemitter = require('events')

const customemitter = new Eventemitter()

customemitter.on('response',(name,id)=>{
    console.log(`data recieved ${name} ${id}`)
})
customemitter.emit('response')

customemitter.on('response',()=>{
    console.log(`some other logic here is the other event`)
})


customemitter.emit('response','aryan',230)
