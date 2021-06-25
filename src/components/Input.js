import React, { useState } from "react";

const ListItems = ({items}) => {
    return (
        items.map((item, index) => 
            <h4 key={index}>{item}</h4> 
        )
    )
  } 
  
export default function Input({showItem}) {
    
    const [value, setValue] = useState("");
    const [items, setItems] = useState([]);

    const handleChange = (event)=> {
        setValue(event.target.value);
    };
    
    const handleSubmit = (event)=> {
        event.preventDefault();
        setItems([...items, value])
        setValue("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={value}
                    onChange={handleChange}
                />
                <input type="submit" value="Submit" placeholder="submit"/>
            </form>
            <ListItems items={items}/>
        </div>
    );
}
