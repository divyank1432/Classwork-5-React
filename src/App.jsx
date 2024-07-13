import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Hour from "./components/Hour";
import Add from "./components/Add";
import Outout from "./components/Outout";
function App() {
  const [sechdule, setSechdule] = useState("");
  const [timing, setTiming] = useState("");
  const [count, setCount] = useState([]);
  const [prod, setProd] = useState([]);
 
  const addTodo = () => {
    if (sechdule == "" || timing == "" || timing < 0) {
      alert("Plz FullFill all the Fields");
    } else {
      console.log(sechdule, timing);
      const product = {
        name: sechdule,
        hours: timing,
      };
      setCount([...count, timing])

      setProd([...prod, product]);
      setSechdule("");
      setTiming("");
      console.log(prod);
    }
  };
  // console.log(sechdule);
 
  console.log(count);
  return (
    <body>
      <section className="hero">
        <div className="head">
          <input
            type="text"
            value={sechdule}
            className="input h-12 w-80 mr-2 rounded-xl"
            placeholder="Enter here.."
            onChange={(e) => setSechdule(e.target.value)}
          />
          <input
            type="number"
            value={timing}
            className="hourInput h-12 rounded-xl pl-2 w-16"
            placeholder="Hours"
            onChange={(e) => setTiming(e.target.value)}
          />
          {/* <Input addSchedule={setSechdule} value={sechdule}></Input> */}
          {/* <Hour addTiming={setTiming} value={timing}></Hour> */}
        </div>
        <div className="main overflow-x-auto">
          <div className="flex flex-col items-center gap-4">
            {prod &&
              prod.map((item) => {
                return (
                <Outout item={item}/> 
                );
              })}
          </div>
        </div>
        <div className="footer">
          <Add addBtnClicked={addTodo}></Add>
        </div>
      </section>
    </body>
  );
}

export default App;