import React, { useState } from 'react';
export default function Counter() {
    // const abd = useState(0);
    const [count, setCount] = useState(0);
    // console.log(abd);
    const handleClick = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const handleSub = () => {
        const newRed = count - 1;
        setCount(newRed);
    }
    const handleMult = () => {
        const newMult = count * 2;
        setCount(newMult);
    }
    const handleDiv = () => {
        const newDiv = count / 2;
        setCount(newDiv);
    }
     return (
         <div style={{ border: '2px solid blue', padding: '10px', margin: '10px' }}>
             <h3>Counter : {count} </h3>
             <button style={{border : '3px solid red', padding : '20px', margin : '10px', fontWeight : '800'}} onClick={handleClick} >Add</button>
             <button style={{ border: '3px solid maroon', padding: '20px', margin: '10px',fontWeight : '800' }} onClick={handleSub} >SUB</button>
             <button style={{ border: '3px solid black', padding: '20px', margin: '10px', fontWeight : '800' }} onClick={handleMult} >MULT</button>
             <button style={{ border: '3px solid pink', padding: '20px', margin: '10px', fontWeight : '800' }} onClick={handleDiv} >DIV</button>
        </div>
    )
}