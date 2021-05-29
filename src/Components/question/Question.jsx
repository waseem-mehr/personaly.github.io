import "./Question.css"
import questions from "../../questionBank"
import { useEffect, useState } from "react"

const Question = (props)=>{
    const questionStatement=questions[props.currentIndex].question
    const questionImg=questions[props.currentIndex].questionImg
    const [ans,setAns]=useState(false)
    useEffect(()=>{},[ans])
    const nextQuestion=()=>{
        if(ans==="yes"){
            const yestSelected=props.yes+1
            props.setYes(yestSelected)
            setAns(false)
        }
        else if(ans==="no"){
            const noSelected=props.no+1;
            props.setNo(noSelected)
            setAns(false)
        }
        const index =props.currentIndex+1
        props.setCurrentIndex(index)
    }
    const optionChossen=(e)=>{
        if(e.target.value==="yes"){
            setAns("yes")
            console.log('yes is selected')
        }
        else if(e.target.value==="no"){
            
            setAns("no")
            console.log('no is selected')
        }
    }
    return (
        <div className="container">
            <div className="quest-container">
            <div className="row d-flex  justify-content-center text-center ">
                <div className="col-md-12 col-lg-12 col-sm-11 col-xs-11">
                        <h1 className="question_no">سوال   نمبر {props.currentIndex+1}   </h1>
                </div>
                <div className=" order-1 order-sm-2 col-md-6 col-lg-6 col-xs-10 col-sm-10">
                    <div>
                        <img className="quest_img" src={questionImg} height="200" width="200"/>
                    </div>
                </div>
                <div className="order-2 col-md-6 col-lg-6 col-xs-10 col-sm-10">
                    <h1 className="work_text">{questionStatement}</h1>
                    <ul className="instructions_per">
                        <li>
                            <div className="form-check">
                            <label  className="form-check-label" for="flexRadioDefault2">
                            جی ہاں
                            </label>
                                <input style={{marginLeft:"10px"}} className="form-check-input" name="ans" onChange={(e)=>{optionChossen(e)}} type="radio" value="yes" id="yes" checked={ans==="yes"}/>
                                
                            </div>
                        </li>
                        <li>
                            <div className="form-check">
                            <label  className="form-check-label" for="flexRadioDefault2">
                            جی نہیں
                            </label>
                                <input style={{marginLeft:"10px"}} className="form-check-input" name="ans" onChange={(e)=>{optionChossen(e)}} type="radio" value="no" id="no" checked={ans==="no"} />
                                
                            </div>
                        </li>
                    </ul>
                    
                </div>
            </div>
            <div className="justify-content-center d-flex">
                            
                <button type="button" onClick={()=>{nextQuestion()}} className="btn btn-light next-btn" disabled={ans==false} >
                اگلا سوال
               </button>
            </div>
            </div>
        </div>
    )
}
export default Question