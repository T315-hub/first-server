const express=require('express');

const port=8081;
const app=express();
app.use(express.json());

const toDoList=["Need to Learn","Need to Code"];

//http://localhost:8081


// get method 
app.get("/todos",(req,res)=>
{
    res.status(200).send(toDoList);
});
// post method
app.post("/todos",(req,res)=>
{
    let newItem=req.body.item;
    toDoList.push(newItem);
    res.status(200).send({
        message:"added",
        data:toDoList
    });
});
// delete 
app.delete("/todos",(req,res)=>
{
     const deleteItem=req.body.item;
     toDoList.find((element,index)=> {
        if(element=== deleteItem)
        {
            toDoList.splice(index,1)
        }
     });
     res.status(201).send({
        message:"delete success",
        data:toDoList,
        deleteItem:`${deleteItem}`
     })
})

app.all('/todos',(req,res)=>
    {
        res.status(501).send();
    })
app.all("*",(req,res)=>
{
    res.status(404).send();
})







.listen(port,()=>
{
    console.log(`the server is start on port ${port}`);
})
