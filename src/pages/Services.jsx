import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaChevronRight, FaArrowRight } from 'react-icons/fa';
import { menuData } from '../data/menuData'; // Use menuData as source of truth
import styles from './Services.module.css';

const Services = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeSection, setActiveSection] = useState(menuData.find(m => m.submenu)?.title || '');

    // Flatten data for search but keep structure for display
    const filteredSections = useMemo(() => {
        // Only include items that are actual service categories (have a submenu)
        const serviceItems = menuData.filter(item => item.submenu);

        if (!searchTerm) return serviceItems;

        const lowerTerm = searchTerm.toLowerCase();

        return serviceItems.map(section => {
            // Check if section title matches
            if (section.title.toLowerCase().includes(lowerTerm)) return section;

            // Filter submenus
            const filteredSubmenu = section.submenu?.map(cat => {
                // Check if category matches
                if (cat.category.toLowerCase().includes(lowerTerm)) return cat;

                // Filter items
                const filteredItems = cat.items.filter(item =>
                    item.label.toLowerCase().includes(lowerTerm)
                );

                if (filteredItems.length > 0) {
                    return { ...cat, items: filteredItems };
                }
                return null;
            }).filter(Boolean) || [];

            if (filteredSubmenu.length > 0) {
                return { ...section, submenu: filteredSubmenu };
            }
            return null;
        }).filter(Boolean);
    }, [searchTerm]);

    const scrollToSection = (title) => {
        const id = title.replace(/\s+/g, '-').toLowerCase();
        const element = document.getElementById(id);
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 150;
            window.scrollTo({ top: y, behavior: 'smooth' });
            setActiveSection(title);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;
            for (const section of menuData) {
                const id = section.title.replace(/\s+/g, '-').toLowerCase();
                const element = document.getElementById(id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.title);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <div className={styles.hero}>
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={styles.title}
                    >
                        Our Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={styles.subtitle}
                    >
                        Comprehensive legal, tax, and compliance solutions for every stage of your business.
                    </motion.p>

                    <div className={styles.searchWrapper}>
                        <FaSearch className={styles.searchIcon} />
                        <input
                            type="text"
                            placeholder="Search for any service (e.g. GST, Trademark, UK VAT)..."
                            className={styles.searchInput}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* Sticky Navigation */}
            <div className={styles.stickyNavContainer}>
                <div className={styles.categoryNav}>
                    {menuData.filter(m => m.submenu).map((section, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToSection(section.title)}
                            className={`${styles.navPill} ${activeSection === section.title ? styles.active : ''}`}
                        >
                            {section.title}
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className={styles.container}>
                {filteredSections.length === 0 ? (
                    <div className={styles.noResults}>
                        <h3>No results found for "{searchTerm}"</h3>
                        <p>Try checking your spelling or search for a broader category.</p>
                    </div>
                ) : (
                    <div className={styles.contentWrapper}>
                        {filteredSections.map((section, index) => (
                            <section
                                key={index}
                                id={section.title.replace(/\s+/g, '-').toLowerCase()}
                                className={styles.mainSection}
                            >
                                <div className={styles.sectionHeader}>
                                    <h2>{section.title}</h2>
                                    <div className={styles.sectionDivider}></div>
                                </div>

                                <div className={styles.subCategoryGrid}>
                                    {section.submenu.map((sub, subIndex) => (
                                        <motion.div
                                            key={subIndex}
                                            className={styles.subCategoryCard}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                        >
                                            <h3 className={styles.subTitle}>{sub.category}</h3>
                                            <ul className={styles.serviceList}>
                                                {sub.items.map((item, itemIndex) => (
                                                    <li key={itemIndex}>
                                                        <Link to={item.path} className={styles.serviceLink}>
                                                            <span className={styles.linkLabel}>{item.label}</span>
                                                            <FaArrowRight className={styles.linkArrow} />
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Services;
