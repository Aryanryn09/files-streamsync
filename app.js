// // const call =require("./2-names.js")
// // const sayhi =require("./utils")
// const add = require('./osmodule')
// let wrapper= function (exports ,require,module,__filename,__dirname){
//     app.js;
// }
// console.log(wrapper);

// // add.sum(1,1);
// // console.log(add)
// // console.log(add(1,1));
// const call = require('./2-names')
// const utils =require('./utils')
// const osmodule =require('./osmodule');
// // const { pi, theval } = require('./osmodule');
// const name ="aryan"
// console.log(osmodule.sum(1,5),osmodule.pi,osmodule.theval(name))


// const data=require('./impexp')

// console.log(data)
// // console.log(utils)

// //explicit calling
// console.log(data.items)
// console.log(data.expjust.title)




// console.log(("hey i will run first"))
// // console.log(("hey i will run first"))
// setTimeout(() => {
//     console.log("hey i will run third")
// }, 0);

// console.log(("hey i will run second")) 





// const http = require('http')

// const server = http.createServer((req,res)=>{
//         if(req.url==='/'){
//             res.end("thi sis home page")
//         }
//         if(req.url==='/about'){
//             res.end("thi sis about page")
//         }
//         if(req.url==='/contact'){
//             res.end("thi sis contact page")
//         }
//         res.end("error 404 has suddenly occured here")
// })

// server.listen(5000,()=>{
//     console.log("server is listenning on 5000 port number")
// })


// const {readFile} = require("fs")

// readFile('./content/first.txt',"utf8",(err,data)=>{
//     if(err){
//         return
//     }
//    console.log(data)
// })

const {createReadStream} = require('fs')
const stream = createReadStream('./content/big.txt')

 stream.on('data',(result) => {
console.log(result)

 })