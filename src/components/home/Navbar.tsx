
// 'use client'

// import { AnimatePresence, motion } from 'motion/react'
// import Link from 'next/link'
// import { useEffect, useRef, useState } from 'react'

// const Navbar = ({
//     email,
//     handleLogin,
//     handleLogout
// }: {
//     email: string
//     handleLogin: () => void
//     handleLogout: () => void
// }) => {
//     const [open, setOpen] = useState(false)
//     const [loginLoading, setLoginLoading] = useState(false)

//     const popupRef = useRef<HTMLDivElement>(null)

//     useEffect(() => {
//         const handler = (e: MouseEvent) => {
//             if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
//                 setOpen(false)
//             }
//         }

//         document.addEventListener('mousedown', handler)
//         return () => document.removeEventListener('mousedown', handler)
//     }, [])

//     const handleLoginClick = () => {
//         setLoginLoading(true)
//         handleLogin()
//     }

//     return (
//         <motion.nav
//             initial={{ y: -30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="fixed top-0 inset-x-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur-xl"
//         >
//             <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

//                 <Link href="/" className="flex items-center gap-2.5">
//                     <div className="w-9 h-9 rounded-xl bg-violet-600 flex items-center justify-center text-white font-bold text-lg">
//                         M
//                     </div>

//                     <span className="text-xl font-bold tracking-tight">
//                         Madadly<span className="text-violet-600">.</span>
//                     </span>
//                 </Link>

//                 <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
//                     <Link href="#features" className="hover:text-violet-600 transition">
//                         Features
//                     </Link>

//                     <Link href="#how-it-works" className="hover:text-violet-600 transition">
//                         How it works
//                     </Link>
//                 </div>

//                 {email ? (
//                     <div className="relative" ref={popupRef}>
//                         <button
//                             onClick={() => setOpen(!open)}
//                             className="w-10 h-10 rounded-full bg-violet-100 text-violet-700 font-bold flex items-center justify-center hover:bg-violet-200 transition"
//                         >
//                             {email[0]?.toUpperCase()}
//                         </button>

//                         <AnimatePresence>
//                             {open && (
//                                 <motion.div
//                                     initial={{ opacity: 0, y: -8 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     exit={{ opacity: 0, y: -8 }}
//                                     className="absolute right-0 top-14 w-52 rounded-xl border border-zinc-200 bg-white shadow-xl p-2"
//                                 >
//                                     <p className="px-3 py-2 text-xs text-zinc-500 truncate">
//                                         {email}
//                                     </p>

//                                     <a
//                                         href="/dashboard"
//                                         className="block rounded-lg px-3 py-2.5 text-sm hover:bg-zinc-100"
//                                     >
//                                         Dashboard
//                                     </a>

//                                     <button
//                                         onClick={handleLogout}
//                                         className="w-full text-left rounded-lg px-3 py-2.5 text-sm text-red-600 hover:bg-red-50"
//                                     >
//                                         Logout
//                                     </button>
//                                 </motion.div>
//                             )}
//                         </AnimatePresence>
//                     </div>
//                 ) : (
//                     <button
//                         onClick={handleLoginClick}
//                         disabled={loginLoading}
//                         className="rounded-xl bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white hover:bg-violet-700 transition disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
//                     >
//                         {loginLoading && (
//                             <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//                         )}

//                         {loginLoading ? 'Signing in...' : 'Sign in'}
//                     </button>
//                 )}

//             </div>
//         </motion.nav>
//     )
// }

// export default Navbar





'use client'

import { AnimatePresence, motion } from 'motion/react'
import { LayoutDashboard, LogOut } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/Button'

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
    const [loginLoading, setLoginLoading] = useState(false)
    const [scrolled, setScrolled] = useState(false)

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

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleLoginClick = () => {
        setLoginLoading(true)
        handleLogin()
    }

    return (
        <motion.nav
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-[background-color,box-shadow,border-color] duration-300 ${
                scrolled
                    ? 'border-line bg-canvas/90 shadow-card'
                    : 'border-transparent bg-canvas/40'
            }`}
        >
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
                <Link href="/" className="group flex items-center gap-2.5">
                    <span className="grid size-8 place-items-center rounded-control bg-brand font-heading text-body font-bold text-white transition-transform duration-300 group-hover:-rotate-6">
                        M
                    </span>
                    <span className="font-heading text-lg font-bold tracking-tight text-ink">
                        Madadly
                    </span>
                </Link>

                <div className="hidden items-center gap-1 md:flex">
                    <Link
                        href="#features"
                        className="rounded-control px-3 py-2 text-body text-ink-2 transition hover:bg-muted hover:text-ink"
                    >
                        Features
                    </Link>
                    <Link
                        href="#how-it-works"
                        className="rounded-control px-3 py-2 text-body text-ink-2 transition hover:bg-muted hover:text-ink"
                    >
                        How it works
                    </Link>
                    <Link
                        href="#faq"
                        className="rounded-control px-3 py-2 text-body text-ink-2 transition hover:bg-muted hover:text-ink"
                    >
                        FAQ
                    </Link>
                </div>

                {email ? (
                    <div className="relative" ref={popupRef}>
                        <button
                            onClick={() => setOpen(!open)}
                            aria-label="Account menu"
                            aria-expanded={open}
                            className="grid size-9 place-items-center rounded-full bg-brand-soft font-heading font-semibold text-brand transition hover:bg-[#d3e8e3]"
                        >
                            {email[0]?.toUpperCase()}
                        </button>

                        <AnimatePresence>
                            {open && (
                                <motion.div
                                    initial={{ opacity: 0, y: -6, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -6, scale: 0.98 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute right-0 top-12 w-56 origin-top-right rounded-card border border-line bg-surface p-1.5 shadow-pop"
                                >
                                    <p className="truncate border-b border-line px-3 pb-2.5 pt-2 text-caption text-ink-2">
                                        {email}
                                    </p>

                                    <a
                                        href="/dashboard"
                                        className="mt-1.5 flex items-center gap-2.5 rounded-control px-3 py-2.5 text-body text-ink transition hover:bg-muted"
                                    >
                                        <LayoutDashboard className="size-4 text-ink-2" aria-hidden />
                                        Dashboard
                                    </a>

                                    <button
                                        onClick={handleLogout}
                                        className="flex w-full items-center gap-2.5 rounded-control px-3 py-2.5 text-left text-body text-danger transition hover:bg-danger-soft"
                                    >
                                        <LogOut className="size-4" aria-hidden />
                                        Logout
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ) : (
                    <Button size="sm" onClick={handleLoginClick} loading={loginLoading}>
                        {loginLoading ? 'Signing in...' : 'Sign in'}
                    </Button>
                )}
            </div>
        </motion.nav>
    )
}

export default Navbar