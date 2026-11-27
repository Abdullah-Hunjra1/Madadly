// 'use client'

// import axios from "axios";
// import { AnimatePresence, motion, type Variants } from "motion/react";
// import { BookOpen, Building2, Check, Code2, Sparkles } from "lucide-react";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/Button";
// import { Card } from "@/components/ui/Card";
// import { Field, Input, Textarea } from "@/components/ui/Field";

// const container: Variants = {
//     hidden: {},
//     show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } }
// };

// const item: Variants = {
//     hidden: { opacity: 0, y: 18 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
// };

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

//     // Display-only values derived from the existing state
//     const name = (businessName ?? '').trim();
//     const email = (supportEmail ?? '').trim();
//     const knowledgeText = (knowledge ?? '').trim();
//     const words = knowledgeText ? knowledgeText.split(/\s+/).length : 0;
//     const lines = knowledgeText ? knowledgeText.split('\n').filter((l) => l.trim()).length : 0;

//     const checklist = [
//         { label: 'Business name', done: !!name },
//         { label: 'Support email', done: !!email },
//         { label: 'Knowledge base', done: !!knowledgeText }
//     ];
//     const doneCount = checklist.filter((c) => c.done).length;
//     const percent = Math.round((doneCount / checklist.length) * 100);

//     return (
//         <div className="min-h-screen bg-canvas text-ink">

//             {/* Navbar */}
//             <motion.nav
//                 initial={{ y: -20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.4, ease: "easeOut" }}
//                 className="fixed inset-x-0 top-0 z-50 border-b border-line bg-canvas/90 backdrop-blur-md"
//             >
//                 <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">

//                     <Link href="/" className="group flex items-center gap-2.5">
//                         <span className="grid size-8 place-items-center rounded-control bg-brand font-heading text-body font-bold text-white transition-transform duration-300 group-hover:-rotate-6">
//                             M
//                         </span>
//                         <span className="font-heading text-lg font-bold tracking-tight">
//                             Madadly
//                         </span>
//                     </Link>

//                     <Link
//                         href="/embed"
//                         className="inline-flex h-9 items-center gap-2 rounded-control bg-brand px-3.5 text-caption font-medium text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.14),0_1px_2px_rgb(15_92_84/0.3)] transition hover:bg-brand-hover active:scale-[0.98]"
//                     >
//                         <Code2 className="size-4" aria-hidden />
//                         Embed chatbot
//                     </Link>

//                 </div>
//             </motion.nav>

//             {/* Main Content */}
//             <main className="mx-auto max-w-6xl px-4 pb-32 pt-24 sm:px-6">

//                 <motion.div variants={container} initial="hidden" animate="show">

//                     {/* Page Heading */}
//                     <motion.div variants={item} className="max-w-2xl">
//                         <h1 className="font-heading text-title font-bold tracking-tight sm:text-3xl">
//                             Dashboard
//                         </h1>
//                         <p className="mt-2 text-ink-2">
//                             Welcome to your workspace. Manage your business information and AI assistant knowledge here.
//                         </p>
//                     </motion.div>

//                     <div className="mt-8 grid items-start gap-6 lg:grid-cols-[1fr_340px]">

//                         {/* Forms */}
//                         <div className="space-y-6">

//                             {/* Business Details */}
//                             <motion.div variants={item}>
//                                 <Card className="p-5 sm:p-7">
//                                     <div className="mb-6 flex items-start gap-4">
//                                         <span className="grid size-11 shrink-0 place-items-center rounded-control bg-brand-soft text-brand">
//                                             <Building2 className="size-5" aria-hidden />
//                                         </span>
//                                         <div>
//                                             <h2 className="font-heading text-section font-semibold">Business Details</h2>
//                                             <p className="mt-1 text-caption text-ink-2">
//                                                 Basic information about your business.
//                                             </p>
//                                         </div>
//                                     </div>

//                                     <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//                                         <Field label="Business Name" htmlFor="business-name">
//                                             <Input
//                                                 id="business-name"
//                                                 type="text"
//                                                 placeholder="e.g. Acme Store"
//                                                 value={businessName}
//                                                 onChange={(e) => setBusinessName(e.target.value)}
//                                             />
//                                         </Field>

//                                         <Field label="Support Email" htmlFor="support-email">
//                                             <Input
//                                                 id="support-email"
//                                                 type="text"
//                                                 placeholder="support@example.com"
//                                                 value={supportEmail}
//                                                 onChange={(e) => setSupportEmail(e.target.value)}
//                                             />
//                                         </Field>
//                                     </div>
//                                 </Card>
//                             </motion.div>

//                             {/* Knowledge Section */}
//                             <motion.div variants={item}>
//                                 <Card className="p-5 sm:p-7">
//                                     <div className="mb-6 flex items-start gap-4">
//                                         <span className="grid size-11 shrink-0 place-items-center rounded-control bg-ai-soft text-ai">
//                                             <BookOpen className="size-5" aria-hidden />
//                                         </span>
//                                         <div>
//                                             <h2 className="font-heading text-section font-semibold">Knowledge Base</h2>
//                                             <p className="mt-1 text-caption text-ink-2">
//                                                 Give your AI assistant the information it needs to help your customers.
//                                             </p>
//                                         </div>
//                                     </div>

//                                     <Field label="Business Knowledge" htmlFor="business-knowledge">
//                                         <Textarea
//                                             id="business-knowledge"
//                                             placeholder={`Example:

// What is your return policy?
// Delivery Information
// Shipping Rates
// Cash on Delivery available

// Add your FAQs, policies, services, and other useful business information here...`}
//                                             value={knowledge}
//                                             onChange={(e) => setKnowledge(e.target.value)}
//                                             rows={10}
//                                             className="min-h-[260px]"
//                                         />
//                                     </Field>

//                                     <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-caption text-ink-2">
//                                         <p>Your assistant will use this information to answer customer questions.</p>
//                                         <p className="tabular-nums text-ink-3">
//                                             {words} {words === 1 ? 'word' : 'words'} · {lines} {lines === 1 ? 'line' : 'lines'}
//                                         </p>
//                                     </div>
//                                 </Card>
//                             </motion.div>
//                         </div>

//                         {/* Side panel */}
//                         <motion.aside variants={item} className="space-y-6 lg:sticky lg:top-24">

//                             {/* Setup progress */}
//                             <Card className="p-5">
//                                 <div className="flex items-center justify-between">
//                                     <h2 className="font-heading font-semibold">Setup progress</h2>
//                                     <span className="text-caption font-medium tabular-nums text-brand">{percent}%</span>
//                                 </div>

//                                 <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
//                                     <motion.div
//                                         className="h-full rounded-full bg-brand"
//                                         initial={{ width: 0 }}
//                                         animate={{ width: `${percent}%` }}
//                                         transition={{ duration: 0.6, ease: "easeOut" }}
//                                     />
//                                 </div>

//                                 <ul className="mt-4 space-y-2.5">
//                                     {checklist.map((c) => (
//                                         <li key={c.label} className="flex items-center gap-2.5 text-body">
//                                             <span
//                                                 className={`grid size-5 place-items-center rounded-full border transition-colors duration-300 ${
//                                                     c.done ? 'border-brand bg-brand text-white' : 'border-line bg-surface text-transparent'
//                                                 }`}
//                                             >
//                                                 <AnimatePresence initial={false}>
//                                                     {c.done && (
//                                                         <motion.span
//                                                             initial={{ scale: 0 }}
//                                                             animate={{ scale: 1 }}
//                                                             exit={{ scale: 0 }}
//                                                             transition={{ type: "spring", stiffness: 500, damping: 25 }}
//                                                             className="grid place-items-center"
//                                                         >
//                                                             <Check className="size-3" strokeWidth={3} aria-hidden />
//                                                         </motion.span>
//                                                     )}
//                                                 </AnimatePresence>
//                                             </span>
//                                             <span className={c.done ? 'text-ink' : 'text-ink-2'}>{c.label}</span>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </Card>

//                             {/* Live preview */}
//                             <Card padded={false} className="overflow-hidden">
//                                 <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
//                                     <h2 className="font-heading font-semibold">Assistant preview</h2>
//                                     <span className="text-caption text-ink-3">Live</span>
//                                 </div>

//                                 <div className="bg-canvas/60 p-4">
//                                     <div className="overflow-hidden rounded-card border border-line bg-surface shadow-card">
//                                         <div className="flex items-center gap-2.5 bg-brand px-3.5 py-3 text-white">
//                                             <span className="grid size-8 place-items-center rounded-full bg-white/15 font-heading text-caption font-bold">
//                                                 {(name[0] ?? 'M').toUpperCase()}
//                                             </span>
//                                             <div className="min-w-0">
//                                                 <p className="truncate font-heading text-body font-semibold leading-tight">
//                                                     {name || 'Your business'}
//                                                 </p>
//                                                 <p className="flex items-center gap-1.5 text-[11px] text-white/75">
//                                                     <span className="size-1.5 rounded-full bg-[#6ee7a8]" />
//                                                     Online
//                                                 </p>
//                                             </div>
//                                         </div>

//                                         <div className="space-y-2.5 p-3.5">
//                                             <div className="w-fit max-w-[90%] rounded-2xl rounded-bl-sm border border-line bg-surface px-3.5 py-2.5 text-caption text-ink">
//                                                 Hi! Welcome{name ? ` to ${name}` : ''}. How can I help you today?
//                                             </div>

//                                             {knowledgeText ? (
//                                                 <span className="inline-flex items-center gap-1.5 rounded-full bg-ai-soft px-2.5 py-1 text-[11px] text-ai-ink">
//                                                     <Sparkles className="size-3 text-ai" aria-hidden />
//                                                     Answers from your knowledge base
//                                                 </span>
//                                             ) : (
//                                                 <span className="inline-flex rounded-full bg-muted px-2.5 py-1 text-[11px] text-ink-2">
//                                                     Add knowledge to teach your assistant
//                                                 </span>
//                                             )}

//                                             {email && (
//                                                 <p className="truncate text-[11px] text-ink-3">Support: {email}</p>
//                                             )}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </Card>
//                         </motion.aside>
//                     </div>
//                 </motion.div>
//             </main>

//             {/* Save Actions */}
//             <motion.div
//                 initial={{ y: 40, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
//                 className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface/90 backdrop-blur-md"
//             >
//                 <div className="mx-auto flex max-w-6xl flex-col-reverse gap-3 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:px-6">

//                     <p className="hidden text-caption text-ink-2 sm:block">
//                         Keep your business information up to date.
//                     </p>

//                     <div className="flex items-center gap-4 sm:justify-end">

//                         <AnimatePresence>
//                             {saved && (
//                                 <motion.span
//                                     initial={{ opacity: 0, x: 10 }}
//                                     animate={{ opacity: 1, x: 0 }}
//                                     exit={{ opacity: 0, x: 10 }}
//                                     className="flex items-center gap-1.5 text-body font-medium text-success"
//                                 >
//                                     <Check className="size-4" aria-hidden />
//                                     Settings saved successfully!
//                                 </motion.span>
//                             )}
//                         </AnimatePresence>

//                         <Button
//                             loading={loading}
//                             onClick={handleSettings}
//                             className="w-full sm:w-auto"
//                         >
//                             {loading ? "Saving..." : "Save Changes"}
//                         </Button>

//                     </div>
//                 </div>
//             </motion.div>
//         </div>
//     );
// };

// export default DashboardPage;











'use client'

import axios from "axios";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { BookOpen, Building2, Check, CircleAlert, Code2, Pencil, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, type MouseEvent as ReactMouseEvent, type ReactNode } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Field, Input, Textarea } from "@/components/ui/Field";
import { Skeleton } from "@/components/ui/Skeleton";

const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } }
};

const item: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

type Section = 'business' | 'knowledge';

const countOf = (text: string) => {
    const t = (text ?? '').trim();
    return {
        words: t ? t.split(/\s+/).length : 0,
        lines: t ? t.split('\n').filter((l) => l.trim()).length : 0
    };
};

/* ---------- Small view-mode helpers ---------- */

const ReadField = ({ label, value }: { label: string; value: string }) => (
    <div className="min-w-0">
        <dt className="text-caption font-medium text-ink-2">{label}</dt>
        <dd className="mt-1 break-words text-body text-ink">
            {value || <span className="text-ink-3">Not added yet</span>}
        </dd>
    </div>
);

/* ---------- Section card with independent View / Edit modes ---------- */

const SectionCard = ({
    icon,
    iconClass,
    title,
    description,
    editing,
    ready,
    dirty,
    saving,
    onEdit,
    onCancel,
    onSave,
    view,
    edit
}: {
    icon: ReactNode
    iconClass: string
    title: string
    description: string
    editing: boolean
    ready: boolean
    dirty: boolean
    saving: boolean
    onEdit: () => void
    onCancel: () => void
    onSave: () => void
    view: ReactNode
    edit: ReactNode
}) => (
    <Card className="p-5 sm:p-7">
        <div className="mb-6 flex items-start justify-between gap-4">
            <div className="flex min-w-0 items-start gap-4">
                <span className={`grid size-11 shrink-0 place-items-center rounded-control ${iconClass}`}>
                    {icon}
                </span>
                <div className="min-w-0">
                    <h2 className="font-heading text-section font-semibold">{title}</h2>
                    <p className="mt-1 text-caption text-ink-2">{description}</p>
                </div>
            </div>

            {editing ? (
                <Badge tone="brand" className="shrink-0">Editing</Badge>
            ) : (
                <Button
                    variant="secondary"
                    size="sm"
                    icon={<Pencil className="size-3.5" aria-hidden />}
                    onClick={onEdit}
                    disabled={!ready}
                    className="shrink-0"
                >
                    Edit
                </Button>
            )}
        </div>

        <AnimatePresence mode="wait" initial={false}>
            <motion.div
                key={editing ? 'edit' : 'view'}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
            >
                {!ready ? (
                    <div className="space-y-3">
                        <Skeleton className="h-4 w-1/3" />
                        <Skeleton className="h-4 w-2/3" />
                    </div>
                ) : editing ? edit : view}
            </motion.div>
        </AnimatePresence>

        <AnimatePresence initial={false}>
            {editing && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="overflow-hidden"
                >
                    <div className="mt-6 flex flex-col-reverse gap-3 border-t border-line pt-4 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-caption">
                            {dirty ? (
                                <span className="flex items-center gap-1.5 text-warning">
                                    <span className="size-1.5 rounded-full bg-warning" />
                                    Unsaved changes
                                </span>
                            ) : (
                                <span className="text-ink-3">No changes yet</span>
                            )}
                        </p>
                        <div className="flex gap-2 sm:justify-end">
                            <Button variant="ghost" onClick={onCancel} disabled={saving} className="flex-1 sm:flex-none">
                                Cancel
                            </Button>
                            <Button
                                onClick={onSave}
                                loading={saving}
                                disabled={!dirty}
                                className="flex-1 sm:flex-none"
                            >
                                {saving ? "Saving..." : "Save Changes"}
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </Card>
);

const DashboardPage = ({ ownerId }: { ownerId: string }) => {

    // Draft values: bound to the inputs while a section is being edited
    const [businessName, setBusinessName] = useState('');
    const [supportEmail, setSupportEmail] = useState('');
    const [knowledge, setKnowledge] = useState('');
    const [loading, setLoading] = useState(false);
    const [saved, setSaved] = useState(false);

    // Last values confirmed by the server (used for read-only view, Cancel and change detection)
    const [lastSaved, setLastSaved] = useState({ businessName: '', supportEmail: '', knowledge: '' });
    const [fetched, setFetched] = useState(false);
    const [editing, setEditing] = useState<Record<Section, boolean>>({ business: false, knowledge: false });
    const [saveError, setSaveError] = useState('');

    const ready = fetched || !ownerId;

    const businessDirty =
        (businessName ?? '') !== lastSaved.businessName || (supportEmail ?? '') !== lastSaved.supportEmail;
    const knowledgeDirty = (knowledge ?? '') !== lastSaved.knowledge;
    const dirtyMap: Record<Section, boolean> = { business: businessDirty, knowledge: knowledgeDirty };
    const anyDirty = businessDirty || knowledgeDirty;

    // `scope` = the section(s) being saved. The API always receives all fields, so sections
    // that are not being saved send their last saved values (their drafts are never persisted).
    const handleSettings = async (scope: Section[]) => {
        const toSave = scope.filter((s) => dirtyMap[s]);
        if (toSave.length === 0) return; // nothing changed

        const saveBusiness = toSave.includes('business');
        const saveKnowledge = toSave.includes('knowledge');
        const payload = {
            ownerId,
            businessName: saveBusiness ? businessName : lastSaved.businessName,
            supportEmail: saveBusiness ? supportEmail : lastSaved.supportEmail,
            knowledge: saveKnowledge ? knowledge : lastSaved.knowledge
        };

        setLoading(true);
        setSaveError('');
        try {
            await axios.post('/api/settings', payload);

            setLastSaved({
                businessName: payload.businessName ?? '',
                supportEmail: payload.supportEmail ?? '',
                knowledge: payload.knowledge ?? ''
            });
            setEditing((prev) => ({
                business: saveBusiness ? false : prev.business,
                knowledge: saveKnowledge ? false : prev.knowledge
            }));

            setLoading(false);
            setSaved(true);
            setTimeout(() => setSaved(false), 3000);

        } catch (error) {
            console.error('Error saving settings:', error);
            setSaveError("Couldn't save your changes. Please try again.");
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
                    setLastSaved({
                        businessName: result.data.businessName ?? '',
                        supportEmail: result.data.supportEmail ?? '',
                        knowledge: result.data.knowledge ?? ''
                    });

                } catch (error) {
                    console.error('Error fetching settings:', error);
                } finally {
                    setFetched(true);
                }
            };

            handleGetDetails();
        }
    }, [ownerId]);

    const handleEdit = (section: Section) => {
        setSaveError('');
        setEditing((prev) => ({ ...prev, [section]: true }));
    };

    // Cancel: discard the draft and restore the last saved values
    const handleCancel = (section: Section) => {
        if (section === 'business') {
            setBusinessName(lastSaved.businessName);
            setSupportEmail(lastSaved.supportEmail);
        } else {
            setKnowledge(lastSaved.knowledge);
        }
        setSaveError('');
        setEditing((prev) => ({ ...prev, [section]: false }));
    };

    const handleDiscardAll = () => {
        (['business', 'knowledge'] as Section[]).forEach((s) => {
            if (dirtyMap[s]) handleCancel(s);
        });
    };

    // Warn before closing / reloading the tab with unsaved changes
    useEffect(() => {
        if (!anyDirty) return;
        const handler = (e: BeforeUnloadEvent) => {
            e.preventDefault();
            e.returnValue = '';
        };
        window.addEventListener('beforeunload', handler);
        return () => window.removeEventListener('beforeunload', handler);
    }, [anyDirty]);

    // Warn before in-app navigation with unsaved changes
    const guardLeave = (e: ReactMouseEvent<HTMLAnchorElement>) => {
        if (anyDirty && !window.confirm('You have unsaved changes. Leave without saving?')) {
            e.preventDefault();
        }
    };

    // Display-only values. Preview follows the drafts, progress follows saved data.
    const name = (businessName ?? '').trim();
    const email = (supportEmail ?? '').trim();
    const knowledgeText = (knowledge ?? '').trim();
    const draftCounts = countOf(knowledge);
    const savedCounts = countOf(lastSaved.knowledge);

    const checklist = [
        { label: 'Business name', done: !!lastSaved.businessName.trim() },
        { label: 'Support email', done: !!lastSaved.supportEmail.trim() },
        { label: 'Knowledge base', done: !!lastSaved.knowledge.trim() }
    ];
    const doneCount = checklist.filter((c) => c.done).length;
    const percent = Math.round((doneCount / checklist.length) * 100);

    const dirtyLabels = [
        businessDirty && 'Business Details',
        knowledgeDirty && 'Knowledge Base'
    ].filter(Boolean) as string[];

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

                    <Link href="/" onClick={guardLeave} className="group flex items-center gap-2.5">
                        <span className="grid size-8 place-items-center rounded-control bg-brand font-heading text-body font-bold text-white transition-transform duration-300 group-hover:-rotate-6">
                            M
                        </span>
                        <span className="font-heading text-lg font-bold tracking-tight">
                            Madadly
                        </span>
                    </Link>

                    <Link
                        href="/embed"
                        onClick={guardLeave}
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

                        {/* Sections */}
                        <div className="space-y-6">

                            {/* Business Details */}
                            <motion.div variants={item}>
                                <SectionCard
                                    icon={<Building2 className="size-5" aria-hidden />}
                                    iconClass="bg-brand-soft text-brand"
                                    title="Business Details"
                                    description="Basic information about your business."
                                    editing={editing.business}
                                    ready={ready}
                                    dirty={businessDirty}
                                    saving={loading}
                                    onEdit={() => handleEdit('business')}
                                    onCancel={() => handleCancel('business')}
                                    onSave={() => handleSettings(['business'])}
                                    view={
                                        <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                            <ReadField label="Business Name" value={lastSaved.businessName} />
                                            <ReadField label="Support Email" value={lastSaved.supportEmail} />
                                        </dl>
                                    }
                                    edit={
                                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                            <Field label="Business Name" htmlFor="business-name">
                                                <Input
                                                    id="business-name"
                                                    type="text"
                                                    placeholder="e.g. Acme Store"
                                                    value={businessName}
                                                    onChange={(e) => setBusinessName(e.target.value)}
                                                    autoFocus
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
                                    }
                                />
                            </motion.div>

                            {/* Knowledge Section */}
                            <motion.div variants={item}>
                                <SectionCard
                                    icon={<BookOpen className="size-5" aria-hidden />}
                                    iconClass="bg-ai-soft text-ai"
                                    title="Knowledge Base"
                                    description="Give your AI assistant the information it needs to help your customers."
                                    editing={editing.knowledge}
                                    ready={ready}
                                    dirty={knowledgeDirty}
                                    saving={loading}
                                    onEdit={() => handleEdit('knowledge')}
                                    onCancel={() => handleCancel('knowledge')}
                                    onSave={() => handleSettings(['knowledge'])}
                                    view={
                                        lastSaved.knowledge.trim() ? (
                                            <>
                                                <p className="mb-2 text-caption font-medium text-ink-2">Business Knowledge</p>
                                                <div className="max-h-72 overflow-y-auto whitespace-pre-wrap break-words rounded-control border border-line bg-canvas p-4 text-body leading-7 text-ink">
                                                    {lastSaved.knowledge}
                                                </div>
                                                <p className="mt-3 text-caption tabular-nums text-ink-3">
                                                    {savedCounts.words} {savedCounts.words === 1 ? 'word' : 'words'} · {savedCounts.lines} {savedCounts.lines === 1 ? 'line' : 'lines'}
                                                </p>
                                            </>
                                        ) : (
                                            <div className="rounded-control border border-dashed border-line bg-canvas px-4 py-8 text-center">
                                                <p className="font-medium text-ink">No knowledge added yet</p>
                                                <p className="mx-auto mt-1 max-w-sm text-caption text-ink-2">
                                                    Your assistant has nothing to answer from yet. Click Edit to add your FAQs, policies and services.
                                                </p>
                                            </div>
                                        )
                                    }
                                    edit={
                                        <>
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
                                                    autoFocus
                                                />
                                            </Field>

                                            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-caption text-ink-2">
                                                <p>Your assistant will use this information to answer customer questions.</p>
                                                <p className="tabular-nums text-ink-3">
                                                    {draftCounts.words} {draftCounts.words === 1 ? 'word' : 'words'} · {draftCounts.lines} {draftCounts.lines === 1 ? 'line' : 'lines'}
                                                </p>
                                            </div>
                                        </>
                                    }
                                />
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

            {/* Unsaved changes bar: only visible while something is unsaved */}
            <AnimatePresence>
                {anyDirty && (
                    <motion.div
                        initial={{ y: 60, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 60, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface/95 backdrop-blur-md"
                    >
                        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:px-6">

                            {saveError ? (
                                <p role="alert" className="flex items-center gap-2 text-body font-medium text-danger">
                                    <CircleAlert className="size-4 shrink-0" aria-hidden />
                                    {saveError}
                                </p>
                            ) : (
                                <p className="flex items-center gap-2 text-body text-ink">
                                    <span className="size-2 shrink-0 rounded-full bg-warning" />
                                    Unsaved changes in {dirtyLabels.join(' and ')}
                                </p>
                            )}

                            <div className="flex gap-2 sm:justify-end">
                                <Button variant="ghost" onClick={handleDiscardAll} disabled={loading} className="flex-1 sm:flex-none">
                                    Discard
                                </Button>
                                <Button
                                    loading={loading}
                                    onClick={() => handleSettings(['business', 'knowledge'])}
                                    className="flex-1 sm:flex-none"
                                >
                                    {loading ? "Saving..." : "Save Changes"}
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Success feedback */}
            <AnimatePresence>
                {saved && (
                    <motion.div
                        role="status"
                        initial={{ opacity: 0, y: 16, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 16, scale: 0.97 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className={`fixed left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-control bg-ink px-4 py-3 text-body font-medium text-white shadow-pop ${
                            anyDirty ? 'bottom-24' : 'bottom-6'
                        }`}
                    >
                        <span className="grid size-5 place-items-center rounded-full bg-success">
                            <Check className="size-3" strokeWidth={3} aria-hidden />
                        </span>
                        Settings saved successfully!
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DashboardPage;