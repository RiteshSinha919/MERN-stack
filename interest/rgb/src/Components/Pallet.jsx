import './Pallet.css'
import {useState, useEffect} from 'react';

const Pallet = ( props ) => {

    const [color, setColor] = useState({red: 0, green: 0, blue: 0});

    useEffect(() => {
        fetchColor();
    }, []);

    const fetchColor = async ( ) => {
        try {
            const res = await fetch('http://localhost:3000/pallet');
            const data = await res.json();
            setColor(data);
        } catch (error) {
            console.error('Error fetching color:', error);
        }
    
    }

    const increaseColor = async ( color ) => {
        try {
            const res = await fetch(`http://localhost:3000/pallet/increase/${color}`, {method: 'PUT'});
            const data = await res.json();
            setColor(data);
        } catch (error) {
            console.error("Error increasing the color counter", error);
        }
    }

    const decreaseColor = async ( color ) => {
        try {
            const res = await fetch(`http://localhost:3000/pallet/decrease/${color}`, {method: 'PUT'});
            const data = await res.json();
            setColor(data);
        } catch (error) {
            console.error("Error decreasing the color counter", error);
        }
    }


    const { red, green, blue } = color;
    const backgroundColor = `rgb(${red}, ${green}, ${blue})`


    return (
        <div className="container" style={{backgroundColor}}>
            <div className="red-container">
                <button onClick={() => increaseColor('red')} > + </button>
                <h2>Red: {red}</h2>
                <button onClick={() => decreaseColor('red')}> - </button>
            </div>
            <div className="green-container">
                <button onClick={() => increaseColor('green')}> + </button>
                <h2>Green: {green}</h2>
                <button onClick={() => decreaseColor('green')}> - </button>
            </div>
            <div className="blue-container">
                <button onClick={() => increaseColor('blue')}> + </button>
                <h2>Blue: {blue}</h2>
                <button onClick={() => decreaseColor('blue')}> - </button>
            </div>
        </div>
    )
}

export default Pallet;