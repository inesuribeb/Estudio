import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import './ContactPhone.css'

function ContactPhone() {
  const { isMenuOpen, setIsMenuOpen } = useOutletContext();
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [time, setTime] = useState(new Date());

  return (

<div className='contact-phone' onClick={(e) => {
      e.stopPropagation();
      setIsMenuOpen(false);
    }}>        <div className='first-part'>
          <div className='toggle-contact-phone'>
            <h5
              className="contact-mini-title"
              onClick={() => !isMenuOpen && setIsEmailOpen(!isEmailOpen)}
            >
              Email me! <ExpandMoreIcon />
            </h5>
            <div className={`in-and-out ${isEmailOpen ? 'visible' : 'hidden'}`}>
              <p>inesuribeb@gmail.com</p>
            </div>
          </div>

          <div className='toggle-contact-phone'>
            <h5
              className="contact-mini-title"
              onClick={() => !isMenuOpen && setIsSocialOpen(!isSocialOpen)}
            >
              Find me on <ExpandMoreIcon />
            </h5>
            <div className={`in-and-out ${isSocialOpen ? 'visible' : 'hidden'}`}>
              <ul className='contact-phone-ul'>
                <li>
                  <a href="https://github.com/inesuribeb" target="_blank" rel="noopener noreferrer">
                    Github <ArrowOutwardIcon className="link-icon" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/inesuribeb/" target="_blank" rel="noopener noreferrer">
                    Instagram <ArrowOutwardIcon className="link-icon" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/in%C3%A9s-uribe-barr%C3%B3n-325305143/" target="_blank" rel="noopener noreferrer">
                    Linkedin <ArrowOutwardIcon className="link-icon" />
                  </a>
                </li>
                <li>Behance <ArrowOutwardIcon className="link-icon" /></li>
              </ul>
            </div>
          </div>

          <div className='toggle-contact-phone'>
            <h5
              className="contact-mini-title"
              onClick={() => !isMenuOpen && setIsServicesOpen(!isServicesOpen)}
            >
              Services <ExpandMoreIcon />
            </h5>
            <div className={`in-and-out ${isServicesOpen ? 'visible' : 'hidden'}`}>
              <ul className='contact-phone-ul'>
                <li>Visual Identity</li>
                <li>Interface Design</li>
                <li>User Experience</li>
                <li>Creative Direction</li>
                <li>Content Production</li>
                <li>Front-End & Back-End</li>
                <li>Creative Digital Solutions</li>
                <li>Full-Stack Web Development</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='second-part'>
          <div className="contact-presentation">
            <p>Designer with a strong background in <i>visual communication</i>, currently expanding my skill set as a <i>full-stack web developer</i>.<br /><br /> With a passion for merging <i>creativity</i> with <i>technology</i>, I aim to create digital experiences that are both <i>aesthetically</i> pleasing and <i>functionally</i> effective. I focus on designing user-centric solutions that balance <i>innovation</i>, <i>design principles</i>, and <i>technical approach</i>.</p>
          </div>
          <div className='city-and-hour'>
            <h5>Bilbao, Spain<br />
              {`${time.getHours() % 12 || 12}:${String(time.getMinutes()).padStart(2, '0')} ${time.getHours() >= 12 ? 'PM' : 'AM'}`}
            </h5>
          </div>
        </div>
      </div>
  );
}

export default ContactPhone;