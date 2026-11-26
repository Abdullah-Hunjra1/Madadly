'use client'

import { AnimatePresence, motion } from 'motion/react'
import { Plus } from 'lucide-react'
import { useState } from 'react'

const faqs = [
    {
        q: 'What is Madadly?',
        a: 'Madadly lets you create an AI assistant for your business. It answers customer questions on your website using the information you give it.'
    },
    {
        q: 'How does the assistant learn about my business?',
        a: 'You add your business details and knowledge base content from the dashboard. The assistant uses that information to answer your customers.'
    },
    {
        q: 'How do I add the assistant to my website?',
        a: 'Madadly provides an embeddable chat widget. Add it to your site and visitors can start chatting right away.'
    },
    {
        q: 'Can I update my business information later?',
        a: 'Yes. You can edit your business settings and knowledge base from the dashboard whenever your information changes.'
    },
    {
        q: 'Do I need an account to get started?',
        a: 'Yes. Sign in to access your dashboard, where you set up and manage your assistant.'
    }
]

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section id="faq" className="scroll-mt-16 px-4 py-20 sm:px-6 md:py-24">
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="font-heading text-3xl font-bold tracking-tight text-ink">
                        Questions, answered
                    </h2>
                    <p className="mt-3 max-w-sm leading-7 text-ink-2">
                        The basics of how Madadly works, before you sign in.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.55, delay: 0.1 }}
                    className="divide-y divide-line rounded-card border border-line bg-surface shadow-card"
                >
                    {faqs.map((f, i) => {
                        const isOpen = openIndex === i
                        return (
                            <div key={f.q}>
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-panel-${i}`}
                                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-muted/50 sm:px-6"
                                >
                                    <span className="font-heading font-semibold text-ink">{f.q}</span>
                                    <Plus
                                        className={`size-5 shrink-0 text-brand transition-transform duration-300 ${
                                            isOpen ? 'rotate-45' : ''
                                        }`}
                                        aria-hidden
                                    />
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            id={`faq-panel-${i}`}
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25, ease: 'easeOut' }}
                                            className="overflow-hidden"
                                        >
                                            <p className="px-5 pb-5 leading-7 text-ink-2 sm:px-6">{f.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export default FAQ