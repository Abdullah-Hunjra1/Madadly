
'use client'

import { motion } from 'motion/react'

const HeroSection = ({
    email,
    handleLogin,
    handleLogout
}: {
    email: string
    handleLogin: () => void
    handleLogout: () => void
}) => {
    return (
        <section className="relative pt-40 pb-28 px-6 overflow-hidden">
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-violet-100/60 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700">
                        <span className="w-2 h-2 rounded-full bg-violet-600" />
                        AI-powered customer support
                    </div>

                    <h1 className="mt-7 text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight">
                        Your business.
                        <span className="block text-violet-600">Your AI assistant.</span>
                    </h1>

                    <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-600">
                        Create intelligent AI assistants trained on your business
                        knowledge. Add them to your website and give customers
                        instant answers, anytime.
                    </p>

                    <div className="mt-9 flex flex-wrap gap-4">
                        <button
                            onClick={() => {
                                if (email) {
                                    window.location.href = '/dashboard'
                                } else {
                                    handleLogin()
                                }
                            }}
                            className="rounded-xl bg-violet-600 px-7 py-3.5 text-white font-semibold shadow-lg shadow-violet-200 hover:bg-violet-700 transition"
                        >
                            {email ? 'Go to Dashboard' : 'Get Started'}
                            <span className="ml-2">→</span>
                        </button>

                        <a
                            href="#features"
                            className="rounded-xl border border-zinc-300 px-7 py-3.5 font-semibold hover:bg-zinc-50 transition"
                        >
                            Explore Features
                        </a>
                    </div>

                    <p className="mt-6 text-sm text-zinc-500">
                        Built for businesses that want to support customers better.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-violet-200 to-indigo-100 blur-2xl opacity-60" />

                    <div className="relative rounded-3xl border border-zinc-200 bg-white shadow-2xl shadow-violet-100/60 overflow-hidden">
                        <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-5">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-violet-600 text-white flex items-center justify-center font-bold">
                                    M
                                </div>
                                <div>
                                    <p className="font-semibold">Madadly Assistant</p>
                                    <p className="text-xs text-emerald-600">● Online</p>
                                </div>
                            </div>
                            <span className="text-xs text-zinc-400">AI Support</span>
                        </div>

                        <div className="bg-zinc-50 p-6 md:p-8 min-h-[340px] space-y-6">
                            <div className="text-center">
                                <span className="text-xs text-zinc-400">TODAY</span>
                            </div>

                            <div className="flex justify-start">
                                <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white border border-zinc-200 p-4 shadow-sm">
                                    <p className="text-xs font-semibold text-violet-600 mb-2">Madadly Assistant</p>
                                    <p className="text-sm leading-6 text-zinc-700">
                                        Hi there! 👋 Welcome. How can I help you today?
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-violet-600 p-4 text-white">
                                    <p className="text-sm leading-6">
                                        I'd like to know more about your services.
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-start">
                                <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white border border-zinc-200 p-4 shadow-sm">
                                    <p className="text-xs font-semibold text-violet-600 mb-2">Madadly Assistant</p>
                                    <p className="text-sm leading-6 text-zinc-700">
                                        Absolutely! I can help you explore our services,
                                        pricing, and everything else you need to know.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 border-t border-zinc-100">
                            <div className="flex items-center justify-between rounded-xl border border-zinc-200 px-4 py-3">
                                <span className="text-sm text-zinc-400">Ask me anything...</span>
                                <span className="rounded-lg bg-violet-600 px-3 py-2 text-white">↑</span>
                            </div>
                            <p className="text-center text-[10px] text-zinc-400 mt-3">
                                Powered by Madadly AI
                            </p>
                        </div>
                    </div>

                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute -bottom-6 -left-6 hidden md:block rounded-2xl bg-white border border-zinc-200 shadow-xl p-4"
                    >
                        <p className="text-xs text-zinc-500">Customer support</p>
                        <p className="font-semibold text-emerald-600 mt-1">Available 24/7</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection
