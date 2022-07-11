import axios from "axios"
import { useEffect, useState } from "react"
import "../styles/Graphique.css"
import moment from "moment"
import localization from 'moment/locale/fr';
const Graphique = ({ddebut,dfin,eau})=>
{
    const [releves,setReleve] = useState({})
    const [size,setSize] = useState(1000)
    const [datedebuttrouve,setDateDebutTrouve] = useState(false);
    useEffect(()=>{
        axios.get("https://hubeau.eaufrance.fr/api/v1/temperature/chronique?code_station="+eau+"&size="+size+"&sort=desc&pretty").then((res)=>{
                setReleve(res.data)
                //On recherche si dans le jeu de données recupéré on à la borne inferieur de la recherche
                // c a d date debut
                const trouveRelInf = res.data.data.find((element)=>element.date_mesure_temp <= ddebut)
                if(trouveRelInf==="undefined")
                {
                    // si non on vérifie si c'etait les derniers relevés de temperatures ou si 
                    //il reste un jeu de données a consulter
                    if(releves.next!==null)
                    {
                        //si il reste un jeu de données on modifie le size paramètre de la requête
                        //size: state étant dans le tableau de dépendance du useEffect
                        //Implique donc l'éxecution de useEffect à chaque modification
                        //donc la recherche serait lancer sur un plus grand jeu de données
                        setSize(size+1000)
                    }
                    //sinon size n'est pas modifié et donc useEffect n'est plus executé=>
                    // datedebuttrouve = false 
                }
                else
                {
                    //si oui datedebutrouve = true on peut donc partir de la jusqu'a date fin ou date
                    //la plus recente de température prélevée
                    setDateDebutTrouve(true);
                }

            }
    )},[size])
           
    return datedebuttrouve===false? (
        <div className="nothing">   
           <h2>En cours de développement .....</h2>
        </div>
    ) : (
        <div className="nothing">
            <h2>En cours de développement .....</h2>
        </div>
    )
}

export default Graphique