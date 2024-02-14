import React from 'react'
import './ContactForm.css'
import Button from '../Button/Button'
import { MdCall, MdEmail, MdMessage } from 'react-icons/md'
const ContactForm = () => {
  return (
    <section className='container'>
        <div className='form'>
          <div className='top-btn'>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
          <Button text='VIA CALL' icon={<MdCall fontSize="24px"/>}/>
    
          </div>
          <Button text='VIA EMAIL FORM' icon={<MdEmail/>} isOutline={true}></Button>
        <form>
         <div className="form-control">
         <label htmlFor="name">Name</label>
          <input type="text" />
         </div>
         <div className="form-control">
         <label htmlFor="email">Email</label>
          <input type="email" />
          
         </div>
         <div className="form-control">
         <label htmlFor="email">Text</label>
          <textarea name='text' rows='5'/>
          
         </div>
         <div className="submit-btn" style={{display:'flex',justifyContent:'end'}}>
         <Button text='Submit'/>
         </div>
          
        </form>
        </div>
        <div className='form-img'>
          <img src="image.png" alt="image" />
        </div>
       </section>
  )
}

export default ContactForm
