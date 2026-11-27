// 'use client'

// import { motion } from 'motion/react'
// import { useRouter } from 'next/navigation'
// import React, { useState } from 'react'

// const EmbedPage = ({ ownerId }: { ownerId: string }) => {

//     const navigate = useRouter()
//     const [copied, setCopied] = useState(false)

//     const embedCode = `<script 
//         src='${process.env.NEXT_PUBLIC_APP_URL}/chatBot.js'
//         data-owner-id='${ownerId}'>
//     </script>`

//     const copyCode = () => {
//         navigator.clipboard.writeText(embedCode)
//         setCopied(true)
//         setTimeout(() => setCopied(false), 2000);
//     }
//     return (
//         <div className='min-h-screen bg-zinc-50 text-zinc-900'>
//             <div className='sticky top-0 z-40 bg-white border-b border-zinc-200'>
//                 <div className='max-w-7xl mx-auto px-6 h-16 flex items-center justify-between'>
//                     <div className='text-lg font-semibold cursor-pointer' onClick={() => navigate.push('/')}>Madadly</div>
//                     <button onClick={() => navigate.push('/dashboard')} className='px-4 py-2 rounded-lg border border-zinc-300 text-sm hover:bg-zinc-100 transition'>Back to Dashboard</button>
//                 </div>
//             </div>

//             <div className=' flex justify-center px-4 py-14'>
//                 <motion.div
//                     initial={{ opacity: 0, y: 24 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5 }}
//                     className=" w-full max-w-4xl bg-white rounded-2xl shadow-xl p-10"
//                 >
//                     <h1 className=' text-2xl font-semibold mb-2'>Embed ChatBot</h1>
//                     <p>Copy and paste this code before <code>&It;/body&gt;</code></p>
//                     <div className=' relative bg-zinc-900 text-zinc-100 rounded-xl p-5 text-sm font-mono mb-10'>
//                         <pre className=' overflow-x-auto'>{embedCode}</pre>
//                         <button className='absolute top-3 right-3 bg-white text-zinc-900 text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-zinc-200 transition' onClick={copyCode}>
//                             {copied ? "Copied ✓" : "Copy"}
//                         </button>
//                     </div>

//                     <ol className='space-y-3 text-sm text-zinc-600 list-decimal list-inside'>
//                         <li>Copy the embed script</li>
//                         <li>Paste it before the closing body tag</li>
//                         <li>Reload your website</li>
//                     </ol>

//                     <div className='mt-14'>
//                         <h1 className='text-lg font-medium mb-2'>Live Preview</h1>
//                         <p className='text-sm text-zinc-500 mb-6'>This is how the chatbot will appear on your website</p>

//                         <div className='rounded-xl border border-zinc-300 bg-white shadow-md overflow-hidden'>
//                             <div className=' flex items-center gap-2 px-4 h-9 bg-zinc-100 border-b border-zinc-200'>
//                                 <span className='w-2.5 h-2.5 rounded-full bg-red-400' />
//                                 <span className='w-2.5 h-2.5 rounded-full bg-yellow-400' />
//                                 <span className='w-2.5 h-2.5 rounded-full bg-green-400' />
//                                 <span className=' ml-4 text-xs text-zinc-500' >Your-website.com</span>
//                             </div>

//                             <div className=' relative h-64 sm:h-72 p-6 text-zinc-400 text-sm'>
//                                 Your Website goes here

//                                 <div className='absolute bottom-24 right-6 w-64 bg-white rounded-xl shadow-xl border border-zinc-200 overflow-hidden'>
//                                     <div className='bg-black text-white text-xs px-3 py-2 flex justify-between items-center'>
//                                         <span>Customer Support</span>
//                                         <span>✕</span>
//                                     </div>

//                                     <div className='p-3 space-y-2 bg-zinc-50'>
//                                         <div className='bg-zinc-200 text-zinc-800 text-xs px-3 py-2 rounded-lg w-fit'>
//                                             hi! how can I help you?
//                                         </div>
//                                         <div className='bg-black text-white text-xs px-3 py-2 rounded-lg ml-auto w-fit'>
//                                             What is the return policy?
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <motion.div
//                                     animate={{ y: [0, -8, 0] }}
//                                     transition={{ repeat: Infinity, duration: 3 }}
//                                     className=" absolute bottom-6 right-6 w-14 h-14 rounded-full bg-black text-white flex items-center justify-center shadow-2xl cursor-pointer "
//                                 >
//                                     💬
//                                 </motion.div>


//                             </div>
//                         </div>

//                     </div>

//                 </motion.div>
//             </div>
//         </div>
//     )
// }

// export default EmbedPage






'use client'

import { AnimatePresence, motion, type Variants } from 'motion/react'
import { ArrowLeft, Check, Copy, MessageCircle, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } }
}

const item: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

const EmbedPage = ({ ownerId }: { ownerId: string }) => {

    const navigate = useRouter()
    const [copied, setCopied] = useState(false)

    const embedCode = `<script 
        src='${process.env.NEXT_PUBLIC_APP_URL}/chatBot.js'
        data-owner-id='${ownerId}'>
</script>`

    const copyCode = () => {
        navigator.clipboard.writeText(embedCode)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000);
    }

    const steps = [
        { title: 'Copy the embed script', body: null },
        {
            title: 'Paste it before the closing body tag',
            body: (
                <code className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-caption text-ink">
                    &lt;/body&gt;
                </code>
            )
        },
        { title: 'Reload your website', body: null }
    ]

    return (
        <div className='min-h-screen bg-canvas text-ink'>

            {/* Navbar */}
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className='sticky top-0 z-40 border-b border-line bg-canvas/90 backdrop-blur-md'
            >
                <div className='mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6'>
                    <div
                        className='group flex cursor-pointer items-center gap-2.5'
                        onClick={() => navigate.push('/')}
                    >
                        <span className='grid size-8 place-items-center rounded-control bg-brand font-heading text-body font-bold text-white transition-transform duration-300 group-hover:-rotate-6'>
                            M
                        </span>
                        <span className='font-heading text-lg font-bold tracking-tight'>Madadly</span>
                    </div>

                    <button
                        onClick={() => navigate.push('/dashboard')}
                        className='group inline-flex h-9 items-center gap-2 rounded-control border border-line bg-surface px-3.5 text-caption font-medium text-ink shadow-card transition hover:bg-muted active:scale-[0.98]'
                    >
                        <ArrowLeft className='size-4 transition-transform duration-200 group-hover:-translate-x-0.5' aria-hidden />
                        Back to Dashboard
                    </button>
                </div>
            </motion.div>

            <main className='mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6'>
                <motion.div variants={container} initial='hidden' animate='show'>

                    {/* Heading */}
                    <motion.div variants={item} className='max-w-2xl'>
                        <h1 className='font-heading text-title font-bold tracking-tight sm:text-3xl'>Embed ChatBot</h1>
                        <p className='mt-2 text-ink-2'>
                            Copy and paste this code before{' '}
                            <code className='rounded-md bg-muted px-1.5 py-0.5 font-mono text-caption text-ink'>
                                &lt;/body&gt;
                            </code>
                        </p>
                    </motion.div>

                    <div className='mt-8 grid items-start gap-8 lg:grid-cols-[1fr_1fr]'>

                        {/* Steps + code */}
                        <motion.div variants={item}>
                            <ol className='space-y-8'>
                                {steps.map((s, i) => (
                                    <li key={s.title} className='relative pl-12'>
                                        <span className='absolute left-0 top-0 grid size-8 place-items-center rounded-full bg-brand text-caption font-semibold text-white'>
                                            {i + 1}
                                        </span>
                                        {i < steps.length - 1 && (
                                            <motion.span
                                                aria-hidden
                                                initial={{ scaleY: 0 }}
                                                animate={{ scaleY: 1 }}
                                                transition={{ duration: 0.5, delay: 0.5 + i * 0.2 }}
                                                className='absolute -bottom-8 left-4 top-9 w-px origin-top bg-line'
                                            />
                                        )}

                                        <h2 className='font-heading font-semibold leading-8'>{s.title}</h2>
                                        {s.body && <div className='mt-1'>{s.body}</div>}

                                        {i === 0 && (
                                            <div className='mt-3 overflow-hidden rounded-card border border-[#243332] bg-[#16201f] shadow-card'>
                                                <div className='flex items-center justify-between border-b border-white/10 px-4 py-2.5'>
                                                    <span className='font-mono text-[11px] uppercase tracking-wide text-[#8fb1ab]'>
                                                        html
                                                    </span>
                                                    <button
                                                        className='inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-2.5 py-1.5 text-caption font-medium text-white transition hover:bg-white/20 active:scale-[0.97]'
                                                        onClick={copyCode}
                                                    >
                                                        <AnimatePresence mode='wait' initial={false}>
                                                            <motion.span
                                                                key={copied ? 'copied' : 'copy'}
                                                                initial={{ opacity: 0, scale: 0.8 }}
                                                                animate={{ opacity: 1, scale: 1 }}
                                                                exit={{ opacity: 0, scale: 0.8 }}
                                                                transition={{ duration: 0.12 }}
                                                                className='flex items-center gap-1.5'
                                                            >
                                                                {copied ? (
                                                                    <Check className='size-3.5 text-[#6ee7a8]' aria-hidden />
                                                                ) : (
                                                                    <Copy className='size-3.5' aria-hidden />
                                                                )}
                                                                {copied ? 'Copied' : 'Copy'}
                                                            </motion.span>
                                                        </AnimatePresence>
                                                    </button>
                                                </div>
                                                <pre className='overflow-x-auto p-4 font-mono text-[13px] leading-6 text-[#cfe5e1]'>{embedCode}</pre>
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ol>
                        </motion.div>

                        {/* Live preview */}
                        <motion.div variants={item} className='lg:sticky lg:top-24'>
                            <h2 className='font-heading text-section font-semibold'>Live Preview</h2>
                            <p className='mb-4 mt-1 text-caption text-ink-2'>
                                This is how the chatbot will appear on your website
                            </p>

                            <div className='overflow-hidden rounded-card border border-line bg-surface shadow-pop'>
                                <div className='flex h-10 items-center gap-2 border-b border-line bg-muted/60 px-4'>
                                    <span className='size-2.5 rounded-full bg-line' />
                                    <span className='size-2.5 rounded-full bg-line' />
                                    <span className='size-2.5 rounded-full bg-line' />
                                    <span className='ml-3 rounded-md bg-surface px-3 py-0.5 text-caption text-ink-3'>
                                        Your-website.com
                                    </span>
                                </div>

                                <div className='relative h-[440px] p-5'>
                                    <p className='text-caption text-ink-3'>Your Website goes here</p>
                                    <div aria-hidden className='mt-4 space-y-3'>
                                        <div className='h-20 rounded-control bg-muted/70' />
                                        <div className='h-3 w-2/3 rounded bg-muted' />
                                        <div className='h-3 w-1/2 rounded bg-muted' />
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 16, scale: 0.96 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.7, ease: 'easeOut' }}
                                        className='absolute bottom-24 right-5 w-[min(272px,calc(100%-2.5rem))] origin-bottom-right overflow-hidden rounded-card border border-line bg-surface shadow-pop'
                                    >
                                        <div className='flex items-center justify-between bg-brand px-3.5 py-2.5 text-white'>
                                            <span className='font-heading text-caption font-semibold'>Customer Support</span>
                                            <X className='size-3.5 text-white/70' aria-hidden />
                                        </div>

                                        <div className='min-h-[130px] space-y-2 bg-canvas/70 p-3'>
                                            <motion.div
                                                initial={{ opacity: 0, y: 6 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 1.2 }}
                                                className='w-fit rounded-2xl rounded-bl-sm border border-line bg-surface px-3 py-2 text-caption text-ink'
                                            >
                                                hi! how can I help you?
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0, y: 6 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 2 }}
                                                className='ml-auto w-fit rounded-2xl rounded-br-sm bg-brand px-3 py-2 text-caption text-white'
                                            >
                                                What is the return policy?
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 2.8 }}
                                                className='flex w-fit items-center gap-1 rounded-2xl rounded-bl-sm border border-line bg-surface px-3 py-2.5'
                                            >
                                                {[0, 1, 2].map((d) => (
                                                    <motion.span
                                                        key={d}
                                                        className='size-1.5 rounded-full bg-ink-3'
                                                        animate={{ y: [0, -3, 0] }}
                                                        transition={{ duration: 0.8, repeat: Infinity, delay: d * 0.12 }}
                                                    />
                                                ))}
                                            </motion.div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        animate={{ y: [0, -8, 0] }}
                                        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                                        className='absolute bottom-5 right-5 grid size-14 cursor-pointer place-items-center rounded-full bg-brand text-white shadow-pop'
                                    >
                                        <MessageCircle className='size-6' aria-hidden />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </motion.div>
            </main>
        </div>
    )
}

export default EmbedPage