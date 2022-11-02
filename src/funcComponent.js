import './funcComponent.css';
import Color from './funcComponent.module.css';
// import Button from 'react-bootstrap/Button';

function FunctionComponent(props) {
    // let name = "Dinesh";

    return (
        <>
            <h2 className="colorRed">Function: I'm {props.name}</h2>
            <h2>My Subject: {props.subject}</h2>
        </>
    );
}

function FunctionComponent2(props) {
    return (
        <>
            <div className="colorBlue">
                This is an optional Function output
            </div>
            <div className={Color.colorGreen}>
                <p>DOB: {props.det.dob}</p>
                <p>City: {props.det.city}</p>
                <p>State: {props.det.state}</p>
                <p>Country: {props.det.country}</p>

            </div>
            {/* <Button variant="secondary">Primary</Button>{' '}

            <button className='btn btn-secondary p-4'>This is bootstrap button</button> */}
        </>
    );
}

export default FunctionComponent;
export { FunctionComponent2 };