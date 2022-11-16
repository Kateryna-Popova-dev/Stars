import React, {useState} from 'react';
import Star from "./Star";

export const FunctionStars = (props) => {
    let [points, setPoints] = useState(props.points);
    let [dynamicPoints, setDynamicPoints] = useState(props.points);

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
            <Star id={`a${i}`} className={i <= dynamicPoints ? 'isActive' : null} key={i}></Star>
        )}
    </div>;
};

export default FunctionStars;