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
  img:'https://www.freepnglogos.com/uploads/bike-png/honda-cbr-sport-bike-png-image-pngpix-22.png',
  title:'honda',
  time:'Fri, Sep 27, 9:30 AM',
  place:'Trichy, TN',
  type:'Avalible for Booking'
},
{
  img:'https://www.freepnglogos.com/uploads/bike-png/red-bajaj-pulsar-motorcycle-bike-png-image-pngpix-35.png',
  title:'Pulsar',
  time:'Fri, Aug 23, 10:00 AM',
  place:'Coimbatore, TN',
  type:'Avalible for Booking'
},
{
  img:'https://www.freepnglogos.com/uploads/bike-png/royal-enfield-classic-black-motorcycle-bike-png-image-25.png',
  title:'Bullet',
  time:'Mon, Feb 28, 8:50 AM',
  place:'Chennai, TN',
  type:'Avalible for Booking'
},
{
  img:'https://www.freepnglogos.com/uploads/bike-png/ducati-scrambler-motorcycle-bike-png-image-pngpix-3.png',
  title:'Ducati',
  time:'Thu, Oct 23, 9:13 AM',
  place:'Ooty, TN',
  type:'Avalible for Booking'
},
{
  img:'https://www.freepnglogos.com/uploads/bike-png/bmw-motorcycle-bike-png-image-pngpix-28.png',
  title:'Bmw',
  time:'Wed,Jan 29, 6:00 PM',
  place:'Mysore, TN',
  type:'Avalible for Booking'
},
{
  img:'https://www.freepnglogos.com/uploads/bike-png/blue-bajaj-pulsar-motorcycle-bike-png-image-pngpix-27.png',
  title:'Bajaj Pulsar',
  time:'Tue, Nov 18, 10:49 AM',
  place:'Chennai, TN',
  type:'Avalible for Booking'
},
{
  img:'https://www.freepnglogos.com/uploads/bike-png/bmw-ninet-motorcycle-bike-png-image-pngpix-26.png',
  title:'bmw ninet',
  time:'Sun, Mar 28, 9:08 AM',
  place:'Chennai, TN',
  type:'Avalible for Booking'
},
{
  img:'https://www.freepnglogos.com/uploads/bike-png/yamaha-stryker-bullet-cowl-cruiser-motorcycle-bike-png-31.png',
  title:'Yamana stryker',
  time:'Sun, Dec 23, 3:00 PM',
  place:'Salem, TN',
  type:'Avalible for Booking'
},
{
  img:'https://www.freepnglogos.com/uploads/bike-png/honda-motorcycle-bike-png-image-pngpix-24.png',
  title:'Honda-Motorcycle',
  time:'Mon, Feb 18, 11:00 AM',
  place:'Chennai, TN',
  type:'Avalible for Booking'
},
{
  img:'https://www.freepnglogos.com/uploads/bike-png/red-honda-cbr-sport-motorcycle-bike-png-image-pngpix-16.png',
  title:'CBR',
  time:'Thu, June 9, 8:00 PM',
  place:'Chennai, TN',
  type:'Avalible for Booking'
},
{
  img:'https://www.freepnglogos.com/uploads/bike-png/bike-png-editing-zone-editing-zone-30.png',
  title:'Classic-360',
  time:'Thu, July 15, 10:00 AM',
  place:'Kodaikanal, TN',
  type:'Avalible for Booking'
},
{
  img:'https://www.freepnglogos.com/uploads/bike-png/ktm-duke-motorcycle-racing-bike-png-image-pngpix-9.png',
  title:'KTM Duke',
  time:'Mon, Aug 18, 12:00 AM',
  place:'Madurai, TN',
  type:'Avalible for Booking'
},

]

function Feed(){
    return (
    <div className='container'>
    {feeds.map((value)=>{
    return (
      <div className="banner">
      <img src={value.img}></img>
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