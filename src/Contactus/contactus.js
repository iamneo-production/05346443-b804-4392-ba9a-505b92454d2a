import './contactus.css'
function ContactUs() {
    return(
    <form class="form">
    <h1>CONTACT US</h1>
    <h2 type="Name:"><input placeholder="Write your name here.."></input></h2>
    <h2 type="Email:"><input placeholder="Let us know how to contact you back.."></input></h2>
    <h2 type="Message:"><input placeholder="What would you like to tell us.."></input></h2>
    <button>Send Message</button>
    <div>
      <span class="fa fa-phone"></span>001 1023 567
      <span class="fa fa-envelope-o"></span> contact@company.com
    </div>
  </form>
  )
}
export default ContactUs;
