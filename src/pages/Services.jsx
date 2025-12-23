import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaChevronRight } from 'react-icons/fa';
import { servicesData } from '../data/services';
import styles from './Services.module.css';

const Services = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeSection, setActiveSection] = useState('popular');

    // Group data into display sections
    const sections = [
        {
            id: 'popular',
            title: '🔥 Most Popular',
            description: 'Our most frequently requested solutions.',
            items: [
                servicesData.CA.project.find(s => s.id === 'ca-incorp'),
                servicesData.CA.retainer.find(s => s.id === 'ca-gst'),
                servicesData.CS.project.find(s => s.id === 'cs-ip'),
                servicesData.CA.project.find(s => s.id === 'ca-itr'),
                servicesData.CS.retainer.find(s => s.id === 'cs-kyc'),
                servicesData.CA.project.find(s => s.id === 'ca-net-worth'),
            ].filter(Boolean).map(i => ({ ...i, type: 'Hot' }))
        },
        {
            id: 'startup',
            title: 'Startups',
            description: 'Launch with the right legal structure.',
            items: [
                ...servicesData.CA.project.filter(i => ['ca-incorp', 'ca-valuation'].includes(i.id)),
                ...servicesData.CS.project.filter(i => ['cs-setup', 'cs-ip', 'cs-fdi'].includes(i.id))
            ].map(i => ({ ...i, type: 'Startup' }))
        },
        {
            id: 'corporate',
            title: 'Corporate',
            description: 'Annual compliance and governance.',
            items: [
                ...servicesData.CS.retainer.map(i => ({ ...i, type: 'CS' })),
                servicesData.CA.retainer.find(s => s.id === 'ca-stat-audit'),
            ].filter(Boolean)
        },
        {
            id: 'taxation',
            title: 'Taxation',
            description: 'GST, Income Tax, and International.',
            items: [
                ...servicesData.CA.retainer.filter(i => ['ca-gst', 'ca-tds', 'ca-tp'].includes(i.id)),
                ...servicesData.CA.project.filter(i => ['ca-itr', 'ca-15cb', 'ca-visa', 'ca-net-worth'].includes(i.id)),
            ].map(i => ({ ...i, type: 'Tax' }))
        },
        {
            id: 'finance',
            title: 'Finance',
            description: 'CMA Data, Project Reports, Valuation.',
            items: [
                ...servicesData.CA.project.filter(i => ['ca-proj-report', 'ca-turnover', 'ca-valuation'].includes(i.id)),
                servicesData.CA.retainer.find(s => s.id === 'ca-vcfo'),
            ].filter(Boolean).map(i => ({ ...i, type: 'Finance' }))
        },
        {
            id: 'audit',
            title: 'Audit & Assurance',
            description: 'Statutory, Internal, and Forensic audits.',
            items: [
                ...servicesData.CA.retainer.filter(i => ['ca-stat-audit', 'ca-internal-audit'].includes(i.id)),
                ...servicesData.CA.project.filter(i => ['ca-forensic', 'ca-sys-audit'].includes(i.id)),
                servicesData.CS.retainer.find(s => s.id === 'cs-audit'),
                servicesData.CS.project.find(s => s.id === 'cs-dd'),
            ].filter(Boolean).map(i => ({ ...i, type: 'Audit' }))
        }
    ];

    // Search Filtering
    const displayedSections = useMemo(() => {
        if (!searchTerm) return sections;

        return sections.map(section => ({
            ...section,
            items: section.items.filter(item =>
                item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.description.toLowerCase().includes(searchTerm.toLowerCase())
            )
        })).filter(section => section.items.length > 0);
    }, [searchTerm, sections]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            // Adjust offset for sticky headers + nav
            const y = element.getBoundingClientRect().top + window.scrollY - 150;
            window.scrollTo({ top: y, behavior: 'smooth' });
            setActiveSection(id);
        }
    };

    // Update active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200; // Offset

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    return (
        <div className={styles.page}>
            {/* Header & Search */}
            <div className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>Service Directory</h1>
                    <p className={styles.subtitle}>Find exactly what you need. Search or browse our catalog.</p>

                    <div className={styles.searchWrapper}>
                        <FaSearch className={styles.searchIcon} />
                        <input
                            type="text"
                            placeholder="Search services..."
                            className={styles.searchInput}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* Sticky Category Navigation */}
            <div className={styles.stickyNavContainer}>
                <div className={styles.categoryNav}>
                    {sections.map(section => (
                        <button
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className={`${styles.navPill} ${activeSection === section.id ? styles.active : ''}`}
                        >
                            {section.title}
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className={styles.container}>
                {displayedSections.length === 0 ? (
                    <div className={styles.noResults}>
                        <h3>No services found matching "{searchTerm}"</h3>
                        <p>Try searching for broader terms like "Tax" or "Company".</p>
                    </div>
                ) : (
                    displayedSections.map(section => (
                        <section key={section.id} id={section.id} className={styles.section}>
                            <div className={styles.sectionHeader}>
                                <h2>{section.title}</h2>
                                <p>{section.description}</p>
                            </div>

                            <div className={styles.grid}>
                                {section.items.map(service => (
                                    <motion.div
                                        key={service.id}
                                        className={styles.card}
                                        whileHover={{ y: -3 }}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                    >
                                        <div className={styles.cardHeader}>
                                            <span className={styles.badge}>{service.type}</span>
                                        </div>
                                        <h3>{service.title}</h3>
                                        <p>{service.description}</p>
                                        <Link to={`/services/${service.id}`} className={styles.link}>
                                            View Details <FaChevronRight size={10} />
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </section>
                    ))
                )}
            </div>
        </div>
    );
};

export default Services;
