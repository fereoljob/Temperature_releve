
import { useState } from "react";

const Form = ({stations,setEau,setDateDebut,setDateFin})=>
{function handledate(e){
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
    setEau(document.getElementsByName("stationEau")[0].value)
}
    return (
        <div>
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
    )
}
export default Form