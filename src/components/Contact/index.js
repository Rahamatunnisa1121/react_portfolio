import Loader from 'react-loaders';
import { useState,useEffect,useRef } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimateLetters';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
const Contact=()=>{
    const contactArray="Contact Me".split("");
    const refForm=useRef();
    const [letterClass,setLetterClass]=useState('text-animate');
    useEffect(()=>{
        setTimeout(()=>{
            return setLetterClass('text-animate-hover');
        },3000);
    },[]);
    const sendEmail=(e)=>{
        e.preventDefault();
        emailjs
        .sendForm('service_rbzq2hk','template_38v8xth',
            refForm.current,
            'vopk-rSUYy2o1mzvU'
        )
        .then(
        ()=>{
            alert('Message sent successfully!');
            window.location.reload(false);
        },
        ()=>{
            alert('Failed to send message! Please try again');
        }
    );
    };
    return(
        <>
        <div className='container contact-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters strArray={contactArray} idx={15} letterClass={letterClass}/>
            </h1>
            <p>
            I am a third-year student seeking internship opportunities, particularly in projects that challenge my skills and 
            contribute to real-world solutions. I am skilled in data structures and algorithms, web development, and computer 
            science fundamentals. If you have any projects or questions, feel free to reach out to me using the contact form below. 
            </p>
            <div className='contact-form'>
                <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input type="text" name="from_name" placeholder='Enter your name' required />
                        </li>
                        <li className='half'>
                            <input type="email" name="email" placeholder='Enter your email' required />
                        </li>
                        <li>
                            <input type="text" name="subject" placeholder='Subject' required />
                        </li>
                        <li>
                            <textarea placeholder='Enter your message' name="message" required></textarea>
                        </li>
                        <li>
                            <input type="submit" className="submit-button" value="SEND" />
                        </li>
                    </ul>
                </form>
            </div>
        </div>
        <div className='info-map'>
            Rahamatunnisa Shaik
            <br />
            India,
            <br />
            76-14-51, Priyadershini colony,
            <br />
            Bhavanipuram, Vijayawada,
            <br /> 
            AndhraPradesh - 520012.
            <br />
            <span>rahamatunnisa1121@gmail.com</span>
        </div>
        <div className='map-wrap'>
            <MapContainer center={[16.533741, 80.595429]} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[16.533741, 80.595429]}>
                <Popup>Want to chat? Drop by for coffee! ☕</Popup>
                </Marker>
            </MapContainer>
        </div>
        </div>
        <Loader type="ball-beat"/>
        </>
    );
}
export default Contact;