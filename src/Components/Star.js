import React from 'react';
import svg from '../image/star-icon.svg'

const Star = (props) => {
    return (
        <img id={props.id} className={props.className} src={svg}/>
    );
};

export default Star;