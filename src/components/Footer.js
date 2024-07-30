import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
      <section class="footer">

        <div class="box-container">

            <div class="box">
                <h3>Contact Info</h3>
                <p> <i class="ri-phone-line"></i>+91 8122394864</p>
                <p> <i class="ri-mail-line"></i>j.k.sanjay2006@gmail.com</p>
                <p> <i class="ri-map-pin-line"></i>Vellore, India-632006</p>
                <div class="share">
                    <a href="https://www.linkedin.com/in/sanjay-j-k/" class="ri-linkedin-box-line" aria-label="LinkedIn" target="_blank"></a>
                    <a href="https://github.com/JKSANJAY27" class="ri-github-line" aria-label="GitHub" target="_blank"></a>
                    <a href="mailto:j.k.sanjay2006@gmail.com" class="ri-mail-line" aria-label="Mail" target="_blank"></a>
                    <a href="https://www.instagram.com/j.k.sanjay/" class="ri-instagram-line" aria-label="Instagram" target="_blank"></a>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Footer;
