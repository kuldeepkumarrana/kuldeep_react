import { useState } from 'react';
import './App.css'

function App() {
 let [counter, setnewCounter] = useState(5);

  // let counter = 5;
  function addValue(){
    // console.log("value added", counter);
    // counter = counter + 1;
    if(counter <= 19){
      setnewCounter(counter + 1);
    }
    
  }
  function removeValue(){
    // console.log("value Removed", counter)
    if (counter >= 1){
    setnewCounter(counter - 1);
    }
  }

  return (
   <>
   <h1>chai and code</h1>
   <h2>counter value: {counter}</h2>
   <button
    onClick={addValue}
    >add value {counter}</button>
   <br />
   <br />
   <button
   onClick={removeValue}
   > remove value {counter}</button>
   </>
  )
}

export default App
