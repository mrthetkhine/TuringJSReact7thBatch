import Row from "./Row";
function Body({todos})
{
  return (<>
          {
              todos.map(item=><Row key={item.id} data={item}/>)
          }
  </>
  );
}
export default function TableDemo()
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
    return (
        <table>
            <tbody>
                <Body todos={todos}/>
            </tbody>

        </table>
    );
}