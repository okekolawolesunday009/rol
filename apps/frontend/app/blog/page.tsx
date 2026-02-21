import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function BlogPage() {
    const posts = [
        {
            id: 1,
            title: 'Celebrating 35 Years of Ministry',
            author: 'Pastor John Smith',
            date: 'March 8, 2026',
            excerpt: 'Reflecting on God\'s faithfulness over three and a half decades of ministry in our community.',
            category: 'Announcements',
        },
        {
            id: 2,
            title: '5 Ways to Deepen Your Prayer Life',
            author: 'Sarah Johnson',
            date: 'March 5, 2026',
            excerpt: 'Practical tips for developing a more meaningful and consistent prayer life.',
            category: 'Spiritual Growth',
        },
        {
            id: 3,
            title: 'Community Outreach Success',
            author: 'Michael Brown',
            date: 'March 1, 2026',
            excerpt: 'Last week\'s community outreach event served over 200 families. Here\'s what happened.',
            category: 'Ministry Updates',
        },
    ]

    return (
        <>
            <Header />
            <main>
                <section className="py-20 gradient-hero" style={{ color: 'white', textAlign: 'center' }}>
                    <div className="container">
                        <h1>Blog & Announcements</h1>
                        <p style={{ fontSize: '1.25rem', marginTop: '1rem' }}>
                            Stay updated with news, teachings, and stories from our church
                        </p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {posts.map((post) => (
                                <Card key={post.id} hover>
                                    <div
                                        style={{
                                            width: '100%',
                                            height: '200px',
                                            background: 'linear-gradient(135deg, var(--color-primary-300), var(--color-primary-500))',
                                            borderRadius: 'var(--radius-lg)',
                                            marginBottom: '1rem',
                                        }}
                                    />
                                    <div
                                        style={{
                                            fontSize: '0.75rem',
                                            color: 'var(--color-accent-600)',
                                            fontWeight: 600,
                                            textTransform: 'uppercase',
                                            marginBottom: '0.5rem',
                                        }}
                                    >
                                        {post.category}
                                    </div>
                                    <h3>{post.title}</h3>
                                    <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-500)', marginBottom: '0.5rem' }}>
                                        {post.author} • {post.date}
                                    </p>
                                    <p>{post.excerpt}</p>
                                    <div style={{ marginTop: '1rem' }}>
                                        <Button variant="ghost">Read More →</Button>
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
