import React from 'react'
import './Cards.css'
import Button from '@mui/material/Button'


const Cards = ({emoji,heading,details}) => {
  return (
    <div className='card'>
   <img src={emoji} alt="" />
   <span>{heading}</span>
   <span>{details}</span>
<Button className='c-button'
variant='outlined'
sx={{borderRadius:'50px'}}>Explore more</Button>
    </div>
  )
}

export default Cards