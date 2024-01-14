function formatDate(date) {
    return new Intl.DateTimeFormat(
        'en-US',
        { weekday: 'long' }
    ).format(date);
}

export default function JsxDemo()
{
    const today = new Date();
    const name = 'Gregorio Y. Zara';
    let styleCss={
        backgroundColor: 'black',
        color: 'pink'
    };
    let person={
        name :'Someone'
    }
    return(<div style={styleCss}>
        JSX demo
        {name}
        {formatDate(today)}
        <h1>
            {person.name}
        </h1>
    </div>)
}