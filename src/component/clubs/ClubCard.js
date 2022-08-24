import ReactCardFlip from 'react-card-flip'; 
import React from 'react';
import './samyClub.css';

const ClubCard = (data) => {
    const [flipped, setFlipped] = React.useState(false);
    return (
        <ReactCardFlip isFlipped={flipped} flipDirection="vertical">
            <div 
                className="card" 
                onMouseEnter={() => setFlipped(true)} 
                // onMouseLeave={() => setFlipped(false)}
            >
                <div className="card-middle">
                    <img src={data.image} alt={data.Name} style={{ width: 80, height: 80, borderRadius:'5rem' }}/>
                    <p>{data.Name}</p>
                </div>
            </div>
            <div 
                className="card" 
                // onMouseEnter={() => setFlipped(true)} 
                onMouseLeave={() => setFlipped(false)}
            >
                <div className="center">
                    <p>{data.desc}</p>
                </div>
            </div>
        </ReactCardFlip>
    )
}

export default ClubCard