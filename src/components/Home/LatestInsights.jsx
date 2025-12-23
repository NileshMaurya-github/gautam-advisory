import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { blogData } from '../../data/blogData';
import styles from './LatestInsights.module.css';

const LatestInsights = () => {
    // Show only first 3 posts on Home page
    const displayedInsights = blogData.slice(0, 3);

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Regulatory Insights</h2>
                    <p>Stay ahead of the curve with our latest compliance updates and expert analysis.</p>
                </div>

                <div className={styles.grid}>
                    {displayedInsights.map((item, index) => (
                        <motion.article
                            key={item.id}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.meta}>
                                <span className={styles.category}>{item.category}</span>
                                <span className={styles.date}><FaCalendarAlt /> {item.date}</span>
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.excerpt}</p>
                            <Link to={`/blog/${item.id}`} className={styles.readMore}>
                                Read Update <FaArrowRight className={styles.arrow} />
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestInsights;
