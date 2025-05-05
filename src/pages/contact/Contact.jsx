import React, { useState, useEffect } from 'react';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';


import './Contact.css'

function Contact({ isOpen, onClose, headerClosing }) {
    const [time, setTime] = useState(new Date());
    const [localClosing, setLocalClosing] = useState(false);
    const isClosing = localClosing || headerClosing;


    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleClose = () => {
        setLocalClosing(true);
        setTimeout(() => {
            setLocalClosing(false);
            onClose();
        }, 600);
    };

    const className = `contact-page ${isOpen ? 'open' : ''} ${isClosing ? 'closing' : ''}`;

    return (
        <div className={className}>
            <button className="close-button" onClick={handleClose}>Close</button>

            <div className='first-column-contact'>
                <div className='first-line-contact'>
                    <h5>Bilbao, Spain<br />
                        {`${time.getHours() % 12 || 12}:${String(time.getMinutes()).padStart(2, '0')} ${time.getHours() >= 12 ? 'PM' : 'AM'}`}
                    </h5>
                </div>
                <div className='second-line-contact'>
                    <h5>Services</h5>
                    <ul>
                        <li>Creative Digital Solutions</li>
                        <li>Full-Stack Web Development</li>
                        <li>Visual Identity</li>
                        <li>Interface Design</li>
                        <li>User Experience</li>
                        <li>Creative Direction</li>
                        <li>Content Production</li>
                        {/* <li>Print & Editorial Design</li> */}
                        <li>Front-End & Back-End</li>
                    </ul>
                </div>
            </div>

            <div className='second-column-contact'>
                <div className='first-line-contact'>
                    {/* <h5>Welcome!</h5> */}
                    <img src="/CAPTURAS/iub.png" alt="" />
                </div>
                <div className='second-line-contact'>
                    <h5>Links</h5>
                    <ul>
                        <li>
                            <a href="https://github.com/inesuribeb" target="_blank" rel="noopener noreferrer">
                                Github <ArrowOutwardIcon />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/inesuribeb/" target="_blank" rel="noopener noreferrer">
                                Instagram <ArrowOutwardIcon />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/in%C3%A9s-uribe-barr%C3%B3n-325305143/" target="_blank" rel="noopener noreferrer">
                                Linkedin <ArrowOutwardIcon />
                            </a>
                        </li>
                        <li>Behance <ArrowOutwardIcon></ArrowOutwardIcon></li>
                    </ul>
                </div>
            </div>

            <div className='third-column-contact'>
                <div className='first-line-contact'>
                    <h5>inesuribeb@gmail.com</h5>
                </div>
                <div className='second-line-contact'>
                    <p>Designer with a strong background in <i>visual communication</i>, currently expanding my skill set as a <i>full-stack web developer</i>.<br /><br /> With a passion for merging <i>creativity</i> with <i>technology</i>, I aim to create digital experiences that are both <i>aesthetically</i> pleasing and <i>functionally</i> effective. I focus on designing user-centric solutions that balance <i>innovation</i>, <i>design principles</i>, and <i>technical approach</i>.</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;