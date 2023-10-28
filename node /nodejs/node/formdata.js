const http = require('http');
const fs = require('fs')
const url = require('url')

const port =3000

const server = http.createServer((req,res)=>{

})
server.listen(port,error=>{
    if(error){
        console.log(error);
    }else{
        console.log("Server started on port 3000");
    }
})