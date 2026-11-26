'use client'

import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

const CTASection = ({ handleLogin }: { handleLogin: () => void }) => {
    return (
        <section className="px-4 py-20 sm:px-6 md:py-24">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="relative mx-auto flex max-w-6xl flex-col gap-8 overflow-hidden rounded-card bg-brand px-6 py-12 text-white sm:px-12 md:flex-row md:items-center md:justify-between"
            >
                <div aria-hidden className="absolute -right-24 -top-24 size-72 rounded-full border border-white/10" />
                <div aria-hidden className="absolute -right-12 -top-12 size-48 rounded-full border border-white/10" />

                <div className="relative max-w-xl">
                    <h2 className="font-heading text-3xl font-bold tracking-tight">
                        Ready to transform your customer support?
                    </h2>
                    <p className="mt-3 leading-7 text-brand-soft/85">
                        Give your customers instant answers with an AI assistant
                        that understands your business.
                    </p>
                </div>

                <button
                    onClick={handleLogin}
                    className="group relative inline-flex h-12 shrink-0 items-center gap-2 rounded-control bg-white px-6 font-medium text-brand transition hover:bg-brand-soft active:scale-[0.98]"
                >
                    Get Started
                    <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
                </button>
            </motion.div>
        </section>
    )
}

export default CTASection