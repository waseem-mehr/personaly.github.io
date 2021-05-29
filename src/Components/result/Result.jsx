import "./Result.css"
import strongImg from "../../images/strong.png"
import emotionalImg from "../../images/emotional.png"
import {
    FacebookShareButton,
    WhatsappShareButton,
    FacebookShareCount,
    FacebookMessengerShareButton
  } from "react-share";
  import {FacebookIcon,WhatsappIcon,FacebookMessengerIcon} from "react-share";

const Result = ({ans,userName,yes})=>{
    const shareUrl="https://github.com/waseem-mehr/personaly.github.io"
    const mainHeading=yes <=5 ? "آپ ایک مظبوط پرسنیلیٹی کے مالک  ہیں":"آپ جزباتی ہیں";
    const advice =yes <=5?"آپ خوش رہنا جانتے ہیں-آپ لوگوں کی باتوں کی وجہ سے پریشان نہیں ہوتے-آپ چھوٹی چھوٹی بات سے فکر مند نہیں ہوتے -آپ زندگی کو خشگوار طریقے سے بسر کرنا چاہتے ہیں":"آپ لوگوں کی فکر کرتے ہیں-چھوٹی چھوٹی بات سے فکر مند ھوجاتے ہیں اور چھوٹی سی بات آپکو خوش کر دیتی ھے-آپ لوگوں کی باتوں کی وجہ سے پریشان رہتے ہیں-لوگوں پر اپنی خوشیوں کا انحصار ناکریں خود خوش رہناسیکھیں"
    const img= yes <=5?strongImg:emotionalImg
    return (
    
        <div className="container">
        <div className="quest-container">
        <div className="row d-flex  justify-content-center text-center ">
            <div className="col-md-12 col-lg-12 col-sm-11 col-xs-11">
                    <h1 className="question_no"> -{mainHeading} {userName}</h1>
            </div>
            <div className=" col-md-12 col-lg-12 col-xs-10 col-sm-10">
                <div>
                    <img className="quest_img" src={img} height="200" width="200"/>
                </div>
            </div>
            <div className="order-2 col-md-6 col-lg-6 col-xs-10 col-sm-10">
                <h1 className="work_text"></h1>
                <p className="advice">{advice}</p>
                
            </div>
        </div>
        <div className="justify-content-center d-flex">

        <div className="social_share justify-content-center d-flex text-center" style={{marginBottom:"10px",float:"right"}}>
                        <FacebookShareButton url={shareUrl} media="">
                            <FacebookIcon logoFillColor="white" size="40px"></FacebookIcon>
                        </FacebookShareButton>
                        <FacebookShareCount url={shareUrl} />
                        <FacebookMessengerShareButton url="" style={{marginLeft:"10px"}}>
                            <FacebookMessengerIcon logoFillColor="white" size="40px">
                            </FacebookMessengerIcon>
                        </FacebookMessengerShareButton>
                        <WhatsappShareButton url={shareUrl} style={{marginLeft:"10px"}}>
                            <WhatsappIcon logoFillColor="white" size="40px">
                            </WhatsappIcon>
                        </WhatsappShareButton>
                    </div>
           
        </div>
        </div>
    </div>
    )
}

export default Result