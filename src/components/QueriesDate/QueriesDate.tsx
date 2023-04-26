import "./styles.css"

function QueriesDate(props: {
    date: string;
}) {
    return (
        <>
            <div className="queries-date">
                <span>{props.date}</span>
            </div>
        </>
    );
}

export default QueriesDate