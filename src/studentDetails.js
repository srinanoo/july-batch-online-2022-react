function StudentDetails(props) {
    let output = [];
    for(let temp in props.details) {
        output.push(<div key={temp}>{props.details[temp]}</div>);
    }

    return(
        <>
            <div className='card'>
                {output}
            </div>
            
        </>
    )
}

export default StudentDetails;