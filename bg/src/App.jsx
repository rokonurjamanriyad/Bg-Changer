import { useState } from "react"

function App() {
 
  const [color,setColor]=useState('green');
  return (
    <div style={{background:color}} className="main">

      <div className="child">
        <button
        onClick={()=>setColor('red')}
        style={{background:'red'}}>Red</button>
        <button
        onClick={()=>setColor('Green')}
        style={{background:'Green'}}>Green</button>
        <button
        onClick={()=>setColor('aqua')}
        style={{background:'aqua'}}>aqua</button>
        <button
        onClick={()=>setColor('Black')}
        style={{background:'Black'}}>Black</button>
        <button
        onClick={()=>setColor('Blue')}
        style={{background:'Blue'}}>Blue</button>
      </div>


    


    </div>
  )
}

export default App
