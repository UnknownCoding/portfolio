import React from 'react'
import './contacts.css'
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
const Contacts = () => {
    return (
        <main id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className='container contact_container'>
                <div className='contact_options'>
                    <article className='mainOp'>
                        <MdOutlineEmail className='contactIcons'/>
                        <h4>Email</h4>
                        <h4>aaqibakeel75@gmail.com</h4>
                        <a href="mailto:aaqibakeel75@gmail.com">Send A Message</a>
                    </article>
                    <article className='mainOp'>
                        <RiMessengerLine className='contactIcons'/>
                        <h4>Messenger</h4>
                        <h4>Mohamed Aaqib Mohammadu Akeel</h4>
                        <a href="https://mail.google.com/mail/u/0/#inbox">Send A Message</a>
                    </article>
                    <article className='mainOp'>
                        <BsWhatsapp className='contactIcons'/>
                        <h4>Whatsapp</h4>
                        <h4>Mohamed Aaqib</h4>
                        <a href="https://www.whatsapp.com/">Send A Message</a>
                    </article>
                </div>
                <form action=''>
                    <input type="text" name='name' placeholder='Your Full Name' required/>
                    <input type="email" name='email' placeholder='Your Email' required/>
                    <textarea name='message' rows="7"  placeholder='Your Message' required/>
                    <button className='btn btn-primary' type='submit'>Send A Message</button>
                </form>
            </div>
        </main>
    )
}

export default Contacts