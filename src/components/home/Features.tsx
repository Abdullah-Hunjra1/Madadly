'use client'

import { motion, type Variants } from 'motion/react'
import { BookOpen, Check, Code2, FileText, LayoutDashboard, Sparkles, type LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { Badge } from '@/components/ui/Badge'

const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } }
}

const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
}

const FeatureCard = ({
    icon: Icon,
    ai,
    title,
    description,
    className,
    children
}: {
    icon: LucideIcon
    ai?: boolean
    title: string
    description: string
    className?: string
    children: ReactNode
}) => (
    <motion.div
        variants={item}
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        className={`group flex flex-col rounded-card border border-line bg-surface p-6 shadow-card transition-[border-color,box-shadow] duration-300 hover:border-brand-mid/40 hover:shadow-pop sm:p-7 ${className ?? ''}`}
    >
        <span
            className={`grid size-10 place-items-center rounded-control ${
                ai ? 'bg-ai-soft text-ai' : 'bg-brand-soft text-brand'
            }`}
        >
            <Icon className="size-5" aria-hidden />
        </span>
        <h3 className="mt-5 font-heading text-section font-semibold text-ink">{title}</h3>
        <p className="mt-2 max-w-md leading-7 text-ink-2">{description}</p>
        <div className="mt-6 flex-1 content-end">{children}</div>
    </motion.div>
)

const docs = ['Return policy', 'Pricing and plans', 'Shipping FAQ']
const modules = ['Business settings', 'Knowledge base', 'Chat widget']

const Features = () => {
    return (
        <section id="features" className="scroll-mt-16 border-t border-line px-4 py-20 sm:px-6 md:py-24">
            <div className="mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl"
                >
                    <h2 className="font-heading text-3xl font-bold tracking-tight text-ink">
                        Everything your AI support needs
                    </h2>
                    <p className="mt-3 leading-7 text-ink-2">
                        Give your customers a better support experience with
                        intelligent assistants built around your business.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-80px' }}
                    className="mt-12 grid gap-5 lg:grid-cols-6"
                >
                    <FeatureCard
                        icon={Sparkles}
                        ai
                        title="AI-Powered Responses"
                        description="Give customers helpful, relevant answers using an assistant that understands your business information."
                        className="lg:col-span-4"
                    >
                        <div className="space-y-2.5 rounded-control bg-canvas p-4">
                            <div className="ml-auto w-fit max-w-[80%] rounded-2xl rounded-br-sm bg-brand px-3.5 py-2 text-caption text-white">
                                What is your return policy?
                            </div>
                            <div className="w-fit max-w-[85%] rounded-2xl rounded-bl-sm border border-line bg-surface px-3.5 py-2 text-caption text-ink">
                                Returns are free within 14 days of delivery.
                            </div>
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-ai-soft px-2.5 py-1 text-[11px] text-ai-ink">
                                <Sparkles className="size-3 text-ai" aria-hidden />
                                Answered from Return policy
                            </span>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        icon={BookOpen}
                        title="Your Business Knowledge"
                        description="Build assistants around your own business content so customers get information that matters."
                        className="lg:col-span-2"
                    >
                        <ul className="space-y-2">
                            {docs.map((d) => (
                                <li
                                    key={d}
                                    className="flex items-center gap-2.5 rounded-control border border-line bg-canvas px-3 py-2 text-caption text-ink"
                                >
                                    <FileText className="size-4 text-ink-3" aria-hidden />
                                    <span className="flex-1">{d}</span>
                                    <Check className="size-4 text-success" aria-hidden />
                                </li>
                            ))}
                        </ul>
                    </FeatureCard>

                    <FeatureCard
                        icon={Code2}
                        title="Website Integration"
                        description="Bring your AI assistant directly to your website with an embeddable chat experience."
                        className="lg:col-span-2"
                    >
                        <pre className="overflow-x-auto rounded-control bg-[#16201f] p-4 font-mono text-[12px] leading-6 text-[#cfe5e1]">
                            <code>
                                {'<script\n  src="/chatBot.js"\n  defer>\n</script>'}
                            </code>
                        </pre>
                    </FeatureCard>

                    <FeatureCard
                        icon={LayoutDashboard}
                        title="Centralized Management"
                        description="Manage your AI assistant and business support experience from one platform."
                        className="lg:col-span-4"
                    >
                        <ul className="divide-y divide-line rounded-control border border-line bg-canvas">
                            {modules.map((m) => (
                                <li key={m} className="flex items-center justify-between px-4 py-3 text-caption text-ink">
                                    {m}
                                    <Badge tone="success" dot>
                                        Active
                                    </Badge>
                                </li>
                            ))}
                        </ul>
                    </FeatureCard>
                </motion.div>
            </div>
        </section>
    )
}

export default Features;