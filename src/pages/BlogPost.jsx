import React, { useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCalendarAlt, FaTag } from 'react-icons/fa';
import { blogData } from '../data/blogData';
import ContactForm from '../components/ContactForm';
import styles from './BlogPost.module.css';

const BlogPost = () => {
    const { id } = useParams();

    const post = useMemo(() => {
        return blogData.find(p => p.id === id);
    }, [id]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!post) {
        return (
            <div className={styles.notFound}>
                <h1>Article Not Found</h1>
                <Link to="/blog" className={styles.backLink}>Back to Insights</Link>
            </div>
        );
    }

    return (
        <div className={styles.page}>
            <div className={styles.hero}>
                <div className="container">
                    <Link to="/blog" className={styles.backBtn}>
                        <FaArrowLeft /> All Insights
                    </Link>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className={styles.meta}>
                            <span className={styles.category}><FaTag /> {post.category}</span>
                            <span className={styles.date}><FaCalendarAlt /> {post.date}</span>
                        </div>
                        <h1 className={styles.title}>{post.title}</h1>
                    </motion.div>
                </div>
            </div>

            <div className={`container ${styles.contentContainer}`}>
                <div className={styles.mainContent}>
                    {/* Render HTML Content */}
                    <div
                        className={styles.articleBody}
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div className={styles.divider}></div>

                    <div className={styles.share}>
                        <p>Have questions about this update? Contact us for a consultation.</p>
                    </div>
                </div>

                <div className={styles.sidebar}>
                    <div className={styles.stickyForm}>
                        <ContactForm serviceName={`Query: ${post.title}`} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
