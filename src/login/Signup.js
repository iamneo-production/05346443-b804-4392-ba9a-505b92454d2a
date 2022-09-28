import './login.css'
import Buttons from '../ReusableComponent/Button';
import { useState } from 'react';
import {useNavigate} from "react-router-dom"
const errors = {
 pass:"password didn't match"
};

function Signup (){
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  let navigate = useNavigate();
  const renderErrorMessage = () =>
    (
      <div className="error">{errorMessages.message}</div>
    );
  const handleform=(event)=>{
    event.preventDefault();
    var { uname, pass,cpass } = document.forms[0];
  if(pass.value!==cpass.value){
    setErrorMessages({message: errors.pass});
  }else{
    setIsSubmitted(true);
  }
  }
    return (
    <div onSubmit={handleform} className='form-login'>
    <form  className='form-login-container'>
        <h1>Sign up</h1>
       <div className="input-container">
         <input type="text" name="uname" placeholder='username' required />
       </div>
       <div className="input-container">
         <input type="text" name="gmail" placeholder='Enter Mail Id' required />
       </div>
       <div className="input-container">
         <input type="text" name="phone" placeholder='Phone Number' required />
       </div>
       <div className="input-container">
         <input type="text" name="phone" placeholder='Aadhaar number' required />
       </div>
       <div className="input-container">
         <input type="password" name="pass" placeholder='password' required />
       </div>
        <div className="input-container">
         <input type="password" name="cpass" placeholder='Retype password' required />
       </div>
       <div className="button-container">
       {renderErrorMessage("pass")}
       </div>
       <div className='btn-div'>
       <Buttons>Sign In</Buttons>
       </div>
       {isSubmitted ? navigate("/") :null}
    </form>
    </div>);
}
export default Signup;