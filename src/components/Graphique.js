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
                const trouveRelInf = res.data.data.find((element)=>element.date_mesure_temp <= ddebut)
                if(trouveRelInf==="undefined")
                {
                    if(releves.next!==null)
                    {
                        setSize(size+1000)
                    }
                }
                else
                {
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
            En cours de développement .....
        </div>
    )
}

export default Graphique