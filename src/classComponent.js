import React from "react";

class ClassComponent extends React.Component {
    constructor(props) {
        super();
    }
    
    render() {
        return (
            <>
                <h1>Class: My Age is: {this.props.age}</h1>
                <h2>I have joined: {this.props.dateJoined}</h2>
            </>
        )
    }
}

class ClassComponent2 extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <p>DOB: {this.props.det.dob}</p>
                <p>City: {this.props.det.city}</p>
                <p>State: {this.props.det.state}</p>
                <p>Country: {this.props.det.country}</p>
            </div>
        )
    }
}

export default ClassComponent;
export { ClassComponent2 };