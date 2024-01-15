"use client";
export default function JsxAsProperty({tag})
{
    console.log('Tag ',tag);
    return (<div>
        {tag}
    </div>);
}