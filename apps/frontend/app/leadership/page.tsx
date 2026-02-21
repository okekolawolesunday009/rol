import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Card from '@/components/ui/Card'

export default function LeadershipPage() {
    const leaders = [
        {
            name: 'Pastor John Smith',
            role: 'Senior Pastor',
            bio: 'John has been serving as Senior Pastor since 2010. He is passionate about biblical preaching and discipleship.',
        },
        {
            name: 'Sarah Johnson',
            role: 'Worship Director',
            bio: 'Sarah leads our worship ministry with a heart for authentic, Spirit-led worship.',
        },
        {
            name: 'Michael Brown',
            role: 'Youth Pastor',
            bio: 'Michael has been working with our youth for 5 years, helping teens grow in their faith.',
        },
        {
            name: 'Emily Davis',
            role: 'Children\'s Director',
            bio: 'Emily creates engaging environments where children can learn about Jesus.',
        },
    ]

    return (
        <>
            <Header />
            <main>
                <section className="py-20 gradient-hero" style={{ color: 'white', textAlign: 'center' }}>
                    <div className="container">
                        <h1>Our Leadership</h1>
                        <p style={{ fontSize: '1.25rem', marginTop: '1rem' }}>
                            Meet the team leading Grace Community Church
                        </p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {leaders.map((leader, index) => (
                                <Card key={index}>
                                    <div
                                        style={{
                                            width: '120px',
                                            height: '120px',
                                            borderRadius: '50%',
                                            background: 'linear-gradient(135deg, var(--color-primary-400), var(--color-primary-600))',
                                            margin: '0 auto 1rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white',
                                            fontSize: '2rem',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        {leader.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <h3 style={{ textAlign: 'center' }}>{leader.name}</h3>
                                    <p style={{ textAlign: 'center', color: 'var(--color-primary-600)', fontWeight: 600 }}>
                                        {leader.role}
                                    </p>
                                    <p style={{ textAlign: 'center', marginTop: '1rem' }}>{leader.bio}</p>
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
