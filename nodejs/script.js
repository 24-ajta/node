/*------Basic syntax--------*/


// console.log("welcome");

// let a=2;
// let b=3;
// let z= a+b;
// console.log("addition",z);


// console.log(global);//provide access to several built-in objects like window object



/*-----------------------------------------http module----------------------------------*/



// const http = require("http");


// const port=3000;

// const server = http.createServer((req,res)=>{
//     res.write("this is home page");
//     res.end();//to send data to client
// })
// server.listen(port,(error)=>{
//     if(error){
//         console.log(error);
        
//     }
//     console.log("Server started on "+port);
// })

// const http = require("http");


// const port=3000;

// const server = http.createServer((req,res)=>{
   
   
//     if(req.url === "/home"){
//         res.writeHead(200,{"Content-TYpe":"text/html"});//function used to write contents in response headers
//         res.write("<h1>This is home page</h1>");
//         res.end();
//         return;
        
//     }
//     if(req.url === "/about"){
//         res.write("this is about page");
//         res.end();
//         return;
//     }
//     res.write("not found");
//     res.end()
// })
// server.listen(port,(error)=>{
//     if(error){
//         console.log(error);
        
//     }
//     console.log("Server started on "+port);
// })


/*---------------------------------------------------url module---------------------------------------------*/



// const http = require("http");
// const url = require("url");

// const port=3000;

// const server = http.createServer((req,res)=>{
   
//     console.log(req.url);
//     let path =url.parse(req.url,true);
   
//     if(path.pathname === "/home"){
//         res.writeHead(200,{"Content-TYpe":"text/html"});//function used to write contents in response headers
//         res.write("<h1>This is home page</h1>");
//         res.end();
//         return;
        
//     }
//     if(path.pathname === "/about"){
//         res.writeHead(200,{"Content-TYpe":"text/html"});
//         res.write(
//         `
//         <form action="/api" method="get">
//             <input type="text" name="username">
//             <input type="submit" value="send">
//         </form>
//     `
//     );
//     res.end();
//     return;
//     }
//     if(path.pathname === "/api"){
//         console.log(path.query);
//         user=path.query.username;
//         res.end("Welcome "+" "+user);
//         return;
//     }

//     res.write("not found");
//     res.end()
// });
// server.listen(port,(error)=>{
//     if(error){
//         console.log(error);
        
//     }
//     console.log("Server started on "+port);
// })


/*----------------------------------------------------fs -------------------------------------------*/

const http = require("http");
const url = require("url");
const fs = require("fs");


const port=3000;

const server = http.createServer((req,res)=>{
   
    console.log(req.url);
    let path =url.parse(req.url,true);
   
    if(path.pathname === "/home"){
        // console.log("path",path.pathname);
        fs.readFile("./index.html","utf-8",(error,data)=>{
            if(error){
                console.log(error);
                res.end("Error occured");
                return;
            }
           
        
        res.writeHead(200,{"Content-TYpe":"text/html"});//function used to write contents in response headers
        res.write(data);
        res.end();
        return;
    })
        
    }
    if(path.pathname === "/about"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(
        `
        <form action="/api" method="get">
            <input type="text" name="username">
            <input type="submit" value="send">
        </form>
    `
    );
    res.end();
    return;
    }
    if(path.pathname === "/api"){
        console.log(path.query);
        user=path.query.username;
        res.end("Welcome "+" "+user);
        return;
    }

    // res.write("not found");
    // res.end()
});
server.listen(port,(error)=>{
    if(error){
        console.log(error);
        
    }
    console.log("Server started on "+port);
})