'use client'

import React, { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        alert('Form submission placeholder - will connect to backend API')
    }

    return (
        <>
            <Header />
            <main>
                <section className="py-20 gradient-hero" style={{ color: 'white', textAlign: 'center' }}>
                    <div className="container">
                        <h1>Contact Us</h1>
                        <p style={{ fontSize: '1.25rem', marginTop: '1rem' }}>
                            We'd love to hear from you
                        </p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Card>
                                <h2>Send Us a Message</h2>
                                <form onSubmit={handleSubmit} style={{ marginTop: '1.5rem' }}>
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
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                    <div style={{ marginBottom: '1rem' }}>
                                        <Input
                                            label="Phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>
                                            Message
                                        </label>
                                        <textarea
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
                                    <Button type="submit" fullWidth>
                                        Send Message
                                    </Button>
                                </form>
                            </Card>

                            <div>
                                <Card>
                                    <h3>Church Office</h3>
                                    <div style={{ marginTop: '1rem' }}>
                                        <p><strong>Address:</strong></p>
                                        <p>123 Church Street</p>
                                        <p>City, State 12345</p>
                                    </div>
                                    <div style={{ marginTop: '1.5rem' }}>
                                        <p><strong>Phone:</strong></p>
                                        <p>(555) 123-4567</p>
                                    </div>
                                    <div style={{ marginTop: '1.5rem' }}>
                                        <p><strong>Email:</strong></p>
                                        <p>info@gracechurch.com</p>
                                    </div>
                                    <div style={{ marginTop: '1.5rem' }}>
                                        <p><strong>Office Hours:</strong></p>
                                        <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                                        <p>Saturday: 10:00 AM - 2:00 PM</p>
                                        <p>Sunday: Closed</p>
                                    </div>
                                </Card>

                                <div style={{ marginTop: '1.5rem' }}>
                                    <Card>
                                        <h3>Get Directions</h3>
                                        <div
                                            style={{
                                                width: '100%',
                                                height: '200px',
                                                background: 'var(--color-gray-200)',
                                                borderRadius: 'var(--radius-lg)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginTop: '1rem',
                                                color: 'var(--color-gray-500)',
                                            }}
                                        >
                                            Map Placeholder
                                        </div>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
