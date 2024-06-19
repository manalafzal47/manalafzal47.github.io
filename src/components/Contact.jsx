
/* Used documentation from https://www.emailjs.com/docs/examples/reactjs/ */

import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

function Contact(){

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

  emailjs
  .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
    publicKey: 'YOUR_PUBLIC_KEY', 
  })
  .then(
    ()=>{
      console.log('SUCCESS!');
    },
    (error) => {
      console.log('FAILED...', error.text);
    }
  );
  }
  
    return(
        <div className ="form">
            <div className = "form-title">
              <h1 >Drop Me A Message</h1>
            </div>
            <form ref = {form} onSubmit = {sendEmail}>
              <div className = "label-container">
                  <label> 
                    <input className = "name-input" type="text" name = "name" placeholder = "Name"></input>
                    </label> 

                  <label >
                    <input className = "email-input" type="text" name = "email" placeholder="Email"></input>  
                  </label>

                  <label >
                    <input className = "message-input" type="text" name = "message" placeholder="Message"></input>  
                  </label>

                  <button className = "submit-btn"> Send Email </button>
                </div>
            </form>
        </div>
    )
}

export default Contact;