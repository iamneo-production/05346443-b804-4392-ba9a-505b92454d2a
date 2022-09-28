import './Content.css';
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
const content=[{
    about:'ABOUT THE CHALLENGE PLI Blockathon is PAN India hackathon, invites participants across the nation. It is being organized by Suvik Group of Companies headquartered in the United Arab Emirates who have built a Blockchain Powered Product ”Plugin”, a Decentralized Oracle Network on XDC Network. The objective of this hackathon is to invite all the blockchain enthusiasts, and experts in the field to develop decentralized applications on XDC Network.If you are a developer, of any technology and aspire to innovate in the blockchain space, this Hackathon is for you! Bring out your potential. You can register for this hackathon as an individual, or as a Team.',
    date:'Fri, September 23, 2022',
    time:' 9:00 AM – 6:00 PM IST',
    location:'Sathyabama University Semmancheri, Chennai, Tamil Nadu, India Chennai, TN 600119'
}]
function Content(){
    return (
        <div><CircularProgressbar value={33}/>
      </div>
    );
}
export default Content;