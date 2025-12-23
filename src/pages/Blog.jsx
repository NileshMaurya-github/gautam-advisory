import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import { blogData } from '../data/blogData';
import styles from './Blog.module.css';

const Blog = () => {
    // Scroll to top on mount
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.page}>
            <div className={styles.hero}>
                <div className="container text-center">
                    <h1 className={styles.title}>Insights & Updates</h1>
                    <p className={styles.subtitle}>Deciphering India's complex regulatory landscape for you.</p>
                </div>
            </div>

            <div className={`container ${styles.contentContainer}`}>
                <div className={styles.grid}>
                    {blogData.map((item, index) => (
                        <motion.article
                            key={item.id}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
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
        </div>
    );
};

export default Blog;
