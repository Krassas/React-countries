import React from 'react';
import '../CSS/Card.css';

const Card = (props) => {
    return (
        <div id='content'>
            <img alt="country flag" src={props.flag} />
            <div id="info">
                <h2 id="name">{props.name}</h2>
                <h4>Capital: {props.capital}</h4>
                <h4>Language: {props.language}</h4>
                <h4>Currency: {props.currency}</h4>
            </div>        
        </div>
    );
}

export default Card;