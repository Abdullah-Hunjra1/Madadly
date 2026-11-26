import { ArrowUp } from 'lucide-react'
import Link from 'next/link'

const columns = [
    {
        title: 'Product',
        links: [
            { label: 'Features', href: '#features' },
            { label: 'How it works', href: '#how-it-works' }
        ]
    },
    {
        title: 'Account',
        links: [
            { label: 'Sign in', href: '/api/auth/login' },
            { label: 'Dashboard', href: '/dashboard' }
        ]
    }
]

const Footer = () => {
    return (
        <footer className="border-t border-line bg-surface px-4 pb-8 pt-14 sm:px-6">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
                    <div className="max-w-xs">
                        <Link href="/" className="flex items-center gap-2.5">
                            <span className="grid size-8 place-items-center rounded-control bg-brand font-heading text-body font-bold text-white">
                                M
                            </span>
                            <span className="font-heading text-lg font-bold tracking-tight text-ink">
                                Madadly
                            </span>
                        </Link>
                        <p className="mt-4 leading-7 text-ink-2">
                            AI-powered help. Made simple. Assistants that answer
                            customers from your own business knowledge.
                        </p>
                    </div>

                    {columns.map((col) => (
                        <div key={col.title}>
                            <h4 className="font-heading text-body font-semibold text-ink">{col.title}</h4>
                            <ul className="mt-4 space-y-2.5">
                                {col.links.map((l) => (
                                    <li key={l.label}>
                                        <a
                                            href={l.href}
                                            className="text-body text-ink-2 transition-colors hover:text-brand"
                                        >
                                            {l.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row">
                    <p className="text-caption text-ink-3">
                        © {new Date().getFullYear()} Madadly. All rights reserved.
                    </p>
                    <a
                        href="#"
                        className="group inline-flex items-center gap-2 rounded-control border border-line px-3 py-1.5 text-caption text-ink-2 transition hover:bg-muted hover:text-ink"
                    >
                        Back to top
                        <ArrowUp className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" aria-hidden />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer