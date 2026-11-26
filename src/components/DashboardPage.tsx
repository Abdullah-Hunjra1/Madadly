// 'use client'

// import axios from "axios";
// import { motion } from "motion/react";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// const DashboardPage = ({ ownerId }: { ownerId: string }) => {

//     const [businessName, setBusinessName] = useState('');
//     const [supportEmail, setSupportEmail] = useState('');
//     const [knowledge, setKnowledge] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [saved, setSaved] = useState(false);

//     const handleSettings = async () => {
//         setLoading(true);
//         try {
//             await axios.post('/api/settings', {
//                 ownerId,
//                 businessName,
//                 supportEmail,
//                 knowledge
//             });

//             setLoading(false);
//             setSaved(true);
//             setTimeout(() => setSaved(false), 3000);

//         } catch (error) {
//             console.error('Error saving settings:', error);
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         if (ownerId) {
//             const handleGetDetails = async () => {
//                 try {
//                     const result = await axios.post('/api/settings/get', {
//                         ownerId,
//                     });

//                     setBusinessName(result.data.businessName);
//                     setSupportEmail(result.data.supportEmail);
//                     setKnowledge(result.data.knowledge);

//                 } catch (error) {
//                     console.error('Error fetching settings:', error);
//                 }
//             };

//             handleGetDetails();
//         }
//     }, [ownerId]);

//     return (
//         <div className="min-h-screen bg-[#F8FAFA] text-[#272343]">

//             {/* Navbar */}
//             <motion.nav
//                 initial={{ y: -20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.4 }}
//                 className="fixed top-0 inset-x-0 z-50 border-b border-[#D1E8E7] bg-white/90 backdrop-blur-xl"
//             >
//                 <div className="max-w-7xl mx-auto h-[76px] px-5 sm:px-8 flex items-center justify-between">

//                     <Link href="/" className="flex items-center gap-3">
//                         <div className="w-10 h-10 rounded-xl bg-[#272343] flex items-center justify-center text-[#BAE8E8] font-bold text-xl">
//                             M
//                         </div>

//                         <span className="text-xl font-bold tracking-tight">
//                             Madadly<span className="text-[#6B61A8]">.</span>
//                         </span>
//                     </Link>

//                     <Link
//                         href="/embed"
//                         className="px-4 py-2.5 rounded-xl bg-[#272343] text-white text-sm font-medium hover:bg-[#39345D] transition-colors"
//                     >
//                         Embed chatbot
//                     </Link>

//                 </div>
//             </motion.nav>

//             {/* Main Content */}
//             <main className="max-w-5xl mx-auto px-5 sm:px-8 pt-28 pb-16">

//                 <motion.div
//                     initial={{ y: 20, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ duration: 0.5 }}
//                     className="space-y-8"
//                 >

//                     {/* Page Heading */}
//                     <div className="space-y-2">
//                         <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E3F6F5] text-[#272343] text-xs font-semibold">
//                             <span className="w-2 h-2 rounded-full bg-emerald-500" />
//                             Workspace
//                         </div>

//                         <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
//                             Dashboard
//                         </h1>

//                         <p className="text-[#52526B] text-sm sm:text-base">
//                             Welcome to your workspace. Manage your business information and AI assistant knowledge here.
//                         </p>
//                     </div>

//                     {/* Business Details */}
//                     <section className="bg-white border border-[#D1E8E7] rounded-2xl p-5 sm:p-7 shadow-sm">

//                         <div className="flex items-start gap-4 mb-7">
//                             <div className="w-11 h-11 rounded-xl bg-[#E3F6F5] flex items-center justify-center shrink-0">
//                                 <svg
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     strokeWidth="1.7"
//                                     className="w-5 h-5 text-[#272343]"
//                                 >
//                                     <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4M9 9v.01M9 12v.01M9 15v.01M9 18v.01M15 13v.01M15 16v.01M15 19v.01" strokeLinecap="round" strokeLinejoin="round" />
//                                 </svg>
//                             </div>

//                             <div>
//                                 <h2 className="text-lg font-bold">Business Details</h2>
//                                 <p className="text-sm text-[#77778D] mt-1">
//                                     Basic information about your business.
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

//                             <div className="space-y-2">
//                                 <label className="block text-sm font-semibold text-[#272343]">
//                                     Business Name
//                                 </label>

//                                 <input
//                                     type="text"
//                                     placeholder="e.g. Acme Store"
//                                     value={businessName}
//                                     onChange={(e) => setBusinessName(e.target.value)}
//                                     className="w-full h-12 px-4 rounded-xl border border-[#D1E8E7] bg-[#FCFEFE] text-sm text-[#272343] placeholder:text-[#A0A0B2] outline-none transition-all focus:border-[#272343] focus:ring-2 focus:ring-[#BAE8E8]/60"
//                                 />
//                             </div>

//                             <div className="space-y-2">
//                                 <label className="block text-sm font-semibold text-[#272343]">
//                                     Support Email
//                                 </label>

//                                 <input
//                                     type="text"
//                                     placeholder="support@example.com"
//                                     value={supportEmail}
//                                     onChange={(e) => setSupportEmail(e.target.value)}
//                                     className="w-full h-12 px-4 rounded-xl border border-[#D1E8E7] bg-[#FCFEFE] text-sm text-[#272343] placeholder:text-[#A0A0B2] outline-none transition-all focus:border-[#272343] focus:ring-2 focus:ring-[#BAE8E8]/60"
//                                 />
//                             </div>

//                         </div>
//                     </section>

//                     {/* Knowledge Section */}
//                     <section className="bg-white border border-[#D1E8E7] rounded-2xl p-5 sm:p-7 shadow-sm">

//                         <div className="flex items-start gap-4 mb-6">
//                             <div className="w-11 h-11 rounded-xl bg-[#E3F6F5] flex items-center justify-center shrink-0">
//                                 <svg
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     strokeWidth="1.7"
//                                     className="w-5 h-5 text-[#272343]"
//                                 >
//                                     <path d="M12 7v14m0-14C10.5 5.5 8.5 5 5 5H3v14h2c3.5 0 5.5.5 7 2m0-14c1.5-1.5 3.5-2 7-2h2v14h-2c-3.5 0-5.5.5-7 2" strokeLinecap="round" strokeLinejoin="round" />
//                                 </svg>
//                             </div>

//                             <div>
//                                 <h2 className="text-lg font-bold">Knowledge Base</h2>
//                                 <p className="text-sm text-[#77778D] mt-1">
//                                     Give your AI assistant the information it needs to help your customers.
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="space-y-3">

//                             <label className="block text-sm font-semibold text-[#272343]">
//                                 Business Knowledge
//                             </label>

//                             <textarea
//                                 placeholder={`Example:

// What is your return policy?
// Delivery Information
// Shipping Rates
// Cash on Delivery available

// Add your FAQs, policies, services, and other useful business information here...`}
//                                 value={knowledge}
//                                 onChange={(e) => setKnowledge(e.target.value)}
//                                 rows={10}
//                                 className="w-full min-h-[240px] p-4 rounded-xl border border-[#D1E8E7] bg-[#FCFEFE] text-sm leading-7 text-[#272343] placeholder:text-[#A0A0B2] outline-none resize-y transition-all focus:border-[#272343] focus:ring-2 focus:ring-[#BAE8E8]/60"
//                             />

//                             <p className="text-xs text-[#85859A]">
//                                 Your assistant will use this information to answer customer questions.
//                             </p>

//                         </div>
//                     </section>

//                     {/* Save Actions */}
//                     <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4">

//                         <p className="text-xs text-[#85859A]">
//                             Keep your business information up to date.
//                         </p>

//                         <div className="flex items-center gap-4">

//                             {saved && (
//                                 <motion.span
//                                     initial={{ opacity: 0, x: 10 }}
//                                     animate={{ opacity: 1, x: 0 }}
//                                     className="text-sm font-medium text-emerald-600"
//                                 >
//                                     Settings saved successfully!
//                                 </motion.span>
//                             )}

//                             <motion.button
//                                 whileHover={{ scale: 1.03 }}
//                                 whileTap={{ scale: 0.97 }}
//                                 disabled={loading}
//                                 onClick={handleSettings}
//                                 className="w-full sm:w-auto px-7 py-3 rounded-xl bg-[#272343] text-white text-sm font-semibold shadow-sm hover:bg-[#39345D] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
//                             >
//                                 {loading ? "Saving..." : "Save Changes"}
//                             </motion.button>

//                         </div>
//                     </div>

//                 </motion.div>
//             </main>
//         </div>
//     );
// };

// export default DashboardPage;












'use client'

import axios from "axios";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { BookOpen, Building2, Check, Code2, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Field, Input, Textarea } from "@/components/ui/Field";

const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } }
};

const item: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const DashboardPage = ({ ownerId }: { ownerId: string }) => {

    const [businessName, setBusinessName] = useState('');
    const [supportEmail, setSupportEmail] = useState('');
    const [knowledge, setKnowledge] = useState('');
    const [loading, setLoading] = useState(false);
    const [saved, setSaved] = useState(false);

    const handleSettings = async () => {
        setLoading(true);
        try {
            await axios.post('/api/settings', {
                ownerId,
                businessName,
                supportEmail,
                knowledge
            });

            setLoading(false);
            setSaved(true);
            setTimeout(() => setSaved(false), 3000);

        } catch (error) {
            console.error('Error saving settings:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (ownerId) {
            const handleGetDetails = async () => {
                try {
                    const result = await axios.post('/api/settings/get', {
                        ownerId,
                    });

                    setBusinessName(result.data.businessName);
                    setSupportEmail(result.data.supportEmail);
                    setKnowledge(result.data.knowledge);

                } catch (error) {
                    console.error('Error fetching settings:', error);
                }
            };

            handleGetDetails();
        }
    }, [ownerId]);

    // Display-only values derived from the existing state
    const name = (businessName ?? '').trim();
    const email = (supportEmail ?? '').trim();
    const knowledgeText = (knowledge ?? '').trim();
    const words = knowledgeText ? knowledgeText.split(/\s+/).length : 0;
    const lines = knowledgeText ? knowledgeText.split('\n').filter((l) => l.trim()).length : 0;

    const checklist = [
        { label: 'Business name', done: !!name },
        { label: 'Support email', done: !!email },
        { label: 'Knowledge base', done: !!knowledgeText }
    ];
    const doneCount = checklist.filter((c) => c.done).length;
    const percent = Math.round((doneCount / checklist.length) * 100);

    return (
        <div className="min-h-screen bg-canvas text-ink">

            {/* Navbar */}
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="fixed inset-x-0 top-0 z-50 border-b border-line bg-canvas/90 backdrop-blur-md"
            >
                <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">

                    <Link href="/" className="group flex items-center gap-2.5">
                        <span className="grid size-8 place-items-center rounded-control bg-brand font-heading text-body font-bold text-white transition-transform duration-300 group-hover:-rotate-6">
                            M
                        </span>
                        <span className="font-heading text-lg font-bold tracking-tight">
                            Madadly
                        </span>
                    </Link>

                    <Link
                        href="/embed"
                        className="inline-flex h-9 items-center gap-2 rounded-control bg-brand px-3.5 text-caption font-medium text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.14),0_1px_2px_rgb(15_92_84/0.3)] transition hover:bg-brand-hover active:scale-[0.98]"
                    >
                        <Code2 className="size-4" aria-hidden />
                        Embed chatbot
                    </Link>

                </div>
            </motion.nav>

            {/* Main Content */}
            <main className="mx-auto max-w-6xl px-4 pb-32 pt-24 sm:px-6">

                <motion.div variants={container} initial="hidden" animate="show">

                    {/* Page Heading */}
                    <motion.div variants={item} className="max-w-2xl">
                        <h1 className="font-heading text-title font-bold tracking-tight sm:text-3xl">
                            Dashboard
                        </h1>
                        <p className="mt-2 text-ink-2">
                            Welcome to your workspace. Manage your business information and AI assistant knowledge here.
                        </p>
                    </motion.div>

                    <div className="mt-8 grid items-start gap-6 lg:grid-cols-[1fr_340px]">

                        {/* Forms */}
                        <div className="space-y-6">

                            {/* Business Details */}
                            <motion.div variants={item}>
                                <Card className="p-5 sm:p-7">
                                    <div className="mb-6 flex items-start gap-4">
                                        <span className="grid size-11 shrink-0 place-items-center rounded-control bg-brand-soft text-brand">
                                            <Building2 className="size-5" aria-hidden />
                                        </span>
                                        <div>
                                            <h2 className="font-heading text-section font-semibold">Business Details</h2>
                                            <p className="mt-1 text-caption text-ink-2">
                                                Basic information about your business.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                        <Field label="Business Name" htmlFor="business-name">
                                            <Input
                                                id="business-name"
                                                type="text"
                                                placeholder="e.g. Acme Store"
                                                value={businessName}
                                                onChange={(e) => setBusinessName(e.target.value)}
                                            />
                                        </Field>

                                        <Field label="Support Email" htmlFor="support-email">
                                            <Input
                                                id="support-email"
                                                type="text"
                                                placeholder="support@example.com"
                                                value={supportEmail}
                                                onChange={(e) => setSupportEmail(e.target.value)}
                                            />
                                        </Field>
                                    </div>
                                </Card>
                            </motion.div>

                            {/* Knowledge Section */}
                            <motion.div variants={item}>
                                <Card className="p-5 sm:p-7">
                                    <div className="mb-6 flex items-start gap-4">
                                        <span className="grid size-11 shrink-0 place-items-center rounded-control bg-ai-soft text-ai">
                                            <BookOpen className="size-5" aria-hidden />
                                        </span>
                                        <div>
                                            <h2 className="font-heading text-section font-semibold">Knowledge Base</h2>
                                            <p className="mt-1 text-caption text-ink-2">
                                                Give your AI assistant the information it needs to help your customers.
                                            </p>
                                        </div>
                                    </div>

                                    <Field label="Business Knowledge" htmlFor="business-knowledge">
                                        <Textarea
                                            id="business-knowledge"
                                            placeholder={`Example:

What is your return policy?
Delivery Information
Shipping Rates
Cash on Delivery available

Add your FAQs, policies, services, and other useful business information here...`}
                                            value={knowledge}
                                            onChange={(e) => setKnowledge(e.target.value)}
                                            rows={10}
                                            className="min-h-[260px]"
                                        />
                                    </Field>

                                    <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-caption text-ink-2">
                                        <p>Your assistant will use this information to answer customer questions.</p>
                                        <p className="tabular-nums text-ink-3">
                                            {words} {words === 1 ? 'word' : 'words'} · {lines} {lines === 1 ? 'line' : 'lines'}
                                        </p>
                                    </div>
                                </Card>
                            </motion.div>
                        </div>

                        {/* Side panel */}
                        <motion.aside variants={item} className="space-y-6 lg:sticky lg:top-24">

                            {/* Setup progress */}
                            <Card className="p-5">
                                <div className="flex items-center justify-between">
                                    <h2 className="font-heading font-semibold">Setup progress</h2>
                                    <span className="text-caption font-medium tabular-nums text-brand">{percent}%</span>
                                </div>

                                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
                                    <motion.div
                                        className="h-full rounded-full bg-brand"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${percent}%` }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                    />
                                </div>

                                <ul className="mt-4 space-y-2.5">
                                    {checklist.map((c) => (
                                        <li key={c.label} className="flex items-center gap-2.5 text-body">
                                            <span
                                                className={`grid size-5 place-items-center rounded-full border transition-colors duration-300 ${
                                                    c.done ? 'border-brand bg-brand text-white' : 'border-line bg-surface text-transparent'
                                                }`}
                                            >
                                                <AnimatePresence initial={false}>
                                                    {c.done && (
                                                        <motion.span
                                                            initial={{ scale: 0 }}
                                                            animate={{ scale: 1 }}
                                                            exit={{ scale: 0 }}
                                                            transition={{ type: "spring", stiffness: 500, damping: 25 }}
                                                            className="grid place-items-center"
                                                        >
                                                            <Check className="size-3" strokeWidth={3} aria-hidden />
                                                        </motion.span>
                                                    )}
                                                </AnimatePresence>
                                            </span>
                                            <span className={c.done ? 'text-ink' : 'text-ink-2'}>{c.label}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>

                            {/* Live preview */}
                            <Card padded={false} className="overflow-hidden">
                                <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
                                    <h2 className="font-heading font-semibold">Assistant preview</h2>
                                    <span className="text-caption text-ink-3">Live</span>
                                </div>

                                <div className="bg-canvas/60 p-4">
                                    <div className="overflow-hidden rounded-card border border-line bg-surface shadow-card">
                                        <div className="flex items-center gap-2.5 bg-brand px-3.5 py-3 text-white">
                                            <span className="grid size-8 place-items-center rounded-full bg-white/15 font-heading text-caption font-bold">
                                                {(name[0] ?? 'M').toUpperCase()}
                                            </span>
                                            <div className="min-w-0">
                                                <p className="truncate font-heading text-body font-semibold leading-tight">
                                                    {name || 'Your business'}
                                                </p>
                                                <p className="flex items-center gap-1.5 text-[11px] text-white/75">
                                                    <span className="size-1.5 rounded-full bg-[#6ee7a8]" />
                                                    Online
                                                </p>
                                            </div>
                                        </div>

                                        <div className="space-y-2.5 p-3.5">
                                            <div className="w-fit max-w-[90%] rounded-2xl rounded-bl-sm border border-line bg-surface px-3.5 py-2.5 text-caption text-ink">
                                                Hi! Welcome{name ? ` to ${name}` : ''}. How can I help you today?
                                            </div>

                                            {knowledgeText ? (
                                                <span className="inline-flex items-center gap-1.5 rounded-full bg-ai-soft px-2.5 py-1 text-[11px] text-ai-ink">
                                                    <Sparkles className="size-3 text-ai" aria-hidden />
                                                    Answers from your knowledge base
                                                </span>
                                            ) : (
                                                <span className="inline-flex rounded-full bg-muted px-2.5 py-1 text-[11px] text-ink-2">
                                                    Add knowledge to teach your assistant
                                                </span>
                                            )}

                                            {email && (
                                                <p className="truncate text-[11px] text-ink-3">Support: {email}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </motion.aside>
                    </div>
                </motion.div>
            </main>

            {/* Save Actions */}
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface/90 backdrop-blur-md"
            >
                <div className="mx-auto flex max-w-6xl flex-col-reverse gap-3 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:px-6">

                    <p className="hidden text-caption text-ink-2 sm:block">
                        Keep your business information up to date.
                    </p>

                    <div className="flex items-center gap-4 sm:justify-end">

                        <AnimatePresence>
                            {saved && (
                                <motion.span
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 10 }}
                                    className="flex items-center gap-1.5 text-body font-medium text-success"
                                >
                                    <Check className="size-4" aria-hidden />
                                    Settings saved successfully!
                                </motion.span>
                            )}
                        </AnimatePresence>

                        <Button
                            loading={loading}
                            onClick={handleSettings}
                            className="w-full sm:w-auto"
                        >
                            {loading ? "Saving..." : "Save Changes"}
                        </Button>

                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default DashboardPage;
