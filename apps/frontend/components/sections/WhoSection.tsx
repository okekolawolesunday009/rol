'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Heart, Users } from 'lucide-react'
import styles from './WhoSection.module.css'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1.0] } // Cubic bezier for smooth premium feel
    }
}

export default function WhoSection() {
    return (
        <section className={styles.section}>
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className={styles.wrapper}
                >
                    <motion.div variants={itemVariants} className={styles.header}>
                        <h2 className={styles.title}>Who We Are</h2>
                        <p className={styles.subtitle}>
                            We are a community driven by faith, hope, and love. Our mission is to
                            bring light to the world through the teachings of Jesus.
                        </p>
                    </motion.div>

                    <div className={styles.grid}>
                        <motion.div variants={itemVariants} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <BookOpen className={styles.icon} />
                            </div>
                            <h3 className={styles.cardTitle}>Biblical Truth</h3>
                            <p className={styles.cardText}>
                                Standing firm on the unshakeable foundation of God's Word in a changing world.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <Heart className={styles.icon} />
                            </div>
                            <h3 className={styles.cardTitle}>Authentic Love</h3>
                            <p className={styles.cardText}>
                                Creating a welcoming family where everyone belongs and is valued.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <Users className={styles.icon} />
                            </div>
                            <h3 className={styles.cardTitle}>Community Served</h3>
                            <p className={styles.cardText}>
                                Extending our hands to serve our city and make a tangible difference.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
