import "./Intro.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../../node_modules/react-notifications/lib/notifications.css"
import {NotificationContainer, NotificationManager} from 'react-notifications';
import welcomeImg from "../../images/welcome.png"
import {
    FacebookShareButton,
    WhatsappShareButton,
    FacebookShareCount,
    FacebookMessengerShareButton
  } from "react-share";
  import {FacebookIcon,WhatsappIcon,FacebookMessengerIcon} from "react-share";
import { useEffect, useState } from "react";
const Intro = ({setIntroView,setUserName})=>{
    const share="https://github.com/waseem-mehr/personaly.github.io"
    const [name,setName]=useState("")
    const [error,setError]=useState(false)
    useEffect(()=>{},[error])
    const changeName=(e)=>{
        setName(e.target.value)
        if(name!=""&&name!=" ")
            setError(false)
        
    }
    const showQuestionView=()=>{
        if(name!=""&&name!=" ")
        {
            
            setUserName(name)
            setIntroView(false)
        }
            
        else{
          
            NotificationManager.error('اپنا نام پر کریں', 'پرسنلی ', 3000);
             
        }
            
    }
    return (
        
        <div className="container ">
            <NotificationContainer/>
            <div className="intro-container">
            <div className="row d-flex  justify-content-center text-center ">
                <div className=" order-1 order-sm-2 col-md-6 col-lg-6 col-xs-10 col-sm-10">
                    <div>
                        <img className="" src={welcomeImg} height="150" width="150"/>
                        <h1 className="work_text text-center" style={{marginLeft:"50px"}}>اپنا نام درج کریں</h1>
                        <form className="row justify-content-center d-flex form-group">
                            <input type="text" onChange={(e)=>{changeName(e)}} className="form-control my-form-control" placeholder="علی" />
                            
                            <div className="">
                            
                            <button type="button" className="btn btn-light mine-btn" onClick={()=>{showQuestionView()}}>
شُروع کریں                    </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="order-2 col-md-6 col-lg-6 col-xs-10 col-sm-10">
                    <h1 className="work_text">: پرسنلی کے کام کرنے کا طریقہ</h1>
                    <ul className="instructions_per">
                        <li>
                      -  ١.اپنا نام درج کریں
                        </li>
                        <li>
                      -  ٢.  پوچھے گے سوالات کے جوابات دیں
                        </li>
                        <li>
                      -  ٣. پرسنلی آپکے جوابات کی جانچ پڑتال کرے گی
                        </li>
                        <li>
                     -   ٤.  پرسنلی آپکی پرسنیلیٹی کے بارے میں بتائے گی
                        </li>
                        <li>
                     -
   ٥. پرسنلی کو دوستوں کے  ساتھ شیئر کریں 
                        </li>
                    </ul>
                    <div className="social_share justify-content-center d-flex text-center" style={{marginBottom:"10px",float:"right",marginRight:"90px"}}>
                        <FacebookShareButton url={share} media="">
                            <FacebookIcon logoFillColor="white" size="40px"></FacebookIcon>
                        </FacebookShareButton>
                        <FacebookShareCount url={share} />
                        <FacebookMessengerShareButton url="" style={{marginLeft:"10px"}}>
                            <FacebookMessengerIcon logoFillColor="white" size="40px">
                            </FacebookMessengerIcon>
                        </FacebookMessengerShareButton>
                        <WhatsappShareButton url="" style={{marginLeft:"10px"}}>
                            <WhatsappIcon logoFillColor="white" size="40px">
                            </WhatsappIcon>
                        </WhatsappShareButton>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Intro