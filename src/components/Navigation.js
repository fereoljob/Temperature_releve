import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/Navigation.css';

const Navigation = ()=>{
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" className={(nav)=>(nav.isActive? "nav-active":"")}>
                    <li>Temperatures</li>
                </NavLink>
                <NavLink to="/Variations" className={(nav)=>(nav.isActive? "nav-active":"")} >
                    <li>Variations</li>
                </NavLink>
            </ul>
        </div>
    )
}
export default Navigation