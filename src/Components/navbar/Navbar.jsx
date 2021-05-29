import logo from "../../images/logo.png"
import "./Navbar.css"
const Navbar = ({aboutView,setAboutView,playAgain,setPlayAgain})=>{
    const displayAbout=()=>{
        setAboutView(true)
    }
    const displayIntro=()=>{
        if(aboutView===false){
           setPlayAgain(!playAgain)
           
        }
        setAboutView(false)
        
    }
    return (
        <div className="container custom-navbar">
            <div className="row">
                <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                
                    <a className="navbar-brand" href="#" onClick={()=>{displayIntro()}}>
                        <img src={logo} className="nav__logo" alt="logo" />
                       
                                <span className="navbar__title" >پرسنلی</span>          
                    </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto navbar-right">
                <li className={aboutView?"nav-item active":"nav-item "} onClick={()=>{displayAbout()}}>
                    <a className="nav-link nav-item-text" href="#">ہمارے بارے میں ؟ </a>
                        
                    </li>
                    <li  className={aboutView?"nav-item":"nav-item active"} onClick={()=>{displayIntro()}}>
                        <a className="nav-link nav-item-text" href="#">   اپنی شخصیت کے بارے میں جانیں ؟ <span className="sr-only">(current)</span></a>
                    </li>
                    
                    
                    
                    </ul>
                    
                </div>
                </nav>
                </div>
            </div>
        </div>
    )
}
export default Navbar