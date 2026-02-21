import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
    title: 'Grace Community Church',
    description: 'Welcome to Grace Community Church - A place of worship, fellowship, and spiritual growth',
    keywords: ['church', 'worship', 'community', 'faith', 'sermons', 'events'],
    authors: [{ name: 'Grace Community Church' }],
    openGraph: {
        title: 'Grace Community Church',
        description: 'Welcome to Grace Community Church',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
