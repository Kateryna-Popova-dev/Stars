import React from "react";
import Star from "./Star";

class ClassStars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            points: props.points,
            dynamicPoints: props.points,
        }
    }

    count = [1, 2, 3, 4, 5];
    getPointFromStar = (event) => this.count.find(i => event.target.closest(`#a${i}`));

    render() {
        return <div
            className="container"
            onPointerOut={() => this.setState({dynamicPoints: this.state.points})}
            onClick={(event) => this.setState({points: this.getPointFromStar(event)})}
            onPointerOver={(event) => this.setState({dynamicPoints: this.getPointFromStar(event)})}
        >
            {this.count.map(i =>
                <Star id={`a${i}`} className={i <= this.state.dynamicPoints ? 'isActive' : null} key={i}></Star>
            )}
        </div>;
    }
}

export default ClassStars;