
const http= require("http");

//  which is always free port number 
const port=8081;


// https methods 

// Get: getting the details from the server / default method/ it work directly on any browser 
// Put: overwrite,fully update
// delete: to delete data from server
// post: sending data to server
// patch : overwrite/ update very  few fields / certain fields 
http.createServer((req,res)=>
{
    res.writeHead(200,{"content-type":"text/html"});
    res.write("<h2>created first  hello server using node js technology in the full stack web development  </h2>");
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