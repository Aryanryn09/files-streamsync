


console.log(("hey i will run first"))
// console.log(("hey i will run first"))
setTimeout(() => {
    console.log("hey i will run third")
}, 0);

console.log(("hey i will run second")) 


const http = require('http')

const server = http.createServer = (req,res)=>{

     console.log("request an event")
     res.end("hello world")
}

server.listen(5000,()=>{
    console.log("serveris listening on port : 5000")
})