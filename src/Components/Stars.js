import React, {useState} from 'react';
import svg from '../image/star-icon.svg'

export const Stars = (props) => {
    let [points, setPoints] = useState(props.points);
    let [dynamicPoints, setDynamicPoints] = useState(0);

    const count = [1, 2, 3, 4, 5];

    const savePoints = (event, pointTargetSetter) => count.forEach(i => {
        if (event.target.closest(`#a${i}`)) {
            pointTargetSetter(i)
        }
    })

    return <div
        className="container"
        onPointerOut={() => setDynamicPoints(points)}
        onClick={(event) => savePoints(event, setPoints)}
        onPointerOver={(event) => savePoints(event, setDynamicPoints)}
    >
        {count.map(i =>
            <img id={`a${i}`} className={i <= dynamicPoints ? 'isActive' : null} src={svg} key={i}/>
        )}
    </div>;
};

export default Stars;