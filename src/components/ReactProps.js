import '../style/styleText.css';

function ReactProps(props) {
    return (
        <>
        <div className='wrapper'>
            <h1>Name: {props.name}</h1>
            <h2>Department: {props.department}</h2>
            <p>Age: {props.age}</p>
        </div>
        </>
    )
}

export default ReactProps;