
// 'use client'

// import { motion } from 'motion/react'

// const HeroSection = ({
//     email,
//     handleLogin,
//     handleLogout
// }: {
//     email: string
//     handleLogin: () => void
//     handleLogout: () => void
// }) => {
//     return (
//         <section className="relative pt-40 pb-28 px-6 overflow-hidden">
//             <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-violet-100/60 blur-[120px] rounded-full -z-10" />

//             <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

//                 <motion.div
//                     initial={{ opacity: 0, y: 25 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.7 }}
//                 >
//                     <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700">
//                         <span className="w-2 h-2 rounded-full bg-violet-600" />
//                         AI-powered customer support
//                     </div>

//                     <h1 className="mt-7 text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight">
//                         Your business.
//                         <span className="block text-violet-600">Your AI assistant.</span>
//                     </h1>

//                     <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-600">
//                         Create intelligent AI assistants trained on your business
//                         knowledge. Add them to your website and give customers
//                         instant answers, anytime.
//                     </p>

//                     <div className="mt-9 flex flex-wrap gap-4">
//                         <button
//                             onClick={() => {
//                                 if (email) {
//                                     window.location.href = '/dashboard'
//                                 } else {
//                                     handleLogin()
//                                 }
//                             }}
//                             className="rounded-xl bg-violet-600 px-7 py-3.5 text-white font-semibold shadow-lg shadow-violet-200 hover:bg-violet-700 transition"
//                         >
//                             {email ? 'Go to Dashboard' : 'Get Started'}
//                             <span className="ml-2">→</span>
//                         </button>

//                         <a
//                             href="#features"
//                             className="rounded-xl border border-zinc-300 px-7 py-3.5 font-semibold hover:bg-zinc-50 transition"
//                         >
//                             Explore Features
//                         </a>
//                     </div>

//                     <p className="mt-6 text-sm text-zinc-500">
//                         Built for businesses that want to support customers better.
//                     </p>
//                 </motion.div>

//                 <motion.div
//                     initial={{ opacity: 0, x: 30 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.8, delay: 0.2 }}
//                     className="relative"
//                 >
//                     <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-violet-200 to-indigo-100 blur-2xl opacity-60" />

//                     <div className="relative rounded-3xl border border-zinc-200 bg-white shadow-2xl shadow-violet-100/60 overflow-hidden">
//                         <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-5">
//                             <div className="flex items-center gap-3">
//                                 <div className="w-10 h-10 rounded-xl bg-violet-600 text-white flex items-center justify-center font-bold">
//                                     M
//                                 </div>
//                                 <div>
//                                     <p className="font-semibold">Madadly Assistant</p>
//                                     <p className="text-xs text-emerald-600">● Online</p>
//                                 </div>
//                             </div>
//                             <span className="text-xs text-zinc-400">AI Support</span>
//                         </div>

//                         <div className="bg-zinc-50 p-6 md:p-8 min-h-[340px] space-y-6">
//                             <div className="text-center">
//                                 <span className="text-xs text-zinc-400">TODAY</span>
//                             </div>

//                             <div className="flex justify-start">
//                                 <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white border border-zinc-200 p-4 shadow-sm">
//                                     <p className="text-xs font-semibold text-violet-600 mb-2">Madadly Assistant</p>
//                                     <p className="text-sm leading-6 text-zinc-700">
//                                         Hi there! 👋 Welcome. How can I help you today?
//                                     </p>
//                                 </div>
//                             </div>

//                             <div className="flex justify-end">
//                                 <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-violet-600 p-4 text-white">
//                                     <p className="text-sm leading-6">
//                                         I'd like to know more about your services.
//                                     </p>
//                                 </div>
//                             </div>

//                             <div className="flex justify-start">
//                                 <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white border border-zinc-200 p-4 shadow-sm">
//                                     <p className="text-xs font-semibold text-violet-600 mb-2">Madadly Assistant</p>
//                                     <p className="text-sm leading-6 text-zinc-700">
//                                         Absolutely! I can help you explore our services,
//                                         pricing, and everything else you need to know.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="p-4 border-t border-zinc-100">
//                             <div className="flex items-center justify-between rounded-xl border border-zinc-200 px-4 py-3">
//                                 <span className="text-sm text-zinc-400">Ask me anything...</span>
//                                 <span className="rounded-lg bg-violet-600 px-3 py-2 text-white">↑</span>
//                             </div>
//                             <p className="text-center text-[10px] text-zinc-400 mt-3">
//                                 Powered by Madadly AI
//                             </p>
//                         </div>
//                     </div>

//                     <motion.div
//                         animate={{ y: [0, -10, 0] }}
//                         transition={{ duration: 3, repeat: Infinity }}
//                         className="absolute -bottom-6 -left-6 hidden md:block rounded-2xl bg-white border border-zinc-200 shadow-xl p-4"
//                     >
//                         <p className="text-xs text-zinc-500">Customer support</p>
//                         <p className="font-semibold text-emerald-600 mt-1">Available 24/7</p>
//                     </motion.div>
//                 </motion.div>
//             </div>
//         </section>
//     )
// }

// export default HeroSection










'use client'

import { AnimatePresence, motion, type Variants } from 'motion/react'
import { ArrowUp, Check, Clock, Sparkles, Zap } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/Button'

const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } }
}

const item: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
}

const points = ['Trained on your content', 'Embeds on any website', 'Available 24/7']

const TypingDots = () => (
    <div className="flex w-fit items-center gap-1 rounded-2xl rounded-bl-sm border border-line bg-surface px-3.5 py-3">
        {[0, 1, 2].map((i) => (
            <motion.span
                key={i}
                className="size-1.5 rounded-full bg-ink-3"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.12 }}
            />
        ))}
    </div>
)

const HeroSection = ({
    email,
    handleLogin
}: {
    email: string
    handleLogin: () => void
    handleLogout: () => void
}) => {
    // Plays the sample conversation once: question, typing, answer, source.
    const [step, setStep] = useState(0)

    useEffect(() => {
        const timers = [
            setTimeout(() => setStep(1), 1000),
            setTimeout(() => setStep(2), 1900),
            setTimeout(() => setStep(3), 3400),
            setTimeout(() => setStep(4), 4100)
        ]
        return () => timers.forEach(clearTimeout)
    }, [])

    return (
        <section className="relative isolate overflow-hidden px-4 pb-20 pt-28 sm:px-6 md:pb-28 md:pt-36">
            <div
                aria-hidden
                className="absolute inset-0 -z-10 bg-[radial-gradient(circle,rgb(27_31_30/0.09)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]"
            />
            <div
                aria-hidden
                className="absolute -right-40 -top-40 -z-10 size-[560px] rounded-full bg-[radial-gradient(closest-side,#e3f1ee,transparent)]"
            />

            <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
                <motion.div variants={container} initial="hidden" animate="show">
                    <motion.span
                        variants={item}
                        className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-caption font-medium text-ink-2 shadow-card"
                    >
                        <Sparkles className="size-3.5 text-ai" aria-hidden />
                        AI-powered customer support
                    </motion.span>

                    <motion.h1
                        variants={item}
                        className="mt-6 max-w-xl font-heading text-4xl font-bold leading-[1.1] tracking-tight text-ink md:text-display"
                    >
                        Customer support that already knows your business.
                    </motion.h1>

                    <motion.p variants={item} className="mt-6 max-w-lg text-lg leading-8 text-ink-2">
                        Create intelligent AI assistants trained on your business
                        knowledge. Add them to your website and give customers
                        instant answers, anytime.
                    </motion.p>

                    <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
                        <Button
                            size="lg"
                            onClick={() => {
                                if (email) {
                                    window.location.href = '/dashboard'
                                } else {
                                    handleLogin()
                                }
                            }}
                        >
                            {email ? 'Go to Dashboard' : 'Get Started'}
                        </Button>

                        <a
                            href="#features"
                            className="inline-flex h-12 items-center rounded-control border border-line bg-surface px-5 font-medium text-ink shadow-card transition hover:bg-muted"
                        >
                            Explore Features
                        </a>
                    </motion.div>

                    <motion.ul variants={item} className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
                        {points.map((p) => (
                            <li key={p} className="flex items-center gap-1.5 text-caption text-ink-2">
                                <Check className="size-4 text-brand-mid" aria-hidden />
                                {p}
                            </li>
                        ))}
                    </motion.ul>
                </motion.div>

                {/* Product demo: a customer website with the Madadly widget */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
                    className="relative"
                >
                    <div className="overflow-hidden rounded-card border border-line bg-surface shadow-pop">
                        <div className="flex items-center gap-3 border-b border-line bg-muted/60 px-4 py-3">
                            <div className="flex gap-1.5" aria-hidden>
                                <span className="size-2.5 rounded-full bg-line" />
                                <span className="size-2.5 rounded-full bg-line" />
                                <span className="size-2.5 rounded-full bg-line" />
                            </div>
                            <span className="rounded-md bg-surface px-3 py-1 text-caption text-ink-3">
                                yourstore.com
                            </span>
                        </div>

                        <div className="relative h-[430px] p-5" aria-hidden>
                            <div className="h-3 w-24 rounded bg-muted" />
                            <div className="mt-5 h-24 rounded-control bg-muted/70" />
                            <div className="mt-4 h-3 w-2/3 rounded bg-muted" />
                            <div className="mt-2.5 h-3 w-1/2 rounded bg-muted" />
                            <div className="mt-5 grid grid-cols-3 gap-3">
                                <div className="h-16 rounded-control bg-muted/70" />
                                <div className="h-16 rounded-control bg-muted/70" />
                                <div className="h-16 rounded-control bg-muted/70" />
                            </div>

                            <div className="absolute bottom-4 right-4 w-[min(320px,calc(100%-2rem))] overflow-hidden rounded-card border border-line bg-surface shadow-pop">
                                <div className="flex items-center justify-between bg-brand px-4 py-3 text-white">
                                    <div className="flex items-center gap-2.5">
                                        <span className="grid size-8 place-items-center rounded-full bg-white/15 font-heading text-caption font-bold">
                                            M
                                        </span>
                                        <div>
                                            <p className="font-heading text-body font-semibold leading-tight">
                                                Madadly Assistant
                                            </p>
                                            <p className="flex items-center gap-1.5 text-[11px] text-white/75">
                                                <span className="size-1.5 rounded-full bg-[#6ee7a8]" />
                                                Online
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="min-h-[210px] space-y-3 bg-canvas/70 p-3.5">
                                    {step >= 1 && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-brand px-3.5 py-2.5 text-caption text-white"
                                        >
                                            Do you deliver to Lahore, and how long does it take?
                                        </motion.div>
                                    )}

                                    <AnimatePresence>
                                        {step === 2 && (
                                            <motion.div
                                                key="typing"
                                                initial={{ opacity: 0, y: 6 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, transition: { duration: 0.12 } }}
                                            >
                                                <TypingDots />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {step >= 3 && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="max-w-[90%]"
                                        >
                                            <div className="rounded-2xl rounded-bl-sm border border-line bg-surface px-3.5 py-2.5 text-caption text-ink">
                                                Yes, we deliver to Lahore in 2 to 3 working days.
                                                Orders over Rs. 5,000 ship free.
                                            </div>
                                            {step >= 4 && (
                                                <motion.span
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-ai-soft px-2.5 py-1 text-[11px] text-ai-ink"
                                                >
                                                    <Sparkles className="size-3 text-ai" />
                                                    Answered from Shipping policy
                                                </motion.span>
                                            )}
                                        </motion.div>
                                    )}
                                </div>

                                <div className="flex items-center justify-between border-t border-line px-3.5 py-2.5">
                                    <span className="text-caption text-ink-3">Ask me anything...</span>
                                    <span className="grid size-7 place-items-center rounded-lg bg-brand text-white">
                                        <ArrowUp className="size-3.5" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute -left-5 top-24 hidden items-center gap-2 rounded-control border border-line bg-surface px-3 py-2 shadow-pop md:flex"
                    >
                        <span className="grid size-7 place-items-center rounded-lg bg-ai-soft text-ai">
                            <Zap className="size-4" />
                        </span>
                        <span className="text-caption font-medium text-ink">Replies in seconds</span>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                        className="absolute -bottom-4 left-10 hidden items-center gap-2 rounded-control border border-line bg-surface px-3 py-2 shadow-pop md:flex"
                    >
                        <span className="grid size-7 place-items-center rounded-lg bg-success-soft text-success">
                            <Clock className="size-4" />
                        </span>
                        <span className="text-caption font-medium text-ink">Available 24/7</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection