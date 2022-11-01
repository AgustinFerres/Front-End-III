import React, { useState } from 'react'

const Productos = () => {

    const [arr, setArr] = useState([
        
        {
            id: 1,
            title: "Soy un producto 1",
        },
        {
            id: 2,
            title: "Soy un producto 2",
        },
        {
            id: 3,
            title: "Soy un producto 3",
        },
        {
            id: 4,
            title: "Soy un producto 4",
        },
        {
            id: 5,
            title: "Soy un producto 5",
        },
        
    ])

    const handleArr = (i) => setArr(arr.filter((item, index) => index !== i));

    return (
    <ul>
        {arr.map((prod, i) => <li key={i}>{prod.title} <button onClick = {()=> handleArr(i)}>Eliminar</button></li>)}
    </ul>
    )
}

export default Productos