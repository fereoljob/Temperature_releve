import { useEffect, useState } from "react";
import Banner from "../components/Banner.js";
import Navigation from "../components/Navigation.js";
import Form from "../components/Form.js";
import axios from "axios";
import "../styles/Variations.css";
import Graphique from "../components/Graphique.js";



const Variations = ()=>
{
    const [stations,setStations]=useState([])
    const [Eau,setEau] = useState("");
    const [date_debut,setDateDebut] = useState("");
    const [date_fin,setDateFin] = useState("");
    
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
           <Form stations={stations} setEau={setEau} setDateDebut={setDateDebut} setDateFin={setDateFin} />
            
        </div>
    ) : (
        <div>
            <Banner />
            <Navigation />
            <p>
                Sélectionnez un cours d'eau et une période pour afficher les variations de 
                température sur la période sélectionnée.
            </p>
            <Form stations={stations} setEau={setEau} setDateDebut={setDateDebut} setDateFin={setDateFin} />
            <Graphique ddebut={date_debut} dfin={date_fin} eau={Eau} />
        </div>
    )
}
export default Variations