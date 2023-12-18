
import React from 'react';
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <div style={topSectionStyle}>
                <div style={serviceStyle}>conttact us</div>
                <div style={serviceStyle}>FAQs</div>
                <div style={serviceStyle}>Policies</div>
                <div style={serviceStyle}>careers</div>
                <div style={serviceStyle}>About us</div>
                <div style={serviceStyle}>Payments</div>
            </div>
            <div style={bottomSectionStyle}>
                <div style={leftSectionStyle}>
                    <h5>Subscribe to Our Email</h5>
                    <form style={formStyle}>
                        <input type="email" placeholder="Your Email" style={inputStyle} />
                        <button type="submit" style={submitButtonStyle}>
                            Subscribe
                        </button>
                    </form>
                </div>
                <div style={rightSectionStyle}>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
                        <FaLinkedin />
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
                        <FaFacebook />
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
                        <FaTwitter />
                    </a>
                </div>
            </div>
        </footer>
    );
};

const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    marginTop: '3px',
};

const topSectionStyle = {
    display: 'flex',
    justifyContent: 'center',
};

const serviceStyle = {
    // flex: '1',
    justifyContent:"center",
    padding: '4px',
    fontSize:'12px',
    zIndex:'0.8',
};

const bottomSectionStyle = {
    marginTop: '40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
};

const leftSectionStyle = {
    textAlign: 'left',
};

const rightSectionStyle = {
    textAlign: 'right',
    display: 'flex',
    alignItems: 'center',
};

const formStyle = {
    display: 'flex',
    alignItems: 'center',
};

const inputStyle = {
    padding: '8px',
    marginRight: '12px',
};

const submitButtonStyle = {
    padding: '8px 15px',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
};

const socialLinkStyle = {
    textDecoration: 'none',
    color: '#fff',
    marginLeft: '8px',
    fontSize: '16px', // Adjust the size based on your preference
};

export default Footer;
