const greeting = (props) => {
    return (
        <div>
            <h5>{props.title}</h5>
            <p>{props.subtitle}</p>
        </div>
    );
}
export default greeting;