
'use client'

import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const Navbar = ({
    email,
    handleLogin,
    handleLogout
}: {
    email: string
    handleLogin: () => void
    handleLogout: () => void
}) => {
    const [open, setOpen] = useState(false)
    const popupRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
                setOpen(false)
            }
        }

        document.addEventListener('mousedown', handler)
        return () => document.removeEventListener('mousedown', handler)
    }, [])

    return (
        <motion.nav
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 inset-x-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur-xl"
        >
            <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-violet-600 flex items-center justify-center text-white font-bold text-lg">
                        M
                    </div>
                    <span className="text-xl font-bold tracking-tight">
                        Madadly<span className="text-violet-600">.</span>
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
                    <Link href="#features" className="hover:text-violet-600 transition">
                        Features
                    </Link>
                    <Link href="#how-it-works" className="hover:text-violet-600 transition">
                        How it works
                    </Link>
                </div>

                {email ? (
                    <div className="relative" ref={popupRef}>
                        <button
                            onClick={() => setOpen(!open)}
                            className="w-10 h-10 rounded-full bg-violet-100 text-violet-700 font-bold flex items-center justify-center hover:bg-violet-200 transition"
                        >
                            {email[0]?.toUpperCase()}
                        </button>

                        <AnimatePresence>
                            {open && (
                                <motion.div
                                    initial={{ opacity: 0, y: -8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    className="absolute right-0 top-14 w-52 rounded-xl border border-zinc-200 bg-white shadow-xl p-2"
                                >
                                    <p className="px-3 py-2 text-xs text-zinc-500 truncate">
                                        {email}
                                    </p>
                                    <a href="/dashboard" className="block rounded-lg px-3 py-2.5 text-sm hover:bg-zinc-100">
                                        Dashboard
                                    </a>
                                    <button 
                                        onClick={handleLogout}
                                        className="w-full text-left rounded-lg px-3 py-2.5 text-sm text-red-600 hover:bg-red-50"
                                    >
                                        Logout
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ) : (
                    <button
                        onClick={handleLogin}
                        className="rounded-xl bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white hover:bg-violet-700 transition"
                    >
                        Sign in
                    </button>
                )}
            </div>
        </motion.nav>
    )
}

export default Navbar
