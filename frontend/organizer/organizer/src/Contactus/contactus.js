import './contactus.css'
import emailjs from 'emailjs-com'
import { useState } from 'react';


function ContactUs() {
  
  const sendemail=(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_zve77qk','template_341z3ah',document.forms[0],'TVJBPnwjqzILue9AR').then(res=>{
      console.log(res);
    })
    }
    return(
    <form class="form" onSubmit={sendemail}>
    <h1>CONTACT US</h1>
    <h2 type="Name:"><input name='usename' placeholder="Write your name here.."></input></h2>
    <h2 type="Email:"><input 
    name='usermail' placeholder="Let us know how to contact you back.."></input></h2>
    <h2 type="Message:"><input 
    name='message'placeholder="What would you like to tell us.."></input></h2>
    <button>Send Message</button>
    <div>
      <span class="fa fa-phone"></span>9488856634
      <span class="fa fa-envelope-o"></span> agladsingh@gmail.com
    </div>
  </form>
  )
}
export default ContactUs;
