import { useState } from 'react';
import './login.css'
import Buttons from '../ReusableComponent/Button';
import {Link,useNavigate} from "react-router-dom"
const database = [
  {
    username: "user1",
    password: "pass1"
  },
  {
    username: "user2",
    password: "pass2"
  }
];

const errors = {
  uname: "invalid username",
  pass: "invalid password"
};

function Login(){
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  let navigate = useNavigate();
  const handlesubmit=(event)=>{
    event.preventDefault();
    var { uname, pass } = document.forms[0];
    const userData = database.find((user) => user.username === uname.value);
    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
    }
    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
    
    return (
  <div  className='form-login'>
    <form onSubmit={handlesubmit} className='form-login-container'>
        <h1>Hello !<br/> Welcome Back</h1>
       <div className="input-container">
         <input type="text" name="uname" placeholder='username' required />
         {renderErrorMessage("uname")}
       </div>
       <div className="input-container">
         <input type="password" name="pass" placeholder='password' required />
         {renderErrorMessage("pass")}
       </div>
       <div className='btn-div'>
       <Buttons>Log In</Buttons>
       </div>
       <div style={{ margin:'10px'}} className="button-container">
      <label style={{paddingRight:'20px'}}>
       <input style={{width:'20px'}} type="checkbox"/>
       <p>Keep me signed in</p>
       </label>
       <p><Link to="/ForgetPassword">Forget Password</Link></p>
       </div>
       <div className='line'></div>
       <div className="button-container-all">
       <p style={{textAlign:'center',padding:'10px'}}><Link to="/signup">Not Registered ? Create Account</Link></p>
       </div>
    </form>
    {isSubmitted ? navigate("/") :null}
    </div>
    );
}
export default Login;
