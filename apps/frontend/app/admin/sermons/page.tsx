'use client'

import React from 'react'
import Link from 'next/link'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function AdminSermonsPage() {
    const sermons = [
        { id: 1, title: 'Faith in Action', speaker: 'Pastor John Smith', date: '2026-03-10', status: 'Published' },
        { id: 2, title: 'The Power of Prayer', speaker: 'Pastor John Smith', date: '2026-03-03', status: 'Published' },
        { id: 3, title: 'Grace Upon Grace', speaker: 'Sarah Williams', date: '2026-02-25', status: 'Draft' },
    ]

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--color-gray-50)' }}>
            {/* Sidebar - same as dashboard */}
            <aside style={{ width: '250px', background: 'var(--color-gray-900)', color: 'white', padding: '2rem 1rem' }}>
                <div style={{ marginBottom: '3rem' }}>
                    <h2 style={{ color: 'white', fontSize: '1.25rem' }}>
                        <span style={{ fontSize: '1.5rem' }}>✝</span> Admin Panel
                    </h2>
                </div>

                <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <Link href="/admin" style={{ padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', color: 'var(--color-gray-300)' }}>
                        Dashboard
                    </Link>
                    <Link href="/admin/sermons" style={{ padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.1)', color: 'white' }}>
                        Sermons
                    </Link>
                    <Link href="/admin/events" style={{ padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', color: 'var(--color-gray-300)' }}>
                        Events
                    </Link>
                    <Link href="/admin/blog" style={{ padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', color: 'var(--color-gray-300)' }}>
                        Blog Posts
                    </Link>
                </nav>
            </aside>

            {/* Main Content */}
            <main style={{ flex: 1, padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <div>
                        <h1>Manage Sermons</h1>
                        <p style={{ color: 'var(--color-gray-600)' }}>Upload and manage sermon recordings</p>
                    </div>
                    <Button>+ Upload New Sermon</Button>
                </div>

                <Card>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid var(--color-gray-200)' }}>
                                <th style={{ padding: '1rem', textAlign: 'left' }}>Title</th>
                                <th style={{ padding: '1rem', textAlign: 'left' }}>Speaker</th>
                                <th style={{ padding: '1rem', textAlign: 'left' }}>Date</th>
                                <th style={{ padding: '1rem', textAlign: 'left' }}>Status</th>
                                <th style={{ padding: '1rem', textAlign: 'right' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sermons.map((sermon) => (
                                <tr key={sermon.id} style={{ borderBottom: '1px solid var(--color-gray-200)' }}>
                                    <td style={{ padding: '1rem' }}>{sermon.title}</td>
                                    <td style={{ padding: '1rem' }}>{sermon.speaker}</td>
                                    <td style={{ padding: '1rem' }}>{sermon.date}</td>
                                    <td style={{ padding: '1rem' }}>
                                        <span style={{
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: 'var(--radius-md)',
                                            fontSize: '0.875rem',
                                            background: sermon.status === 'Published' ? 'var(--color-success)' : 'var(--color-gray-400)',
                                            color: 'white',
                                        }}>
                                            {sermon.status}
                                        </span>
                                    </td>
                                    <td style={{ padding: '1rem', textAlign: 'right' }}>
                                        <button style={{ marginRight: '0.5rem', color: 'var(--color-primary-600)' }}>Edit</button>
                                        <button style={{ color: 'var(--color-error)' }}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Card>
            </main>
        </div>
    )
}
