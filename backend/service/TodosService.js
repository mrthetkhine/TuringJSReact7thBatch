let Todos = require('../model/ToDo');

async function getAllTodos()
{
    //console.log('TodoServices getAllTodos');
    return Todos.find();
}
async function getTodoById(todoId)
{
    return Todos.findById(todoId);
}
async function saveTodo(todo)
{
    let newToDo = new Todos(todo);
    return newToDo.save();
}
async function updateTodo(todoId,todo)
{
    let updateTodo = await Todos.findByIdAndUpdate(todoId,todo,{new:true});
    return updateTodo;
}
async function deleteTodoById(todoId)
{
    let todo = await Todos.findById(todoId);
    if(todo)
    {
        let deletedTodo = await Todos.findByIdAndDelete(todoId);
        return deletedTodo;
    }
    else
    {
        throw new Error('Invalid todoId');
    }
}
module.exports = {
    getAllTodos,
    getTodoById,
    saveTodo,
    updateTodo,
    deleteTodoById,
};
