'use client'

import React, { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function GivePage() {
    const [amount, setAmount] = useState('50')
    const [customAmount, setCustomAmount] = useState('')

    const presetAmounts = ['25', '50', '100', '250', '500']

    return (
        <>
            <Header />
            <main>
                <section className="py-20 gradient-hero" style={{ color: 'white', textAlign: 'center' }}>
                    <div className="container">
                        <h1>Give</h1>
                        <p style={{ fontSize: '1.25rem', marginTop: '1rem' }}>
                            Support the ministry of Grace Community Church
                        </p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container-narrow">
                        <Card>
                            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Make a Donation</h2>

                            <div style={{ marginBottom: '2rem' }}>
                                <label style={{ display: 'block', marginBottom: '1rem', fontWeight: 600 }}>
                                    Select Amount
                                </label>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '1rem' }}>
                                    {presetAmounts.map((preset) => (
                                        <button
                                            key={preset}
                                            onClick={() => setAmount(preset)}
                                            style={{
                                                padding: '1rem',
                                                borderRadius: 'var(--radius-lg)',
                                                border: amount === preset ? '2px solid var(--color-primary-600)' : '2px solid var(--color-gray-300)',
                                                background: amount === preset ? 'var(--color-primary-50)' : 'white',
                                                color: amount === preset ? 'var(--color-primary-700)' : 'var(--color-gray-700)',
                                                fontWeight: 600,
                                                cursor: 'pointer',
                                                transition: 'all 0.2s',
                                            }}
                                        >
                                            ${preset}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                                    Or Enter Custom Amount
                                </label>
                                <input
                                    type="number"
                                    placeholder="Enter amount"
                                    value={customAmount}
                                    onChange={(e) => {
                                        setCustomAmount(e.target.value)
                                        setAmount(e.target.value)
                                    }}
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem 1rem',
                                        fontSize: '1rem',
                                        border: '2px solid var(--color-gray-300)',
                                        borderRadius: 'var(--radius-lg)',
                                    }}
                                />
                            </div>

                            <div style={{
                                padding: '1.5rem',
                                background: 'var(--color-gray-50)',
                                borderRadius: 'var(--radius-lg)',
                                marginBottom: '2rem',
                                textAlign: 'center'
                            }}>
                                <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-600)', marginBottom: '0.5rem' }}>
                                    Payment Integration Placeholder
                                </p>
                                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-primary-700)' }}>
                                    ${amount || '0'}
                                </p>
                                <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-500)', marginTop: '0.5rem' }}>
                                    Stripe/PayPal integration will be added here
                                </p>
                            </div>

                            <Button fullWidth size="lg">
                                Continue to Payment
                            </Button>

                            <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-500)', textAlign: 'center', marginTop: '1rem' }}>
                                Your donation is tax-deductible. You will receive a receipt via email.
                            </p>
                        </Card>

                        <div style={{ marginTop: '3rem' }}>
                            <Card>
                                <h3>Other Ways to Give</h3>
                                <ul style={{ marginTop: '1rem' }}>
                                    <li>Mail a check to: Grace Community Church, 123 Church St, City, State 12345</li>
                                    <li>Give in person during any service</li>
                                    <li>Set up automatic recurring donations (contact office)</li>
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
