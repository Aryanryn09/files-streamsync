const os = require('os')
const path =require('path')
console.log(os.hostname("app.js"))
console.log(os.freemem("TUTORIALFOC"))
console.log(os.tmpdir("osmodule.js"))
// console.log(path.("osmodule.js"))
const sum =(num1,num2)=>num1+num2;
const add =(num1,num2)=>num1+num2;

const pi= 3.14;
const theval=(name)=>{
    console.log(`the name of your fan is going to ne highlightes eventually after your ${name}`);
}

module.exports= {sum:sum,theval:theval,pi:pi};