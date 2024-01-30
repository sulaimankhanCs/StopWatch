import './App.css';
import { useState } from 'react';
import LoginForm from './components/login/LoginForm';

let adjustInterval= undefined;
function App() {
  
  const [watch,setWatch]=useState(0)
  let [started,setstarted]=useState(false);

  const startWatch=()=>{
    adjustInterval=setInterval(()=>{
      setWatch((x)=>x+1)
    },1000)
    setstarted(true)

  }
  const stopWatch=()=>{
    clearInterval(adjustInterval);
    setstarted(false)

  }
  const resetWatch=()=>{
    setWatch(0)
    clearInterval(adjustInterval);
    setstarted(false)
  }

  return (
    <>
   <LoginForm/>
     <div className="App">  
    <h1>Stop Watch App</h1>
    <h1 className='clock'>{watch}</h1>
      <button className='start' disabled={started} onClick={startWatch} >START</button>
      <button className='stop'  onClick={stopWatch} >STOP</button>
    <button className='reset' onClick={resetWatch} >RESET</button>
     </div>
    </>
  );
}

export default App;
