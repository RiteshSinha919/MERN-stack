import { useState, useEffect } from "react";


const Counter = ( ) => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        fetchCounter();
    }, [])

    const fetchCounter = async () => {
        const response = await fetch('http://localhost:3000/counter');
        const data = await response.json();
        setCount(data.counter);
    }

    const incrementCounter = async () => {
        const response = await fetch('http://localhost:3000/counter/increment', {method: 'PUT'});
        const data = await response.json();
        setCount(data.counter);
    }

    const decrementCounter = async () => {
        const response = await fetch('http://localhost:3000/counter/decrement',{ method: 'PUT'});
        const data = await response.json();
        setCount(data.counter);
    }

    return (
        <div>
            <button onClick={decrementCounter}> - </button>
            <h3>Count : { count }</h3>
            <button onClick={incrementCounter}> + </button>
        </div>
    )
}

export default Counter;