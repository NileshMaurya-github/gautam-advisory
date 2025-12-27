import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as Icons from 'react-icons/fa';
import ContactForm from '../components/ContactForm';
import HeroContactForm from '../components/HeroContactForm';
import { getCategoryData } from '../data/categoryData.js';
import styles from './Startup.module.css';

const CategoryLandingPage = () => {
    const { category } = useParams();
    const data = getCategoryData(category);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [category]);

    const renderIcon = (iconName) => {
        const IconComponent = Icons[iconName];
        return IconComponent ? <IconComponent className={styles.icon} /> : <Icons.FaStar className={styles.icon} />;
    };

    return (
        <div className={styles.pageContainer}>
            {/* 1. Hero Section */}
            <section className={styles.hero} style={{ background: data.heroGradient }}>
                <div className={styles.heroContainer}> {/* New Container for Flex Layout */}
                    <div className={styles.heroContentLeft}>
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {data.title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {data.subtitle}
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <Link to="#contact" className={styles.ctaButtonOutline}>Get Started Now</Link>
                        </motion.div>
                    </div>

                    <div className={styles.heroContentRight}>
                        {/* Compact Hero Form */}
                        <HeroContactForm serviceName={data.title} />
                    </div>
                </div>
            </section>

            {/* 2. Introduction / About Section */}
            {data.intro && (
                <section className={styles.section} style={{ background: '#fff' }}>
                    <div className="container" style={{ maxWidth: '900px' }}>
                        <h2>Overview</h2>
                        {data.intro.map((para, i) => (
                            <p key={i} style={{ fontSize: '1.1rem', color: '#555', marginBottom: '15px', lineHeight: '1.8' }}>
                                {para}
                            </p>
                        ))}
                    </div>
                </section>
            )}

            {/* 3. Services Grid */}
            <section className={styles.servicesExample}>
                <div className="container">
                    <h2>Our Key Services</h2>
                    <div className={styles.cardGrid}>
                        {data.services.map((service, index) => (
                            <div key={index} className={styles.card}>
                                {renderIcon(service.icon)}
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                                <Link to={`/${category}/${service.id}`}>Explore &rarr;</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Why Choose Us / Benefits */}
            {data.benefits && (
                <section className={styles.section} style={{ background: '#f8f9fa' }}>
                    <div className="container">
                        <h2>Why Choose SKY Filings?</h2>
                        <div className={styles.cardGrid}>
                            {data.benefits.map((bg, i) => (
                                <div key={i} className={styles.card} style={{ textAlign: 'left', borderLeft: '4px solid #007bff' }}>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>{bg.title}</h3>
                                    <p style={{ fontSize: '0.95rem', color: '#666' }}>{bg.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* 5. Process Workflow */}
            {data.process && (
                <section className={styles.section} style={{ background: '#fff' }}>
                    <div className="container">
                        <h2>How It Works</h2>
                        <div className={styles.steps}>
                            {data.process.map((step, i) => (
                                <div key={i} className={styles.step}>
                                    <span>{i + 1}</span>
                                    <a href="tel:+919266730027" className={styles.ctaButton}>
                                        Get Started Now
                                    </a>
                                    <h4>{step}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* 6. FAQ Section */}
            {data.faqs && (
                <section className={styles.section} style={{ background: '#f1f1f1' }}>
                    <div className="container" style={{ maxWidth: '800px' }}>
                        <h2>Frequently Asked Questions</h2>
                        <div style={{ display: 'grid', gap: '20px', marginTop: '30px' }}>
                            {data.faqs.map((faq, i) => (
                                <div key={i} style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                                    <h4 style={{ marginBottom: '10px', color: '#333' }}>{faq.q}</h4>
                                    <p style={{ color: '#666', fontSize: '0.95rem' }}>{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* 7. Contact Section */}
            <section id="contact" className={styles.contactSection}>
                <div className={styles.formContainer}>
                    <h2>Talk to an Expert</h2>
                    <p>Contact us for professional advice and assistance.</p>
                    <ContactForm />
                </div>
            </section>
        </div>
    );
};

export default CategoryLandingPage;
