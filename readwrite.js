const {readFile,writeFile} = require('fs')

readFile('./content/first copy.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result;
  

    readFile('./content/first.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second =result;

        writeFile('./content/syncfile.txt',`here both the files are addded together: ${first},${second}`,(err,result)=>{

            if(err){
                console.log(err)
                return
            }
            console.log(result)
        })

    } )
})
console.log("we cna see the inheritance of this behaviour")
//here firstly the comment will be inherited then the behaviur will be inherited