import React from 'react'
import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContent}>
                    <div className={styles.footerSection}>
                        <h3 className={styles.footerTitle}>Grace Community Church</h3>
                        <p className={styles.footerText}>
                            A place of worship, fellowship, and spiritual growth.
                        </p>
                        <div className={styles.socialLinks}>
                            <a href="#" className={styles.socialLink} aria-label="Facebook">
                                FB
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="Instagram">
                                IG
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="YouTube">
                                YT
                            </a>
                        </div>
                    </div>

                    <div className={styles.footerSection}>
                        <h4 className={styles.footerTitle}>Quick Links</h4>
                        <nav className={styles.footerLinks}>
                            <Link href="/about">About Us</Link>
                            <Link href="/beliefs">Our Beliefs</Link>
                            <Link href="/leadership">Leadership</Link>
                            <Link href="/events">Events</Link>
                        </nav>
                    </div>

                    <div className={styles.footerSection}>
                        <h4 className={styles.footerTitle}>Resources</h4>
                        <nav className={styles.footerLinks}>
                            <Link href="/sermons">Sermons</Link>
                            <Link href="/blog">Blog</Link>
                            <Link href="/give">Give</Link>
                            <Link href="/prayer">Prayer Requests</Link>
                        </nav>
                    </div>

                    <div className={styles.footerSection}>
                        <h4 className={styles.footerTitle}>Contact</h4>
                        <div className={styles.contactInfo}>
                            <p>123 Church Street</p>
                            <p>City, State 12345</p>
                            <p>Phone: (555) 123-4567</p>
                            <p>Email: info@gracechurch.com</p>
                        </div>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>&copy; {currentYear} Grace Community Church. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
