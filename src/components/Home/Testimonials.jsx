import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import styles from './Testimonials.module.css';

const testimonials = [
    {
        quote: "They handled our Private Limited registration seamlessly. The team is extremely knowledgeable and proactive.",
        author: "Rajesh Kumar",
        role: "Founder, TechFlow Solutions",
        rating: 5
    },
    {
        quote: "Best CA firm in Delhi for startups. They helped us with everything from GST to unexpected tax notices.",
        author: "Priya Sharma",
        role: "Director, Creative Pulse",
        rating: 5
    },
    {
        quote: "Their virtual CFO service has been a game changer for our financial planning. Highly recommended!",
        author: "Amit Verma",
        role: "CEO, GreenLeaf Exports",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Client Stories</h2>
                    <p>Don't just take our word for it.</p>
                </div>

                <div className={styles.grid}>
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <FaQuoteLeft className={styles.quoteIcon} />
                            <p className={styles.quote}>{item.quote}</p>

                            <div className={styles.rating}>
                                {[...Array(item.rating)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>

                            <div className={styles.meta}>
                                <div>
                                    <h4 className={styles.author}>{item.author}</h4>
                                    <p className={styles.role}>{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
