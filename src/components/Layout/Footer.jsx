import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaFacebook, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        alert('Thank you for subscribing! You will receive regulatory updates shortly.');
        setEmail('');
    };

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>

                    {/* Brand & Address */}
                    <div className={styles.col}>
                        <img src="/IMG_20260106_182955.jpg" alt="Tax Nyay" className={styles.logoImg} />
                        <p className={styles.about}>
                            Strategic financial guidance for businesses and individuals. We turn compliance into a competitive advantage.
                        </p>
                        <div className={styles.contactInfo}>
                            <p><FaMapMarkerAlt className={styles.icon} /> Vasant Kunj, New Delhi - 110070</p>
                            <p><FaPhoneAlt className={styles.icon} /> +91 92667 30027</p>
                            <p><FaEnvelope className={styles.icon} /> info@taxnyay.com</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.col}>
                        <h3>Quick Access</h3>
                        <ul className={styles.links}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/analysis">Analysis</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter - New Section */}
                    <div className={styles.col}>
                        <h3>Stay Compliant</h3>
                        <p className={styles.newsletterText}>Get crucial tax and legal updates directly in your inbox. No spam, only value.</p>
                        <form className={styles.newsletterForm} onSubmit={handleSubscribe}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit" aria-label="Subscribe"><FaPaperPlane /></button>
                        </form>

                        <div className={styles.socials}>
                            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                            <a href="#" aria-label="Twitter"><FaTwitter /></a>
                            <a href="#" aria-label="Facebook"><FaFacebook /></a>
                        </div>
                    </div>

                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Tax न्याय. All Rights Reserved.</p>
                    <p className={styles.legal}>Privacy Policy | Terms of Service</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
