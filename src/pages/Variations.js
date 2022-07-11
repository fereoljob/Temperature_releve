import { useEffect, useState } from "react";
import Banner from "../components/Banner.js";
import Navigation from "../components/Navigation.js";
import axios from "axios";
import "../styles/Variations.css";
import Graphique from "../components/Graphique.js";



const Variations = ()=>
{
    const [stations,setStations]=useState([])
    const [Eau,setEau] = useState("");
    const [date_debut,setDateDebut] = useState("");
    const [date_fin,setDateFin] = useState("");
    function handledate(e){
        const verifdebutdate = document.getElementsByName("date_deb")[0];
        if(verifdebutdate.value==="")
        {
            alert("Sélectionnez d'abord une date de début!");
            e.target.value = "";
        }
        if(e.target.value<verifdebutdate.value)
        {
            alert("La date de fin ne peut être inférieur à celle du début")
            e.target.value = "";
        }
        setDateDebut(verifdebutdate.value)
        setDateFin(e.target.value)
    }
    useEffect(()=>{
        axios.get("https://hubeau.eaufrance.fr/api/v1/temperature/station?code_departement=33&size=20&exact_count=true&format=json&pretty").then((res)=>setStations(res.data.data))
    },[])

    return date_fin==="" ? (
        <div>
            <Banner />
            <Navigation />
            <p>
                Sélectionnez un cours d'eau et une période pour afficher les variations de 
                température sur la période sélectionnée.
            </p>
            <label  className="lab" ><strong>Cours d'eau : </strong> </label>
            <select name="stationEau" onChange={(e)=>setEau(e.target.value)} >
                {stations.map((station,index)=>
                    <option key={`${index}-${station.code_station}`}value={station.code_station} >
                        {station.libelle_station.substring(0,station.libelle_station.indexOf('à')-1)}
                    </option>)}
            </select>
            <br/><br/>
            <label  className="lab"><strong>Date début : </strong></label>
            <input type='date' name='date_deb' />
            <br/><br/>
            <label className="lab"><strong>Date fin : </strong></label>
            <input type='date' name='date_fin' onChange={(e)=>handledate(e)} />
            
        </div>
    ) : (
        <div>
            <Banner />
            <Navigation />
            <p>
                Sélectionnez un cours d'eau et une période pour afficher les variations de 
                température sur la période sélectionnée.
            </p>
            <label  className="lab" ><strong>Cours d'eau : </strong> </label>
            <select name="stationEau" >
                {stations.map((station,index)=>
                    <option key={`${index}-${station.code_station}`}value={station.code_station} >
                        {station.libelle_station.substring(0,station.libelle_station.indexOf('à')-1)}
                    </option>)}
            </select>
            <br/><br/>
            <label  className="lab"><strong>Date début : </strong></label>
            <input type='date' value={date_debut} name='date_deb' />
            <br/><br/>
            <label className="lab"><strong>Date fin : </strong></label>
            <input type='date' name='date_fin' value={date_fin} onChange={(e)=>handledate(e)} />
            <Graphique ddebut={date_debut} dfin={date_fin} eau={Eau} />
        </div>
    )
}
export default Variations