import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <nav>
            {/* Home section */}
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            {/* About section */}
            <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            {/* Contact section */}
            <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
        </nav>
        <ul>
            <li>
                {/* LinkedIn ref and icon */}
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/ericrivas21/'>
                    <FontAwesomeIcon icon={faLinkedin} color='4d4d4e' />
                </a>
            </li>
            <li>
                {/* Github ref and icon */}
                <a target='_blank' rel='noreferrer' href='https://github.com/erivas28'>
                    <FontAwesomeIcon icon={faGithub} color='4d4d4e' />
                </a>
            </li>
            <li>
                {/* Youtube ref and icon */}
                <a target='_blank' rel='noreferrer' href='https://www.youtube.com/channel/UCuZCU4qv_DP06PRt_OB5k6A'>
                    <FontAwesomeIcon icon={faYoutube} color='4d4d4e' />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar