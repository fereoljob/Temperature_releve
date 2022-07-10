import Carousel  from "better-react-carousel";
import axios from "axios";
import Infostation from "./Infostation.js";
import { useEffect, useState } from "react";

const Gallery = () =>{
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get("https://hubeau.eaufrance.fr/api/v1/temperature/station?code_departement=33&size=20&exact_count=true&format=json&pretty").then((res)=>setData(res.data.data))
    },[])
    return (
        <div>
            <p className="text_acc">Bienvenue dans le département de la Gironde. Consultez ici les cours d'eaux
                du département et leurs températures !
            </p>
             <Carousel cols={1} rows={1} gap={0} loop hideArrow autoplay={6000}>
                { data.map((station,index) =>
                <Carousel.Item  key={index} >
                    <Infostation station={station} />
                </Carousel.Item>)}
            </Carousel>
        </div>
    )
}
export default Gallery