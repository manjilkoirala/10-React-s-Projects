import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <main className='hero'>
        <div className='hero-content'>     
        <h1>YOUR FEET <br/> DESERVE <br /> THE BEST</h1> 
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>      
<div className='hero-btn'>
    <button className='nav-button'>Shop Now</button>
    <button className='cat-btn'>Category</button>
</div>
        </div>
      <div className='hero-image'>
        <img src="shoe_image.png" alt="" />
      </div>
    </main>
  )
}

export default Hero
