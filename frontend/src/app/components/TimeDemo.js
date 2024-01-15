export default function TimeDemo({date})
{
    //let date =new Date();
    return (<div>
        {date.toLocaleDateString()}
    </div>)
}