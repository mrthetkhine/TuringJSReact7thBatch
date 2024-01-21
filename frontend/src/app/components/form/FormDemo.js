"use client";
import {useState} from "react";
export default function FormDemo()
{
    const [price,setPrice] = useState(0);
    const [quantity,setQuantity] = useState(0);
    const handlePrice=(e) =>{
        setPrice(e.target.value);
    };
    const handleQuantity=(e) =>{
        setQuantity(e.target.value);
    };
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log("form submit ",price, " Qty ",quantity);
        setPrice(0);
        setQuantity(0);
    };
    return (<div>
        <form onSubmit={handleSubmit}>
            Form Demo
            <br/>
            Price <input type={"text"}
                         value={price}
                         onChange={handlePrice}
        />
            <br/>
            Quantity <input type={"text"}
                            value={quantity}
                            onChange={handleQuantity}/>
            <br/>
            Total {price*quantity}
            <button type={"submit"}
                    >Submit</button>
        </form>

    </div>);
}