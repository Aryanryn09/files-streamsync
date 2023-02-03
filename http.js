const http =require('http')
// const port = 5000

const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.end("welcome to our home  page")
    }
    if(req.url ==='/about'){
        res.end("welcome to our about  page")
    }
    res.end(`
        <h1>oops</h1>
    
    <p>we cant open this page as per our knowledge</p>
  <a href="/">back home page</a>
    `
        )
    // console.log(req)
    // res.write("welcome to the http server")
    
})
server.listen(5000)