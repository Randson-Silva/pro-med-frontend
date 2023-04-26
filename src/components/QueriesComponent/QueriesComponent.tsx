import "./styles.css"

function QueriesComponent(props: {
    patientName: string;
    status: string;
}) {
    return (
        <>
            <div className="queries-component">
                <span className="patient-name">{props.patientName}</span>
                <span className="queries-status">{props.status}</span>
            </div>
        </>
    );
}

export default QueriesComponent;