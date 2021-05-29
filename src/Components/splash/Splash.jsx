import './Splash.css'
import "../../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from "react-loader-spinner"
import logo from "../../images/logo.png"
const Splash = ()=>{
    
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        پرسنلی
        </p>
        <Loader className="loader" type="ThreeDots" color="#FFFFFF" height={80} width={80} />
      </header>
    </div>
    )
}
export default Splash;