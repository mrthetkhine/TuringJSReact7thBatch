var express = require('express');
var router = express.Router();
let todos = [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        },
        {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "completed": true
        },
        {
            "userId": 1,
            "id": 5,
            "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
            "completed": false
        },
        {
            "userId": 1,
            "id": 6,
            "title": "qui ullam ratione quibusdam voluptatem quia omnis",
            "completed": false
        },
        {
            "userId": 1,
            "id": 7,
            "title": "illo expedita consequatur quia in",
            "completed": false
        },
];
router.get('/',(req,res)=>{

    res.json(todos);
});

const handler1 = (req, res, next) => {
    console.log('Use time',req.requestTime);
    console.log('Preprocess');
    next();
};

function handler2(req, res)  {
    let todoId = req.params['todoId'];
    console.log('todo Id ', todoId);
    res.json(todos.find(todo => todo.id == todoId));
}
router.get('/download',(req,res)=>{
    console.log('Download');
    res.download('./public/download/data.txt','data.txt',(err)=>{
        console.log(err);
    });
});
router.get('/end',(req,res)=>{
    res.write('<h1>Hello</h1>');
    res.write('<h1>World</h1>');
    res.end();
});
router.get('/home',(req,res)=>{
    console.log('Redirect');
   res.redirect('/');
});
router.get('/:todoId',handler1,handler2);
router.post('/',(req,res)=>{
    res.json( {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
    },);
});

module.exports = router;