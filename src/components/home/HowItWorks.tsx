'use client'

import { motion, type Variants } from 'motion/react'
import { BookOpen, Bot, Code2 } from 'lucide-react'

const steps = [
    {
        icon: Bot,
        title: 'Create your assistant',
        description: 'Set up an AI assistant for your business.'
    },
    {
        icon: BookOpen,
        title: 'Connect your knowledge',
        description: 'Provide the business information your assistant needs.'
    },
    {
        icon: Code2,
        title: 'Add it to your website',
        description: 'Integrate the chat widget and start assisting visitors.'
    }
]

const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.18 } }
}

const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
}

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="scroll-mt-16 border-y border-line bg-surface px-4 py-20 sm:px-6 md:py-24">
            <div className="mx-auto max-w-6xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5 }}
                    className="font-heading text-3xl font-bold tracking-tight text-ink"
                >
                    Get started in three steps
                </motion.h2>

                <motion.ol
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-80px' }}
                    className="mt-12 grid gap-6 md:grid-cols-3"
                >
                    {steps.map(({ icon: Icon, title, description }, index) => (
                        <motion.li
                            key={title}
                            variants={item}
                            className="relative rounded-card border border-line bg-canvas p-6"
                        >
                            <div className="flex items-center justify-between">
                                <span className="grid size-8 place-items-center rounded-full bg-brand text-caption font-semibold text-white">
                                    {index + 1}
                                </span>
                                <span className="grid size-9 place-items-center rounded-control bg-surface text-brand-mid shadow-card">
                                    <Icon className="size-[18px]" aria-hidden />
                                </span>
                            </div>
                            <h3 className="mt-6 font-heading text-section font-semibold text-ink">{title}</h3>
                            <p className="mt-2 leading-7 text-ink-2">{description}</p>

                            {index < steps.length - 1 && (
                                <motion.span
                                    aria-hidden
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.5 + index * 0.25 }}
                                    className="absolute -right-6 top-10 hidden h-px w-6 origin-left bg-brand-mid md:block"
                                />
                            )}
                        </motion.li>
                    ))}
                </motion.ol>
            </div>
        </section>
    )
}

export default HowItWorks