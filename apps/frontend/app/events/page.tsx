import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function EventsPage() {
    const upcomingEvents = [
        {
            date: 'MAR 15, 2026',
            title: 'Easter Celebration',
            description: 'Join us for a special Easter service celebrating the resurrection of Jesus Christ.',
            time: '9:00 AM & 11:00 AM',
        },
        {
            date: 'MAR 22, 2026',
            title: 'Community Outreach',
            description: 'Serving our local community with food, supplies, and prayer.',
            time: '10:00 AM - 2:00 PM',
        },
        {
            date: 'APR 5, 2026',
            title: 'Youth Retreat',
            description: 'A weekend retreat for teens to grow in faith and fellowship.',
            time: 'Friday 6 PM - Sunday 2 PM',
        },
        {
            date: 'APR 12, 2026',
            title: 'Marriage Conference',
            description: 'Strengthen your marriage with biblical teaching and practical tools.',
            time: 'Saturday 9:00 AM - 4:00 PM',
        },
    ]

    return (
        <>
            <Header />
            <main>
                <section className="py-20 gradient-hero" style={{ color: 'white', textAlign: 'center' }}>
                    <div className="container">
                        <h1>Events</h1>
                        <p style={{ fontSize: '1.25rem', marginTop: '1rem' }}>
                            Join us for upcoming events and special services
                        </p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container">
                        <h2 className="mb-8">Upcoming Events</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {upcomingEvents.map((event, index) => (
                                <Card key={index} hover>
                                    <div
                                        style={{
                                            display: 'inline-block',
                                            background: 'linear-gradient(135deg, var(--color-accent-500), var(--color-accent-600))',
                                            color: 'white',
                                            padding: '0.5rem 1rem',
                                            borderRadius: 'var(--radius-md)',
                                            fontWeight: 'bold',
                                            fontSize: '0.875rem',
                                            marginBottom: '1rem',
                                        }}
                                    >
                                        {event.date}
                                    </div>
                                    <h3>{event.title}</h3>
                                    <p style={{ color: 'var(--color-primary-600)', fontWeight: 600, marginBottom: '0.5rem' }}>
                                        {event.time}
                                    </p>
                                    <p>{event.description}</p>
                                    <div style={{ marginTop: '1rem' }}>
                                        <Button variant="outline">Learn More</Button>
                                    </div>
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
