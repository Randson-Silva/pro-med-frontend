import loadingGif from "../../assets/img/static/loading-gif.gif";
import "./styles.css";

function Loading() {
    return (
        <div className="loading-wrapper">
            <img src={loadingGif} alt="loading gif" />
        </div>
    );
}

export default Loading;