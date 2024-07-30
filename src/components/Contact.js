import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section class="contact" id="contact">
        
        <h2 class="heading"><i class="ri-customer-service-2-line"></i> Get in <span>Touch</span></h2>

        <div class="container">
            <div class="content">
            <div class="image-box">
            <iframe src='https://my.spline.design/portfolio-278d0bb41fc6ae90f1d88b603f49858f/' frameborder='0' width='100%' height='100%'></iframe>
            </div>
            <form id="contact-form">
            
            <div class="form-group">
                <div class="field">
                <input type="text" name="name" placeholder="Name" required/>
                <i class='ri-user-line'></i>
                </div>
                <div class="field">
                <input type="text" name="email" placeholder="Email" required/>
                <i class='ri-mail-line'></i>
                </div>
                <div class="field">
                <input type="text" name="phone" placeholder="Phone"/>
                <i class='ri-phone-line'></i>
                </div>
                <div class="message">
                <textarea placeholder="Message" name="message" required></textarea>
                <i class="ri-message-2-fill"></i>
                </div>
            </div>
            <div class="button-area">
                <button type="submit">
                Submit <i class="ri-send-plane-line"></i></button>
            </div>
            </form>
        </div>
        </div>
        </section>
  );
};

export default Contact;
