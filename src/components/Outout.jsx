import React, { useState } from "react";

export default function Outout({ item }) {
  console.log(item.hours);
  let [count, setCount] = useState(item.hours);
  const handleAdd = () => {
    setCount(Number(count)+ 1);
    // console.log(count + 1);
  };

  return (
    <div className="getProd text-white bg-blue-500 w-96 rounded-md p-2 text-xl font-bold ">
      {item.name} <br />
      {count}
      <div className="float-end">
        <button
          className="p-1 bg-gray-400 font-bold text-xs border border-black rounded-md text-black"
          onClick={handleAdd}
        >
          Add
        </button>
        <button className="p-1 bg-gray-400 font-bold text-xs border border-black rounded-md text-black" onClick={()=>{if(count === 0) {
            count = 0;
        } else setCount(Number(count) -1)} }> 
          Decrease
        </button>
      </div>
    </div>
  );
}