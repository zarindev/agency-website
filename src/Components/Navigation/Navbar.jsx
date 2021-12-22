import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../Images/bg.jpg';
import logo from '../../Images/logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        
          <div className="uk-position-relative">
              
              <div className="uk-position-top uk-animation-slide-top">
                <nav className="uk-navbar-transparant nav-bg" uk-navbar>
                  <div className="uk-navbar-left">
                    <ul className="uk-navbar-nav">
                      <Link to="/home">
                        <li>
                          <img
                          src={logo}
                          alt=""
                          className="brand-logo"
                          />
                        </li>
                      </Link>
                      <div className="uk-navbar-nav vanish">
                      <li>
                        <Link to="/home" className="uk-text-bold "><span className='nav-link'>HOME</span></Link>
                      </li>
                      <li>
                        <Link to="/services" className="uk-text-bold"><span className='nav-link'>SERVICES</span></Link>
                        <div className="uk-navbar-dropdown" uk-dropdown="mode: click" style={{width: '250px'}}>
                          <ul className="uk-nav uk-dropdown-nav" >
                            <li className="uk-nav-header"><Link to="/services/web-development" className='uk-text-primary'>WEB DEVELOPMENT</Link></li>
                            <li><Link to="/services/web-development/with-wordpress">WITH WORDPRESS</Link></li>
                            <li><Link to="/services/web-development/with-programming-language">WITH PROGRAMMING LANGUAGES</Link></li>
                            <li className="uk-nav-header "><Link to="/services/software-qa-testing" className='uk-text-warning'>SOFTWARE QA TESTING</Link></li>
                            <li><Link to="/services/software-qa-testing/manual-qa-testing">MANUAL QA TESTING</Link></li>
                            <li><Link to="/services/software-qa-testing/automation-qa-testing">AUTOMATION QA TESTING</Link></li>
                            <li className="uk-nav-header "><Link to="/services/design-and-architecture" className='uk-text-danger'>DESIGN & ARCHITECTURE</Link></li>
                            <li><Link to="/services/design-and-architecture/ui-ux-design">UI/UX DESIGN</Link></li>
                            <li><Link to="/services/design-and-architecture/graphic-design">GRAPHIC DESIGN</Link></li>
                            <li className="uk-nav-header "><Link to="/services/digital-marketing" className='uk-text-success'>DIGITAL MARKETING</Link></li>
                            <li><Link to="/services/digital-marketing/search-engine-optimization">SEARCH ENGINE OPTIMIZATION(SEO)</Link></li>
                            <li><Link to="/services/digital-marketing/social-media-marketing">SOCIAL MEDIA MARKETING</Link></li>
                            <li><Link to="/services/digital-marketing/business-research">BUSINESS RESEARCH</Link></li>
                          </ul>
                        </div>
                      </li>
                      <li><Link to="/about-us" className="uk-text-bold"><span className=' nav-link'>ABOUT US</span></Link></li>
                      <li className="">
                        <Link to="/contact-us" className="uk-text-bold"><span className=' nav-link'>CONTACT US</span></Link>
                      </li>
                      </div>
                    </ul>
                  </div>
                  
                  <div className="uk-navbar-right responsive-menu">
                      <button uk-toggle="target: #offcanvas-nav" uk-icon="icon: menu"></button> 
                  </div>
                </nav>
              </div>
              <div id="offcanvas-nav" uk-offcanvas="overlay: true">
                <div className="uk-offcanvas-bar">
                  <ul className="uk-nav uk-nav-default">
                    <li><Link to="#"><span className='bar-link'>HOME</span></Link></li>
                    <li className="uk-parent">
                        <Link to="#"><span className='bar-link'>SERVICES</span></Link>
                        <ul className="uk-nav-sub">
                            <li><Link to="#" className='uk-text-danger'>WEB DEVELOPMENT</Link></li>
                            <li><Link to="#" className='uk-text-warning'>SOFTWARE QA TESTING</Link></li>
                            <li><Link to="#" className='uk-text-success'>DESIGN & ARCHITECTURE</Link></li>
                            <li><Link to="#">DIGITAL MARKETING</Link></li>
                        </ul>
                    </li>
                    <li><Link to=""><span className='bar-link'>CONTACT US</span></Link></li>
                  </ul>
                </div>
              </div>
        </div>
      
    );
};

export default Navbar;