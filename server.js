
const http= require("http");
const { resetWatchers } = require("nodemon/lib/monitor/watch");

//  which is always free port number 
const port=8081;


const toDoList=["need to learn","need to code"];
// https methods 

// GET: getting the details from the server / default method/ it work directly on any browser 
// PUT: overwrite,fully update
// DELETE : to delete data from server
// POST: sending data to server
// PATCH : overwrite/ update very  few fields / certain fields 
http.createServer((req,res)=>
{
    // res.writeHead(200,{"content-type":"text/html"});
    // res.write("<h2>created first  hello server using node js technology in the full stack web development  </h2>");
    // res.end();
//    const {method,url}=req;
//    console.log(method,url);
//    res.end();
  if(url === "/todos")
  {    
       if(method === "GET")
       {
           res.writeHead(200,{"Content-Type": "text/html"});
           res.write(toDoList.toString);
        //    res.end();
       }
       else if(method=== "POST")
       {
            let body="";
            res.on("error",(err)=>
            {
                console.log(err); 
            })
            .on("data",(chunk)=>
            {
                body +=chunk;
                console.log(chunk);
            })
            .on("end",()=>
            {
                 body=JSON.parse(body);
                 console.log("body state",body);
            })
       }
       else
       {
           res.writeHead(501);
       }
  }
  else
  {
       res.writeHead(404);
  }
  res.end();

})


.listen(port,()=>
{
    console.log(`server is start on ${port} port number`);
})

// routing to different path in one website that having multiple web page 
// https://localhost:8081
// https://localhost:8081/
// https://localhost:8081/home
// https://localhost:8081/aboutus
// https://localhost:8081/contactus
// https://localhost:8081/footer