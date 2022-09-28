
import Buttons from '../ReusableComponent/Button';
import {Link} from "react-router-dom"
function  ForgetPassword(){
    return (
        <div  className='form-login'>
        <form className='form-login-container'>
        <h1>Reset Password</h1>
       <div className="input-container">
         <input type="text" name="uname" placeholder='E-mail id' required />
       </div>
       <div className='btn-div'>
       <Buttons>Reset Password</Buttons>
       </div>
    </form>
    </div>
    )
}
export default ForgetPassword;