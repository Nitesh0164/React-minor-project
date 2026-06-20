import { useState } from 'react'
import './App.css'
import Card from "./Components/Card"

function App() {
  let myObj = {
    username :"nitesh",
    age:21
  }
  let newArr =[1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4
       rounded-2xl '>Tailwind Test</h1> 
       { /*<Card channel="codeaurreact" someeObject={myObj} newObj={newArr} />    */ }
       <Card username="codeaurreact" tim="30sec"/>     
       <Card  username="reactcode" tim="60sec"/>     
    </>
  )
}

export default App
