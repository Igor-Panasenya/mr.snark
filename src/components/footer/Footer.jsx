import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-box">
                    <div className="footer-content">
                        <a className="logo" href="#" onClick={() => {window.scroll(0,0)}}>
                            Mr.SNARK
                        </a>
                        <p>Analyze, get insights and latest news<br/>
                            about crypto & web3 industry</p>

                        <div className="footer-links">
                            <ul className="footer-socials-links">
                                <li className="footer-socials"><a href="#">Instagram</a></li>
                                <li className="footer-socials"><a href="#">Discord</a></li>
                                <li className="footer-socials"><a href="#">Twitter</a></li>
                                <li className="footer-socials"><a href="#">Email</a></li>
                            </ul>
                            <ul className="footer-socials-links pages">
                                <li className="footer-socials"><a href="#">Glossary</a></li>
                                <li className="footer-socials"><a href="#">Disclamer</a></li>
                                <li className="footer-socials"><a href="#">Privacy Policy</a></li>
                                <li className="footer-socials"><a href="#">Terms of Use</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-contact">
                        <h3>Contact Us</h3>
                        <p>Ask any questions regarding our app and we will get back to your <br/>
                            as soon as possbile.</p>

                        <form className="contact-forms">
                            <input className="input" type="text" required placeholder="First Name"/>
                            <input className="input" type="text" required placeholder="Last Name"/>
                            <input className="input" type="email" required placeholder="YourEmail@gmail.com"/>
                            <input className="input" type="number" required placeholder="Phone Number"/>
                            <textarea className="input input-message" required placeholder="Write a message"/>

                            <button type="submit">send message</button>
                        </form>
                    </div>
                </div>
                <h5>© 2022 Mr.SNARK All rights reserved.</h5>
            </div>
        </footer>
    );
};

export default Footer;