import { NextResponse } from "next/server";
const todos =[
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
];
export async function GET(req: Request,{ params }: { params: { id: string } }) {

    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    console.log('Req url ',params.id);
    return NextResponse.json({ data: todos.find(todo=>todo.id== params.id) });
}
