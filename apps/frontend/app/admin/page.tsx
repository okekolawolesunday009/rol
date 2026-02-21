'use client'

import React from 'react'
import Link from 'next/link'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function AdminDashboard() {
    const stats = [
        { label: 'Total Sermons', value: '156', change: '+12 this month' },
        { label: 'Upcoming Events', value: '8', change: '3 this week' },
        { label: 'Blog Posts', value: '43', change: '+5 this month' },
        { label: 'Prayer Requests', value: '24', change: '12 pending' },
    ]

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--color-gray-50)' }}>
            {/* Sidebar */}
            <aside style={{ width: '250px', background: 'var(--color-gray-900)', color: 'white', padding: '2rem 1rem' }}>
                <div style={{ marginBottom: '3rem' }}>
                    <h2 style={{ color: 'white', fontSize: '1.25rem' }}>
                        <span style={{ fontSize: '1.5rem' }}>✝</span> Admin Panel
                    </h2>
                </div>

                <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <Link href="/admin" style={{ padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.1)', color: 'white' }}>
                        Dashboard
                    </Link>
                    <Link href="/admin/sermons" style={{ padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', color: 'var(--color-gray-300)' }}>
                        Sermons
                    </Link>
                    <Link href="/admin/events" style={{ padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', color: 'var(--color-gray-300)' }}>
                        Events
                    </Link>
                    <Link href="/admin/blog" style={{ padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', color: 'var(--color-gray-300)' }}>
                        Blog Posts
                    </Link>
                    <Link href="/admin/prayer-requests" style={{ padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', color: 'var(--color-gray-300)' }}>
                        Prayer Requests
                    </Link>
                </nav>

                <div style={{ marginTop: 'auto', paddingTop: '3rem' }}>
                    <Link href="/" style={{ padding: '0.75rem 1rem', display: 'block', borderRadius: 'var(--radius-md)', color: 'var(--color-gray-300)' }}>
                        ← Back to Site
                    </Link>
                    <button style={{ padding: '0.75rem 1rem', width: '100%', borderRadius: 'var(--radius-md)', color: 'var(--color-gray-300)', marginTop: '0.5rem', textAlign: 'left' }}>
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main style={{ flex: 1, padding: '2rem' }}>
                <div style={{ marginBottom: '2rem' }}>
                    <h1>Dashboard</h1>
                    <p style={{ color: 'var(--color-gray-600)' }}>Welcome back! Here's what's happening.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ marginBottom: '2rem' }}>
                    {stats.map((stat, index) => (
                        <Card key={index}>
                            <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-600)', marginBottom: '0.5rem' }}>
                                {stat.label}
                            </p>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-primary-700)', marginBottom: '0.5rem' }}>
                                {stat.value}
                            </p>
                            <p style={{ fontSize: '0.75rem', color: 'var(--color-gray-500)' }}>
                                {stat.change}
                            </p>
                        </Card>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card>
                        <h3>Recent Activity</h3>
                        <div style={{ marginTop: '1rem' }}>
                            <div style={{ padding: '0.75rem 0', borderBottom: '1px solid var(--color-gray-200)' }}>
                                <p style={{ fontWeight: 600 }}>New sermon uploaded</p>
                                <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-500)' }}>2 hours ago</p>
                            </div>
                            <div style={{ padding: '0.75rem 0', borderBottom: '1px solid var(--color-gray-200)' }}>
                                <p style={{ fontWeight: 600 }}>Event created: Easter Celebration</p>
                                <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-500)' }}>5 hours ago</p>
                            </div>
                            <div style={{ padding: '0.75rem 0' }}>
                                <p style={{ fontWeight: 600 }}>Blog post published</p>
                                <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-500)' }}>1 day ago</p>
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <h3>Quick Actions</h3>
                        <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <Button fullWidth>Upload New Sermon</Button>
                            <Button fullWidth variant="outline">Create Event</Button>
                            <Button fullWidth variant="outline">Write Blog Post</Button>
                        </div>
                    </Card>
                </div>
            </main>
        </div>
    )
}
