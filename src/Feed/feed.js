import { Link } from "react-router-dom";
import Buttons from '../ReusableComponent/Button';
const feeds=[{
  img:'https://www.freepnglogos.com/uploads/bike-png/black-yamaha-yzf-sport-motorcycle-bike-png-image-pngpix-32.png',
  title:'KTM',
  time:'Fri, Sep 23, 9:00 AM',
  place:'Chennai, TN',
  type:'Avalible for Booking'
},
{
  img:'https://www.freepnglogos.com/uploads/bike-png/black-yamaha-yzf-sport-motorcycle-bike-png-image-pngpix-32.png',
  title:'KTM',
  time:'Fri, Sep 23, 9:00 AM',
  place:'Chennai, TN',
  type:'Avalible for Booking'
},
{
  img:'https://www.freepnglogos.com/uploads/bike-png/black-yamaha-yzf-sport-motorcycle-bike-png-image-pngpix-32.png',
  title:'KTM',
  time:'Fri, Sep 23, 9:00 AM',
  place:'Chennai, TN',
  type:'Avalible for Booking'
},
{
  img:'https://www.freepnglogos.com/uploads/bike-png/black-yamaha-yzf-sport-motorcycle-bike-png-image-pngpix-32.png',
  title:'KTM',
  time:'Fri, Sep 23, 9:00 AM',
  place:'Chennai, TN',
  type:'Avalible for Booking'
},
{
  img:'https://www.freepnglogos.com/uploads/bike-png/black-yamaha-yzf-sport-motorcycle-bike-png-image-pngpix-32.png',
  title:'KTM',
  time:'Fri, Sep 23, 9:00 AM',
  place:'Chennai, TN',
  type:'Avalible for Booking'
},
{
  img:'https://www.freepnglogos.com/uploads/bike-png/black-yamaha-yzf-sport-motorcycle-bike-png-image-pngpix-32.png',
  title:'KTM',
  time:'Fri, Sep 23, 9:00 AM',
  place:'Chennai, TN',
  type:'Avalible for Booking'
},
{
  img:'https://www.freepnglogos.com/uploads/bike-png/black-yamaha-yzf-sport-motorcycle-bike-png-image-pngpix-32.png',
  title:'KTM',
  time:'Fri, Sep 23, 9:00 AM',
  place:'Chennai, TN',
  type:'Avalible for Booking'
},
{
  img:'https://www.freepnglogos.com/uploads/bike-png/black-yamaha-yzf-sport-motorcycle-bike-png-image-pngpix-32.png',
  title:'KTM',
  time:'Fri, Sep 23, 9:00 AM',
  place:'Chennai, TN',
  type:'Avalible for Booking'
},
{
  img:'https://www.freepnglogos.com/uploads/bike-png/black-yamaha-yzf-sport-motorcycle-bike-png-image-pngpix-32.png',
  title:'KTM',
  time:'Fri, Sep 23, 9:00 AM',
  place:'Chennai, TN',
  type:'Avalible for Booking'
},
{
  img:'https://www.freepnglogos.com/uploads/bike-png/black-yamaha-yzf-sport-motorcycle-bike-png-image-pngpix-32.png',
  title:'KTM',
  time:'Fri, Sep 23, 9:00 AM',
  place:'Chennai, TN',
  type:'Avalible for Booking'
},
{
  img:'https://www.freepnglogos.com/uploads/bike-png/black-yamaha-yzf-sport-motorcycle-bike-png-image-pngpix-32.png',
  title:'KTM',
  time:'Fri, Sep 23, 9:00 AM',
  place:'Chennai, TN',
  type:'Avalible for Booking'
},
{
  img:'https://www.freepnglogos.com/uploads/bike-png/black-yamaha-yzf-sport-motorcycle-bike-png-image-pngpix-32.png',
  title:'KTM',
  time:'Fri, Sep 23, 9:00 AM',
  place:'Chennai, TN',
  type:'Avalible for Booking'
},
{
  img:'https://www.freepnglogos.com/uploads/bike-png/black-yamaha-yzf-sport-motorcycle-bike-png-image-pngpix-32.png',
  title:'KTM',
  time:'Fri, Sep 23, 9:00 AM',
  place:'Chennai, TN',
  type:'Avalible for Booking'
},

]

function Feed(){
    return (
    <div className='container'>
    {feeds.map((value)=>{
    return (
      <div className="banner">
      <img  src={value.img}></img>
      <div className='space'>
      <h1>{value.title}</h1>
      <h2 >{value.time}</h2>
      <p>{value.place} </p>
      <p >{value.type}</p>
      </div>
      <div className='btn'>
      <Buttons><Link to="/content">Read More</Link></Buttons>
      </div>
      </div>
    )
    })}
   </div>
   )
}
export default Feed;