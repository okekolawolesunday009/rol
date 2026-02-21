import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Card from '@/components/ui/Card'

export default function BeliefsPage() {
    const beliefs = [
        {
            title: 'The Bible',
            description: 'We believe the Bible is the inspired, authoritative Word of God.',
        },
        {
            title: 'The Trinity',
            description: 'We believe in one God eternally existing in three persons: Father, Son, and Holy Spirit.',
        },
        {
            title: 'Salvation',
            description: 'We believe salvation is by grace alone through faith alone in Christ alone.',
        },
        {
            title: 'The Church',
            description: 'We believe the church is the body of Christ, called to worship, fellowship, and mission.',
        },
        {
            title: 'Baptism & Communion',
            description: 'We practice believer\'s baptism and regularly celebrate the Lord\'s Supper.',
        },
        {
            title: 'The Return of Christ',
            description: 'We believe Jesus will return to judge the living and the dead.',
        },
    ]

    return (
        <>
            <Header />
            <main>
                <section className="py-20 gradient-hero" style={{ color: 'white', textAlign: 'center' }}>
                    <div className="container">
                        <h1>What We Believe</h1>
                        <p style={{ fontSize: '1.25rem', marginTop: '1rem' }}>
                            Our core beliefs and doctrinal foundation
                        </p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {beliefs.map((belief, index) => (
                                <Card key={index}>
                                    <h3>{belief.title}</h3>
                                    <p>{belief.description}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
