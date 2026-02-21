'use client'

import React, { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'

export default function PrayerPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        request: '',
        isPrivate: false,
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        alert('Prayer request submitted (placeholder - will connect to backend API)')
    }

    return (
        <>
            <Header />
            <main>
                <section className="py-20 gradient-hero" style={{ color: 'white', textAlign: 'center' }}>
                    <div className="container">
                        <h1>Prayer Requests</h1>
                        <p style={{ fontSize: '1.25rem', marginTop: '1rem' }}>
                            We believe in the power of prayer
                        </p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container-narrow">
                        <Card>
                            <h2>Submit a Prayer Request</h2>
                            <p style={{ marginTop: '1rem', marginBottom: '2rem' }}>
                                Our prayer team is committed to praying for you. Share your request below, and we will lift you up in prayer.
                            </p>

                            <form onSubmit={handleSubmit}>
                                <div style={{ marginBottom: '1rem' }}>
                                    <Input
                                        label="Name"
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div style={{ marginBottom: '1rem' }}>
                                    <Input
                                        label="Email"
                                        type="email"
                                        required
                                        helperText="We'll send you updates on your prayer request"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>
                                        Prayer Request *
                                    </label>
                                    <textarea
                                        required
                                        rows={6}
                                        placeholder="Share your prayer request..."
                                        value={formData.request}
                                        onChange={(e) => setFormData({ ...formData, request: e.target.value })}
                                        style={{
                                            width: '100%',
                                            padding: '0.75rem 1rem',
                                            fontSize: '1rem',
                                            border: '2px solid var(--color-gray-300)',
                                            borderRadius: 'var(--radius-lg)',
                                            fontFamily: 'var(--font-sans)',
                                        }}
                                    />
                                </div>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                        <input
                                            type="checkbox"
                                            checked={formData.isPrivate}
                                            onChange={(e) => setFormData({ ...formData, isPrivate: e.target.checked })}
                                            style={{ width: '18px', height: '18px' }}
                                        />
                                        <span>Keep this request private (only prayer team will see it)</span>
                                    </label>
                                </div>
                                <Button type="submit" fullWidth size="lg">
                                    Submit Prayer Request
                                </Button>
                            </form>
                        </Card>

                        <div style={{ marginTop: '3rem' }}>
                            <Card>
                                <h3>How We Pray</h3>
                                <ul style={{ marginTop: '1rem' }}>
                                    <li>Our prayer team meets weekly to pray over all requests</li>
                                    <li>Requests are kept confidential unless you choose to share publicly</li>
                                    <li>We will follow up with you to see how God is working</li>
                                    <li>You can submit urgent requests anytime by calling the church office</li>
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
