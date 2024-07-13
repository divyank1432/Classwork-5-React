import React from "react";
import './Input.css'
function Input({addSchedule , value}){
    return(
        <div>
            <input type="text" value={value} className="input"  placeholder="Enter here.." onChange={(e)=>addSchedule(e.target.value)}/>
        </div>
    )
}
export default Input