import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Card from '@/components/ui/Card'

export default function AboutPage() {
    return (
        <>
            <Header />
            <main>
                <section className="py-20 gradient-hero" style={{ color: 'white', textAlign: 'center' }}>
                    <div className="container">
                        <h1>About Us</h1>
                        <p style={{ fontSize: '1.25rem', marginTop: '1rem' }}>
                            Learn about our church, mission, and values
                        </p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container-narrow">
                        <Card>
                            <h2>Our Mission</h2>
                            <p>
                                At Grace Community Church, our mission is to glorify God by making disciples who love Jesus,
                                love one another, and love our community. We are committed to biblical teaching, authentic
                                worship, and meaningful fellowship.
                            </p>
                        </Card>

                        <div className="mt-8">
                            <Card>
                                <h2>Our History</h2>
                                <p>
                                    Founded in 1985, Grace Community Church has been serving our community for over 35 years.
                                    What started as a small gathering of families has grown into a vibrant community of believers
                                    committed to following Jesus together.
                                </p>
                            </Card>
                        </div>

                        <div className="mt-8">
                            <Card>
                                <h2>Our Values</h2>
                                <ul>
                                    <li>Biblical Authority - We believe the Bible is God's inspired Word</li>
                                    <li>Gospel-Centered - Everything we do points to the good news of Jesus</li>
                                    <li>Community - We believe life is better together</li>
                                    <li>Service - We exist to serve God and others</li>
                                    <li>Mission - We are called to make disciples locally and globally</li>
                                </ul>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
