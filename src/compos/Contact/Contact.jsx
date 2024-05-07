// Contact.js
import React from 'react';
import './contact.scss';
import img from './img.png'
import { useState } from 'react';


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:3001/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        console.log(data); // Handle the response from the server
    };

    return (
        <section id='contact' className="contact">
            <div className="box">
          
            <div className="content">
            <div className="left">
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit} className="contactForm">
                <div className="formField">
                    {/* <label htmlFor="name">Name:</label> */}
                    <input  onChange={handleChange} placeholder='Name' type="text" id="name" name="name" />
                </div>
                <div className="formField">
                    {/* <label htmlFor="email">Email:</label> */}
                    <input  onChange={handleChange} placeholder='Email' type="email" id="email" name="email" />
                </div>
                <div className="formField">
                    {/* <label htmlFor="message">Message:</label> */}
                    <textarea  onChange={handleChange} placeholder='Message' id="message" name="message"></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
            </div>
            <div className="right">
                <img src={img}/>
            </div>
            </div>
            
            </div>
         
        </section>
    );
}

export default Contact;
