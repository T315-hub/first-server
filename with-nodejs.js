// include http in our server
const { truncateSync } = require("fs");
const http = require("http");

// define the port number which is free and used for running the our server
const port = 8081;

const toDoList = ["need to learn", "need to code"];
// http methods
//GET: getting a  certain details  from server
// PUT: overwrite , fully update
// PATCH: update few fields
// POST: send a data to server
// DELETE: delete content from  the server

http
  .createServer((req, res) => 
  {
    //  res.writeHead(200,"content-type : text/html");
    //  res.write("our first server using node js technology that run in backend which is communicate with the database  ");
    // res.write("<h2>hello first server</h2>");
    // res.end();
    const { method, url } = req;
    // console.log(method,url);
    // res.end();

    if (url === "/todos") 
    {
      if (method === "GET") 
      {
        res.writeHead(200, "content-type :text/html");
        res.write(toDoList.toString());
      } 
      else if (method === "POST") 
      {
        let body = "";
        req
          .on("error", (err) =>
           {
            console.error(err);
          })
          .on("data", (chunk) =>
           {
            body += chunk;
            // console.log(chunk);
          })
          .on("end", () => {
            body = JSON.parse(body);
            // console.log(body);
            let newToList=toDoList;
            newToList.push(body.item);
            console.log(newToList);
          });
        
        } else if(method === "DELETE")
        {
            let body='';
            req.on('error',(err)=>
            {
                console.log(err);
            })
            .on('data',(chunk)=>
            {
                  body+=chunk;
            })
            .on('end',()=>
            {
                  body=JSON.parse(body);
                  let deleteItem=body.item;
                  for(let i=0;i<toDoList.length;i++)
                  {
                        if(toDoList[i]===deleteItem)
                        {
                            toDoList.splice(i,1);
                            break;
                        }
                  }
            })
        }
      else{ res.writeHead(501)}
    }
    else{res.writeHead(404)}
    res.end();
  })

  .listen(port, () => {
    console.log(`our server is start on ${port}`);
  });
//http://localhost:8081
// http://localhost:8081/
// http://localhost:8081/contactus
// http://localhost:8081/aboutus



//CSR
// client side rendered
// url http://localhost:8081 (req)
// server send thr response (res)
// html,css,js(tons of js operation would will be carried here )
// all the frontend computation  on the client side
// it would not be refresh again and again 
// it speed is faster(when we reloading an different page and
// if we go to another page it not refresh again)
// low cost of server (because we are not raising large amount of request on every reload )



// SSR
// server side rendered
// url http://localhost:8081 (req)
// url server send the response (res)
// html,css,js
// but in this case  for reloading any page we refresh again and again
// so its speed is low  
// its server cost is high 