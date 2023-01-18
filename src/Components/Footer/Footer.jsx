import React from 'react'
import './Footer.css'
import wave from '../../img/wave.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
   <div className="footer">
    <img src={wave} alt="" className='image'/>
    <div className="f-content">
        <span>bharathreddy20203@gmail.com</span>
        <div className="f-icons">
            <InstagramIcon className='icons' sx={{ fontSize: "80px" }} />
            <FacebookIcon className='icons' sx={{ fontSize: "80px" }}/>
            <LinkedInIcon className='icons' sx={{ fontSize: "80px" }}/>
        </div>
    </div>
   </div>
  )
}

export default Footer