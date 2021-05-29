
import Navbar from "../navbar/Navbar"
import Intro from "../intro/Intro"
import Question from "../question/Question"
import Footer from "../footer/Footer"
import Result from "../result/Result"
import About from "../about/About"
import "./Main.css"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useEffect, useState } from "react"
const Main = ()=>{
    const [introView,setIntroView]=useState(true)
    const [currentIndex,setCurrentIndex]=useState(0)
    const [yes,setYes]=useState(0)
    const [no,setNo]=useState(0)
    const [userName,setUserName]=useState("")
    const [aboutView,setAboutView]=useState(false)
    const [playAgain,setPlayAgain]=useState(false)
   useEffect(()=>{resetGame()},[aboutView,playAgain])
   const resetGame=()=>{
       setCurrentIndex(0)
       setYes(0)
       setNo(0)
       setIntroView(true)
   }
    useEffect(()=>{
       
    },[currentIndex])
    return (
        
        <div className="container-custom">
           
              
                    <Navbar
                    aboutView={aboutView}
                    setAboutView={setAboutView}
                    playAgain={playAgain}
                    setPlayAgain={setPlayAgain}
                    />
                    {
                        aboutView?<About/>:
                        introView?
                        <Intro
                         setIntroView={setIntroView}
                         setUserName={setUserName}
                         />
                        :currentIndex>9?
                        <Result
                         yes={yes}
                         userName={userName}
                        />
                      
                        :
                        <Question 
                            currentIndex={currentIndex}
                            setCurrentIndex={setCurrentIndex}
                           
                            yes={yes}
                            no={no}
                            setYes={setYes}
                            setNo={setNo}
                        />
                        
                    }
                    <Footer/>
              
       
        </div>
        
       
    )
}

export default Main;