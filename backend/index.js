const express = require('express')
const app = express();
const { createTodo } = require('../backend/types');
const { todo } = require('./db');
const cors = require('cors')


app.use(express.json())
app.use(cors())

app.post('/todo', async(req,res)=>{
    const createpayload = req.body
    const parsedPayload = createTodo.safeParse(createpayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "you sent wrong inputs"
        })
        return;
    }
    //Put it in mongo
    await todo.create({
        title : createpayload.title,
        description : createpayload.description,
        completed : false
    })
    res.json({
        msg : "Todo Created !"
    })
})

app.get('/todos',async(req,res)=>{
   const allTodos = await todo.find({})
    res.json({
       allTodos
    })
})

app.put('/completed',async(req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(3000,()=>{
    console.log("Server started on port 3000")
})
