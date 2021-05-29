import "./About.css"

const About = ()=>{
    const img="https://image.flaticon.com/icons/png/512/2072/2072729.png"
    return(
        <div className="container">
        <div className="quest-container">
        <div className="row d-flex  justify-content-center text-center ">
            
            <div className=" col-md-12 col-lg-12 col-xs-10 col-sm-10">
                <div>
                    <img className="quest_img" src={img} height="130" width="130"/>
                </div>
            </div>
            <div className="col-md-12 col-lg-12 col-sm-11 col-xs-11">
                    <h1 className="main_per">- پرسنلی -</h1>
            </div>
            <div className="order-2 col-md-6 col-lg-6 col-xs-10 col-sm-10">
                <h1 className="work_text"> پرسنلی ایک آنلا ٸن پرانک ویب آپ ہے جس سے آپ اپنی پرسنیلیٹی کو پرڈکٹ کر سکتے ہیں-سب سے پہلے آپ پہلے پیج پر جاکراپنا نام درج کریں ،پوچھے گے سوالات کے جوابات دیں،پرسنلی آپکے جوابات کی جانچ پڑتال کرے گی،پرسنلی آپکی پرسنیلیٹی کے بارے میں بتائے گی اور آپ پرسنلی کو اپنے دوستوں کے ساتھ شیئر کریں-
</h1>
                <p className="advice"></p>
                
            </div>
        </div>
        <div className="">
        <div className="justify-content-center text-center">
           <h1 className="code_by">********Code by********</h1>
           
           <a className="code_auth" href="https://www.linkedin.com/in/waseem-mehr/" target="_blank">Waseem Mehr</a>
           <h1 className="code_by">************************</h1>
           <br/>
           <br/>
        </div>
        </div>
        </div>
    </div>
    )
}
export default About