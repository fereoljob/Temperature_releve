import "../styles/details.css"
const Details = ({data}) => {
    /**/
    return  typeof data[0]!=="undefined" && (
        <div className="details" >
            <ul>
                <li>Cours d'eau : <span className="val">{data[0].libelle_station.substring(0,data[0].libelle_station.indexOf('à')-1)}</span></li>
                <li>Station de mesure :  <span className="val">{data[0].libelle_station}</span></li>
                <li>Date dernière mesure :  <span className="val">{data[0].date_mesure_temp}</span></li>
                <li>Heure dernière mesure :  <span className="val">{data[0].heure_mesure_temp}</span></li>
            </ul>
        </div>
    )
}
export default Details