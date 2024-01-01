const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://praniketbodke01:Amel2SH1nWo35E2N@cluster0.dgkdlgf.mongodb.net/todoSchema')

const TodoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos', TodoSchema)

module.exports = {
    todo
}