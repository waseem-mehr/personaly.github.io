import Main from "../src/Components/main/Main"
import { useEffect, useState } from 'react';
import Splash from '../src/Components/splash/Splash'

import './App.css';

function App() {
  const [splash,setSplash]=useState(true)
  //useEffect us waqt call hota ha jab phli bar render hota document
  //usky ilawa ham is pr argument dy sakty k yeah kis waqt call ho
  //for example ik state k change hony pr call ho wagera wagera
  useEffect(()=>{
    hideSplash()
  },[])

  const hideSplash=()=>{
    setTimeout(()=>{
      setSplash(false)
    },3000)
  }
  return (
    
    <div>

      {
        splash?<Splash/>:<Main/>
      }
         
    </div>
    
  );
}

export default App;
