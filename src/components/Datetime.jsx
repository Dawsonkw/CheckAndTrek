

function Datetime() {
    return (
        <div>
            <p>{new Date().toLocaleDateString()}</p>
            <p>{new Date().toLocaleTimeString()}</p>
        </div>
    );
}

export default Datetime;