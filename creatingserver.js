const http =require("http")
const port = process.env.PORT || 3000;
const server = http.createServer((req,res) =>{
   console.log(req)
    res.statusCode = 200;
    res.getHeader("Content-type","Text/html")
    res.end(`<h1>the value of aryan isM</h1> undefinedthis is the way too rock the work=ld`)
})

server.listen(port,()=>{
    console.log(`Server is listemning at the ${port}`)
})