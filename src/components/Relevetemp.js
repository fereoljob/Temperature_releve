import "../styles/Relevetemp.css"
const Relevetemp = ({data}) => {
    const donneesatrier = data.filter((element)=>element.date_mesure_temp===data[0].date_mesure_temp)
    const donneestrier = donneesatrier.reverse(); 
    return typeof donneestrier[0]!=="undefined" && (
        <div className="tempval">
            <p>
                {Math.round(donneestrier[0].resultat*100)/100 } <sup>&#8451;</sup>
            </p>
        </div>
    )
}
export default Relevetemp