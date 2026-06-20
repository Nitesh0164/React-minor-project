import './App.css'
import {useState} from 'react'

function App() {

  let [counter,setCounter]  = useState(5)

  //let counter =5

  const addValue = ()=>{
    //console.log("value added",Math.random());
    console.log("clicked",counter)
    //counter = counter +1 
    if(counter < 20)
    { 
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter =>prevCounter+ 1)
    setCounter(prevCounter=>prevCounter + 1)
    }
  }

  const removeValue = () =>{
    if(counter > 0)
    { 
    setCounter(counter - 1);
    }
  }

  return (
   <>
   <h1>Code aur react</h1>
   <h2>Counter value : {counter}</h2>

   <button onClick={addValue}
   >Add value : {counter}</button>
   <br />
   <button onClick={removeValue}
        >remove value  : {counter}</button>
   <p>footer : {counter}</p>
   </>
  )
}

export default App
