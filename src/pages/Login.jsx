
import LoginPic from "../assets/LoginPic.png"
import LoginBox from "../components/LoginBox";
import '../styles/style.css'



const Login =()=>{
  
    return(
        <div className="loginpage">
            <img src={LoginPic} className="loginpic"/>
            <LoginBox/>
        </div>
        
    )
}

export default Login;