import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import styles from './Navbar.module.css';
import { menuData } from '../../data/menuData';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState(null);
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
        setActiveSubMenu(null);
        window.scrollTo(0, 0);
    };

    const toggleSubMenu = (index, e) => {
        e.preventDefault();
        e.stopPropagation();
        setActiveSubMenu(activeSubMenu === index ? null : index);
    };

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link to="/" onClick={closeMobileMenu}>
                        SKY <span>Filings</span>
                    </Link>
                </div>

                <ul className={`${styles.navLinks} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
                    {/* Dynamic Menu Items from Data */}
                    {menuData.map((menu, index) => (
                        <li key={index} className={`${styles.navItem} ${activeSubMenu === index ? styles.activeMobile : ''}`}>
                            <div
                                className={styles.navHeader}
                                onClick={(e) => {
                                    /* If clicking the empty space or title on mobile, also toggle if there is a submenu */
                                    if (window.innerWidth < 992 && menu.submenu) {
                                        toggleSubMenu(index, e);
                                    }
                                    /* If no submenu, the Link handles it. But wait, Link is inside. Layout issue. */
                                }}
                            >
                                <Link
                                    to={menu.path}
                                    className={styles.navLink}
                                    onClick={(e) => {
                                        if (window.innerWidth < 992) {
                                            if (menu.submenu) {
                                                // Prevent navigation and toggle submenu instead
                                                e.preventDefault();
                                                toggleSubMenu(index, e);
                                            } else {
                                                // If no submenu, close menu as usual
                                                closeMobileMenu();
                                            }
                                        }
                                    }}
                                >
                                    {menu.title}
                                </Link>
                                {menu.submenu && (
                                    <button
                                        className={`${styles.toggleBtn} ${activeSubMenu === index ? styles.rotate : ''}`}
                                        onClick={(e) => toggleSubMenu(index, e)}
                                    >
                                        <FaChevronDown />
                                    </button>
                                )}
                            </div>

                            {/* Mega Menu Dropdown */}
                            {menu.submenu && (
                                <div className={`${styles.megaMenu} ${activeSubMenu === index ? styles.open : ''}`}>
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
