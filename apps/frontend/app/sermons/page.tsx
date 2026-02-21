import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'

export default function SermonsPage() {
    const sermons = [
        {
            id: 1,
            title: 'Faith in Action',
            speaker: 'Pastor John Smith',
            date: 'March 10, 2026',
            series: 'Living Faith',
            description: 'Exploring how faith transforms our daily lives and relationships.',
        },
        {
            id: 2,
            title: 'The Power of Prayer',
            speaker: 'Pastor John Smith',
            date: 'March 3, 2026',
            series: 'Spiritual Disciplines',
            description: 'Understanding the importance and impact of prayer in our walk with God.',
        },
        {
            id: 3,
            title: 'Grace Upon Grace',
            speaker: 'Guest Speaker Sarah Williams',
            date: 'February 25, 2026',
            series: 'Understanding Grace',
            description: 'Discovering the depth of God\'s grace in our lives.',
        },
    ]

    return (
        <>
            <Header />
            <main>
                <section className="py-20 gradient-hero" style={{ color: 'white', textAlign: 'center' }}>
                    <div className="container">
                        <h1>Sermons</h1>
                        <p style={{ fontSize: '1.25rem', marginTop: '1rem' }}>
                            Listen to our latest messages and explore our sermon archive
                        </p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container">
                        <div style={{ maxWidth: '600px', margin: '0 auto 3rem' }}>
                            <Input type="search" placeholder="Search sermons..." />
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            {sermons.map((sermon) => (
                                <Card key={sermon.id} hover>
                                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                                        <div
                                            style={{
                                                width: '200px',
                                                height: '150px',
                                                background: 'linear-gradient(135deg, var(--color-primary-400), var(--color-primary-600))',
                                                borderRadius: 'var(--radius-lg)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flexShrink: 0,
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: '60px',
                                                    height: '60px',
                                                    background: 'rgba(255,255,255,0.9)',
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: '1.5rem',
                                                    color: 'var(--color-primary-700)',
                                                    cursor: 'pointer',
                                                }}
                                            >
                                                ▶
                                            </div>
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <div
                                                style={{
                                                    fontSize: '0.875rem',
                                                    color: 'var(--color-primary-600)',
                                                    fontWeight: 600,
                                                    marginBottom: '0.5rem',
                                                }}
                                            >
                                                {sermon.series}
                                            </div>
                                            <h3 style={{ marginBottom: '0.5rem' }}>{sermon.title}</h3>
                                            <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-500)', marginBottom: '0.5rem' }}>
                                                {sermon.speaker} • {sermon.date}
                                            </p>
                                            <p>{sermon.description}</p>
                                            <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
                                                <Button variant="primary">Listen Now</Button>
                                                <Button variant="outline">Download</Button>
                                            </div>
                                        </div>
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
