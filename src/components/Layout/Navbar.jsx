import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import styles from './Navbar.module.css';
import { menuData } from '../../data/menuData';

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

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        window.scrollTo(0, 0);
    };

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link to="/" onClick={closeMobileMenu}>
                        Delhi <span>Filings</span>
                    </Link>
                </div>

                <ul className={`${styles.navLinks} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
                    {/* Dynamic Menu Items from Data */}
                    {menuData.map((menu, index) => (
                        <li key={index} className={styles.navItem}>
                            <Link
                                to={menu.path}
                                className={styles.navLink}
                                onClick={(e) => {
                                    if (window.innerWidth < 992) {
                                        closeMobileMenu();
                                    }
                                }}
                            >
                                {menu.title}
                            </Link>

                            {/* Mega Menu Dropdown */}
                            {menu.submenu && (
                                <div className={styles.megaMenu}>
                                    {menu.submenu.map((subCategory, subIndex) => (
                                        <div key={subIndex} className={styles.menuColumn}>
                                            <div className={styles.categoryTitle}>{subCategory.category}</div>
                                            <ul className={styles.menuList}>
                                                {subCategory.items.map((item, itemIndex) => (
                                                    <li key={itemIndex}>
                                                        <Link to={item.path} onClick={closeMobileMenu}>
                                                            {item.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )}
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
