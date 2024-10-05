import './index.scss';
import { Link,NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin,faGithub,faHackerrank} from '@fortawesome/free-brands-svg-icons'
import {faHome,faUser,faEnvelope, faEye, faBrain} from '@fortawesome/free-solid-svg-icons';
const Sidebar=()=>(
    <div className='navigationBar'>
        <nav>
            <NavLink exact="true" className={({ isActive }) => `home-page ${isActive ? 'active' : ''}`} to="/">
            <FontAwesomeIcon color='#4d4d4e' icon={faHome} />
            </NavLink>

            <NavLink exact="true" className={({ isActive }) => `about-page ${isActive ? 'active' : ''}`} to="/about">
            <FontAwesomeIcon color='#4d4d4e' icon={faUser} />
            </NavLink>

            <NavLink exact="true" className={({ isActive }) => `skills-page ${isActive ? 'active' : ''}`} to="/skills">
            <FontAwesomeIcon color='#4d4d4e' icon={faBrain} />
            </NavLink>

            <NavLink exact="true" className={({ isActive }) => `projects-page ${isActive ? 'active' : ''}`} to="/projects">
            <FontAwesomeIcon color='#4d4d4e' icon={faEye} />
            </NavLink>

            <NavLink exact="true" className={({ isActive }) => `contact-page ${isActive ? 'active' : ''}`} to="/contact">
            <FontAwesomeIcon color='#4d4d4e' icon={faEnvelope} />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rahamatunnisa-shaik-0a8a97258">
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                </a>
            </li> 
            <li>
                <a 
                target="_blank" rel="noreferrer" href="https://www.github.com/Rahamatunnisa1121">
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                </a>
            </li> 
            <li>
                <a 
                target="_blank" rel="noreferrer" href="https://www.hackerrank.com/profile/rahamatunnisa111">
                    <FontAwesomeIcon icon={faHackerrank} color='#4d4d4e'/>
                </a>
            </li> 
        </ul>
    </div>
);
export default Sidebar;