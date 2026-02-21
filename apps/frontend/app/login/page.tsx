'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'

export default function LoginPage() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Placeholder authentication - will integrate with NextAuth.js
        alert('Login placeholder - will integrate with authentication system')
        // router.push('/admin')
    }

    return (
        <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-gray-50)' }}>
            <div style={{ width: '100%', maxWidth: '400px', padding: '2rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                        <span style={{ fontSize: '2.5rem' }}>✝</span> Grace Community
                    </h1>
                    <p style={{ color: 'var(--color-gray-600)' }}>Admin Login</p>
                </div>

                <Card>
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '1rem' }}>
                            <Input
                                label="Email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="admin@gracechurch.com"
                            />
                        </div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <Input
                                label="Password"
                                type="password"
                                required
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                placeholder="••••••••"
                            />
                        </div>
                        <Button type="submit" fullWidth size="lg">
                            Sign In
                        </Button>
                    </form>

                    <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                        <a href="#" style={{ fontSize: '0.875rem', color: 'var(--color-primary-600)' }}>
                            Forgot password?
                        </a>
                    </div>
                </Card>

                <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                    <Link href="/" style={{ fontSize: '0.875rem', color: 'var(--color-gray-600)' }}>
                        ← Back to website
                    </Link>
                </div>
            </div>
        </main>
    )
}
