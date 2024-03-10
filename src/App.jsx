import { useState } from "react";

function App() {
  const[counter,setCounter] = useState(0);
  function add(){
    setCounter(counter+1);
  }

  return (
    <div>
      <button onClick={add}>{counter}</button>
    </div>
    
    
  )
}
    
export default App;
