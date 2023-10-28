const http = require("http");
const fs = require("fs");
const url = require("url");

const port =3000;
const server = http.createServer((req,res)=>{
    let path = url.parse(req.url).pathname;
    // console.log(url.parse(req.url))
    
    if(path === "/"){
        fs.readFile("./index.html","utf-8",(error,data)=>{
           
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end();
        })
    }


    if(path === "/set-task"){
        let query = url.parse(req.url,true).query;
        console.log(query)
        fs.readFile("./data.json","utf-8",(error,data)=>{
            let list = data ===""?[]:JSON.parse(data);
            list.push(query);
            fs.writeFile("./data.json",JSON.stringify(list),(error)=>{
                if(error){
                    res.write("Error Occured");
                }
                res.end();
            })
        })
       
        
    
    }

    if(path === "/get-task"){
        fs.readFile("./data.json","utf-8",(error,data)=>{
            console.log(data);
            res.writeHead(200,{"Content-Type" : "text/json"});
            res.write(JSON.stringify(data));
            res.end();
        })
    }
    if(path === "/del-task"){
        let query = url.parse(req.url,true).query;
        fs.readFile("./data.json","utf-8",(error,data)=>{
            let dataObj =JSON.parse(data);
            fs.writeFile("./data.json",
            JSON.stringify(dataObj.filter(element => element.task !== query.task)),
            error=>{
                res.write("deleted")
                if(error){
                    res.write("Error Occured");
                }
                res.end();
            })
        })
    }
    if(path === "/edit-task"){
        let query = url.parse(req.url,true).query;
        fs.readFile("./data.json","utf-8",(error,data)=>{
        let newlist = JSON.parse(data).map(item=>{
            if(item.task === query.oldtask){
                return {task:query.newtask};
            }
            return item
        });
    
           fs.writeFile("./data.json",
            JSON.stringify(newlist),
            error=>{
                res.write("Success")
                if(error){
                    res.write("Error Occured");
                }
                res.end();
            })
        })
    }
});


server.listen(port,(error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("server started on port")
    }
});


//writefile rewrite the contents so appendfile is used