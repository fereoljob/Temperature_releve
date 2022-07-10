import "../styles/Graphique.css"
const Graphique = ({data})=>
{
    return (
        <div className="graphe">   
            <label for='date_debut' >Sélectionner une période : </label>
            <input type='date' name='date_debut' />
            -
            <input type='date' name='date_fin' />
        </div>
    )
}

export default Graphique