import ReactCardFlip from 'react-card-flip'; 
import React from 'react';
import './samyClub.css';

const ClubCard = (data) => {
    const [flipped, setFlipped] = React.useState(false);
    return (
        <ReactCardFlip isFlipped={flipped} flipDirection="horizontal" infinite={true} flipSpeedBackToFront={0.4} flipSpeedFrontToBack={0.4}>
            <div 
                className="card" 
                onClick={() => setFlipped(!flipped) } 
                // onMouseLeave={() => setFlipped(false)}
            >
                <div className="card-middle">
                    <img src={data.image} alt={data.Name} style={ data.s!==undefined?data.s:{ width: 80, height: 80, borderRadius:'5rem' }}/>
                    <p>{data.Name}</p>
                </div>
            </div>
            <div 
                className="card" 
                // onMouseEnter={() => setFlipped(true)} 
                onClick={() => setFlipped(!flipped) } 
            >
                <div className="center">
                    <p>{data.desc}</p>
                </div>
            </div>
        </ReactCardFlip>
    )
}

export default ClubCard