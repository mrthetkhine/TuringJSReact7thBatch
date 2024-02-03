export default function withLogger(Element)
{
    return (props)=>{
      console.log('render ',Element.displayName);
      return <Element {...props}/>
    };
}