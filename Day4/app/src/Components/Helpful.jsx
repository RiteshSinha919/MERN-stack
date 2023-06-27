import "./Helpful.css";
import { useState } from 'react';

const Helpful = ( props ) => {
    
    const { text } = props;

    const [ isClicked, setIsClicked ] = useState(false);

    const handleClick = ( ) => {
        if (isClicked){
            setIsClicked(false);
        } else {
            setIsClicked(true);
        }

    }
    
    const buttonStyles = {
        backgroundColor: isClicked ? '#000000' : '#ffffff',
        color: isClicked ? '#ffffff' : '#000000',
        padding: '8px 20px',
        margin: '50px 50px'
    };

    return (
        <div className="btn-container">
            <button style={buttonStyles} onClick={handleClick}> {text} </button>
        </div>
    );
}

export default Helpful;