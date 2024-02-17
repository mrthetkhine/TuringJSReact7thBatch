var todoService = require('./../service/TodosService');
async function getAllTodos(req,res)
{
    let todos = await todoService.getAllTodos();
    //console.log('Todos from services ',todos);
    res.json(todos);
}
async function  getTodoById(req,res)
{
    let todoId = req.params['todoId'];
    console.log('todo Id ', todoId);

    try {
        let todo = await todoService.getTodoById(todoId);
        if (todo)
        {
            res.json(todo);
        }
        else
        {
            res.status(400).json({
                error:'ToDo not found'
            });
        }
    }
    catch(e)
    {
        res.status(400).json({
            error:'ToDo not found'
        });
    }

}
async function createTodo(req,res)
{
    let todo = req.body;
    try
    {
        let savedTodo = await todoService.saveTodo(todo);
        console.log('todo ',todo);
        if(savedTodo)
        {
            res.status(201).json(savedTodo);
        }
    }
    catch(e)
    {
        res.status(400).json({
            error:e
        });
    }

}
async function updateTodo(req,res)
{
    let todoId = req.params['todoId'];
    let todo = req.body;
    try
    {
        let updatedTodo = await todoService.updateTodo(todoId,todo);
        if(updatedTodo)
        {
            res.json(updatedTodo);
        }
    }
    catch(e)
    {
        res.status(400).json({
            error:e
        });
    }
}
async function deleteTodo(req,res) {
    let todoId = req.params['todoId'];
    try {
        setTimeout(async ()=>{
            let deletedTodo = await todoService.deleteTodoById(todoId);
            if(deletedTodo)
            {
                res.json(deletedTodo);
            }
        },2000);

    } catch (e)
    {
        res.status(400).json({
            error:e.message
        });
    }}

module.exports = {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo,
};
