import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { title: 'Home', path: '/' },
        { title: 'Strategic Analysis', path: '/analysis' },
        { title: 'Services', path: '/services' },
        { title: 'Insights', path: '/blog' },
        { title: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link to="/" onClick={() => {
                        setMobileMenuOpen(false);
                        window.scrollTo(0, 0);
                    }}>
                        Gautam <span>Advisory</span>
                    </Link>
                </div>

                <ul className={`${styles.navLinks} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.title}>
                            <Link
                                to={link.path}
                                className={`${styles.navLink} ${location.pathname === link.path ? styles.activeLink : ''}`}
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    window.scrollTo(0, 0);
                                }}
                            >
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>

                <button className={styles.mobileMenuBtn} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
