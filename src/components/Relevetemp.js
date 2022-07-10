import "../styles/Relevetemp.css"
const Relevetemp = ({data}) => {
    /* */

    return typeof data[0]!=="undefined" && (
        <div className="tempval">
            <p>
                {Math.round(data[0].resultat*100)/100 } <sup>&#8451;</sup>
            </p>
        </div>
    )
}
export default Relevetemp