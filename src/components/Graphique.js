import axios from "axios"
import { useEffect, useState } from "react"
import "../styles/Graphique.css"
const Graphique = ({date_debut,date_fin,Eau})=>
{
    const[releves,setReleve] = useState({})
    let datedebuttrouve = false;
    useEffect(()=>{
        let size = 1000
        while(true){
            axios.get("https://hubeau.eaufrance.fr/api/v1/temperature/chronique?code_station="+Eau+"&size="+size+"&sort=desc&pretty").then((res)=>setReleve(res.data))
            const trouveRelInf = releves.data.find((element)=>element.date_mesure_temp <= date_debut)
            if(trouveRelInf==="undefined")
            {
                size+=1000
                if(releves.next===null)
                {
                    break;
                }
            }
            else
            {
                datedebuttrouve = true;
                break;
            }
        }
    },[])

    return datedebuttrouve===false? (
        <div className="noting">   
           <h3>Pas de relevés de température a {date_debut}</h3>
        </div>
    ) : (
        <div className="Results">

        </div>
    )
}

export default Graphique