const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('welcome to out home page')
    }if(req.url==='/about'){
        res.end("here is out short history")
    }
    res.end(
        `<h1>!Oops<h1>
        <p>we can't see to find the paage tou are looking for</p>
        <a href='/'> home page</a> `
    )
})
server.listen(5000)