import React, { useState } from 'react'

const Contador = () => {

    const [count, setCount] = useState(0);

    const handleCountSuma = () => (count + 1) > 50 ? count : setCount(prevCount => prevCount + 1);
    const handleCountResta = () => (count - 1) < 0 ? count : setCount(prevCount => prevCount - 1);
    const handleCountMulti = () => (count * 2) > 50 ? count : setCount(prevCount => prevCount * 2);
    const handleCountDivi = () => (count / 2) < 0 ? count : setCount(prevCount => prevCount / 2);

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={handleCountSuma}>Sumar</button>
            <button onClick={handleCountResta}>Restar</button>
            <button onClick={handleCountMulti}>Multiplicar</button>
            <button onClick={handleCountDivi}>Dividir</button>
        </div>
    )
}

export default Contador