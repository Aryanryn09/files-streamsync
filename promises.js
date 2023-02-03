const {readFile,writeFile} = require('fs')
const util = require('util')
const readfilepromises = util.promisify(readFile)
const writefilepromises = util.promisify(readFile)


console.log("start")

const getText = (path)=>{
return new Promise((resolve,reject)=>{

    readFile('./content/first copy.txt','utf8',(err,data)=>{
        if(err){
            reject(err)
        }else{
           resolve(data)
        }
    })

})

}
// getText('./content/first copy.txt')
// .then((result)=>console.log(result))
// .catch((err)=>console.log(err))


const start = async () => {
    try{
        const first = await getText('./content/first copy.txt')
        const second = await getText('./content/syncfile.txt','utf8')
  await writefilepromises ('./content/new.txt',`thsi is hello file :${first} ${second}`,{flag : a })
        console.log(first,second)
    }
    catch(error){
        console.log(error)
    }
}
start()