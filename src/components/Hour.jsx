import React from "react";
import './Hour.css'
function Hour({addTiming, value}){
    return(
        <div>
            <input type="number" value={value} className="hourInput" onChange={(e)=>addTiming(e.target.value)}/>
        </div>
    )
}
export default Hour