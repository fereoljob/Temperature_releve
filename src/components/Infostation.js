import axios from "axios"
import Details from "./Details.js"
import Relevetemp from "./Relevetemp.js"
import "../styles/Infostation.css"
import { useEffect, useState } from "react"

const Infostation = ({station,index}) => {
    const [dataW,setDataW] = useState([])
    useEffect(()=>{
        axios.get("https://hubeau.eaufrance.fr/api/v1/temperature/chronique?code_station="+station.code_station+"&size=23&sort=desc&pretty").then((res)=>setDataW(res.data.data))},[])
    return (
        <div className="Temperatures">
                <Details data={dataW} />
                <Relevetemp data={dataW} />
        </div>
    )
}
export default Infostation