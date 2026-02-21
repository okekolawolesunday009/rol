import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import styles from './page.module.css'
import WhoSection from '@/components/sections/WhoSection'

export default function HomePage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className="container">
                        <div className={styles.heroContent}>
                            <h1 className={styles.heroTitle}>Welcome to Grace Community</h1>
                            <p className={styles.heroSubtitle}>
                                A place where faith, hope, and love come together
                            </p>
                            <div className={styles.heroButtons}>
                                <Button size="lg">Plan Your Visit</Button>
                                <Button size="lg" variant="outline">
                                    Watch Online
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <WhoSection />

                {/* Service Times */}
                <section className="py-16">
                    <div className="container">
                        <h2 className="text-center mb-8">Service Times</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card>
                                <h3>Sunday Worship</h3>
                                <p className={styles.serviceTime}>9:00 AM & 11:00 AM</p>
                                <p>Join us for inspiring worship and biblical teaching</p>
                            </Card>
                            <Card>
                                <h3>Wednesday Prayer</h3>
                                <p className={styles.serviceTime}>7:00 PM</p>
                                <p>Midweek prayer and Bible study</p>
                            </Card>
                            <Card>
                                <h3>Youth Service</h3>
                                <p className={styles.serviceTime}>Friday 6:30 PM</p>
                                <p>Dynamic worship and teaching for teens</p>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Upcoming Events */}
                <section className={`${styles.eventsSection} py-16`}>
                    <div className="container">
                        <h2 className="text-center mb-8">Upcoming Events</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Card hover>
                                <div className={styles.eventDate}>MAR 15</div>
                                <h3>Easter Celebration</h3>
                                <p>Join us for a special Easter service celebrating the resurrection</p>
                                <Button variant="ghost">Learn More →</Button>
                            </Card>
                            <Card hover>
                                <div className={styles.eventDate}>MAR 22</div>
                                <h3>Community Outreach</h3>
                                <p>Serving our local community with food and supplies</p>
                                <Button variant="ghost">Learn More →</Button>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Latest Sermons */}
                <section className="py-16">
                    <div className="container">
                        <h2 className="text-center mb-8">Latest Sermons</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[1, 2, 3].map((i) => (
                                <Card key={i} hover>
                                    <div className={styles.sermonThumbnail}>
                                        <div className={styles.playButton}>▶</div>
                                    </div>
                                    <h4>Faith in Action</h4>
                                    <p className={styles.sermonMeta}>Pastor John Smith • Mar {i}, 2026</p>
                                    <p>Exploring how faith transforms our daily lives</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className={styles.ctaSection}>
                    <div className="container text-center">
                        <h2>Ready to Join Us?</h2>
                        <p className={styles.ctaText}>
                            We'd love to have you visit and experience our community
                        </p>
                        <div className={styles.ctaButtons}>
                            <Button size="lg">Plan Your Visit</Button>
                            <Button size="lg" variant="secondary">
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
