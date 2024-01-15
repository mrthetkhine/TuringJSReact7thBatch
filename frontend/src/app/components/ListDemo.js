"use client";

function List({item}) {
    return <div key={item.id}>
        <div>
            {item.title}
        </div>

    </div>;
}

export default function ListDemo()
{
    let todos =[
        {
            id:1,
            title:'one'
        } ,
        {
            id:2,
            title:'two'
        },
        {
            id:3,
            title:'three'
        }

    ];

    return (<div>

        {
            todos.map((item)=><List
                                                        key={item.id}
                                                        item={item}/>)
        }
      
    </div>)
}