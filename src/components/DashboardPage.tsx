// 'use client'

// import axios from "axios";
// import { motion } from "motion/react"
// import Link from "next/link"
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
//             const result = await axios.post('/api/settings', {
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
//     }

//     useEffect(() => {
//         if (ownerId) {
//             const handleGetDetails = async () => {
//                 try {
//                     const result = await axios.post('/api/settings/get', {
//                         ownerId,
//                     });
//                     setBusinessName(result.data.businessName)
//                     setSupportEmail(result.data.supportEmail)
//                     setKnowledge(result.data.knowledge)
//                 } catch (error) {
//                     console.error('Error fetching settings:', error);
//                 }
//             }
//             handleGetDetails();
//         }
//     }, [ownerId]);

//     return (
//         <div className=' min-h-screen bg-zinc-50 text-zinc-900 '>

//             <motion.nav
//                 initial={{ y: -30, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//                 className="fixed top-0 inset-x-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur-xl"
//             >
//                 <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
//                     <Link href="/" className="flex items-center gap-2.5">
//                         <div className="w-9 h-9 rounded-xl bg-violet-600 flex items-center justify-center text-white font-bold text-lg">
//                             M
//                         </div>
//                         <span className="text-xl font-bold tracking-tight">
//                             Madadly<span className="text-violet-600">.</span>
//                         </span>
//                     </Link>

//                     <button>Embed chatbot</button>



//                 </div>
//             </motion.nav >

//             <div>
//                 <motion.div
//                     initial={{ y: 30, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     <div>
//                         <h1 className="text-3xl font-bold">Dashboard</h1>
//                         <p className="text-zinc-600">
//                             Welcome to your dashboard, {ownerId}!
//                         </p>
//                     </div>

//                     <div>
//                         <h1>Business Details</h1>
//                         <div>
//                             <input type="text" placeholder="Business Name" value={businessName} onChange={(e) => setBusinessName(e.target.value)} />
//                             <input type="text" placeholder="Support Email" value={supportEmail} onChange={(e) => setSupportEmail(e.target.value)} />
//                         </div>
//                     </div>

//                     <div>
//                         <h1>Knowledge</h1>
//                         <p>Add FAQs, policies, and other information </p>
//                         <div>
//                             <textarea placeholder={` Example: 
//                                 What is your return policy?
//                                 Delivery Information
//                                 Shipping Rates
//                                 Cash on Delivery available
//                                  `} value={knowledge} onChange={(e) => setKnowledge(e.target.value)} />

//                         </div>
//                     </div>

//                     <div>
//                         <motion.button
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             className="bg-violet-600 text-white py-2 px-4 rounded-lg font-medium"
//                             disabled={loading}
//                             onClick={handleSettings}
//                         >
//                             {loading ? "Saving..." : "Save"}
//                         </motion.button>

//                         {saved && (<motion.span>
//                             Settings saved successfully!
//                         </motion.span>
//                         )}

//                     </div>

//                 </motion.div>
//             </div>
//         </div >
//     )
// }

// export default DashboardPage













'use client'

import axios from "axios";
import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

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

    return (
        <div className="min-h-screen bg-[#F8FAFA] text-[#272343]">

            {/* Navbar */}
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="fixed top-0 inset-x-0 z-50 border-b border-[#D1E8E7] bg-white/90 backdrop-blur-xl"
            >
                <div className="max-w-7xl mx-auto h-[76px] px-5 sm:px-8 flex items-center justify-between">

                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#272343] flex items-center justify-center text-[#BAE8E8] font-bold text-xl">
                            M
                        </div>

                        <span className="text-xl font-bold tracking-tight">
                            Madadly<span className="text-[#6B61A8]">.</span>
                        </span>
                    </Link>

                    <button
                        className="px-4 py-2.5 rounded-xl bg-[#272343] text-white text-sm font-medium hover:bg-[#39345D] transition-colors"
                    >
                        Embed chatbot
                    </button>

                </div>
            </motion.nav>

            {/* Main Content */}
            <main className="max-w-5xl mx-auto px-5 sm:px-8 pt-28 pb-16">

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                >

                    {/* Page Heading */}
                    <div className="space-y-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E3F6F5] text-[#272343] text-xs font-semibold">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            Workspace
                        </div>

                        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                            Dashboard
                        </h1>

                        <p className="text-[#52526B] text-sm sm:text-base">
                            Welcome to your workspace. Manage your business information and AI assistant knowledge here.
                        </p>
                    </div>

                    {/* Business Details */}
                    <section className="bg-white border border-[#D1E8E7] rounded-2xl p-5 sm:p-7 shadow-sm">

                        <div className="flex items-start gap-4 mb-7">
                            <div className="w-11 h-11 rounded-xl bg-[#E3F6F5] flex items-center justify-center shrink-0">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                    className="w-5 h-5 text-[#272343]"
                                >
                                    <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4M9 9v.01M9 12v.01M9 15v.01M9 18v.01M15 13v.01M15 16v.01M15 19v.01" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>

                            <div>
                                <h2 className="text-lg font-bold">Business Details</h2>
                                <p className="text-sm text-[#77778D] mt-1">
                                    Basic information about your business.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-[#272343]">
                                    Business Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="e.g. Acme Store"
                                    value={businessName}
                                    onChange={(e) => setBusinessName(e.target.value)}
                                    className="w-full h-12 px-4 rounded-xl border border-[#D1E8E7] bg-[#FCFEFE] text-sm text-[#272343] placeholder:text-[#A0A0B2] outline-none transition-all focus:border-[#272343] focus:ring-2 focus:ring-[#BAE8E8]/60"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-[#272343]">
                                    Support Email
                                </label>

                                <input
                                    type="text"
                                    placeholder="support@example.com"
                                    value={supportEmail}
                                    onChange={(e) => setSupportEmail(e.target.value)}
                                    className="w-full h-12 px-4 rounded-xl border border-[#D1E8E7] bg-[#FCFEFE] text-sm text-[#272343] placeholder:text-[#A0A0B2] outline-none transition-all focus:border-[#272343] focus:ring-2 focus:ring-[#BAE8E8]/60"
                                />
                            </div>

                        </div>
                    </section>

                    {/* Knowledge Section */}
                    <section className="bg-white border border-[#D1E8E7] rounded-2xl p-5 sm:p-7 shadow-sm">

                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-11 h-11 rounded-xl bg-[#E3F6F5] flex items-center justify-center shrink-0">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                    className="w-5 h-5 text-[#272343]"
                                >
                                    <path d="M12 7v14m0-14C10.5 5.5 8.5 5 5 5H3v14h2c3.5 0 5.5.5 7 2m0-14c1.5-1.5 3.5-2 7-2h2v14h-2c-3.5 0-5.5.5-7 2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>

                            <div>
                                <h2 className="text-lg font-bold">Knowledge Base</h2>
                                <p className="text-sm text-[#77778D] mt-1">
                                    Give your AI assistant the information it needs to help your customers.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-3">

                            <label className="block text-sm font-semibold text-[#272343]">
                                Business Knowledge
                            </label>

                            <textarea
                                placeholder={`Example:

What is your return policy?
Delivery Information
Shipping Rates
Cash on Delivery available

Add your FAQs, policies, services, and other useful business information here...`}
                                value={knowledge}
                                onChange={(e) => setKnowledge(e.target.value)}
                                rows={10}
                                className="w-full min-h-[240px] p-4 rounded-xl border border-[#D1E8E7] bg-[#FCFEFE] text-sm leading-7 text-[#272343] placeholder:text-[#A0A0B2] outline-none resize-y transition-all focus:border-[#272343] focus:ring-2 focus:ring-[#BAE8E8]/60"
                            />

                            <p className="text-xs text-[#85859A]">
                                Your assistant will use this information to answer customer questions.
                            </p>

                        </div>
                    </section>

                    {/* Save Actions */}
                    <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4">

                        <p className="text-xs text-[#85859A]">
                            Keep your business information up to date.
                        </p>

                        <div className="flex items-center gap-4">

                            {saved && (
                                <motion.span
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-sm font-medium text-emerald-600"
                                >
                                    Settings saved successfully!
                                </motion.span>
                            )}

                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                disabled={loading}
                                onClick={handleSettings}
                                className="w-full sm:w-auto px-7 py-3 rounded-xl bg-[#272343] text-white text-sm font-semibold shadow-sm hover:bg-[#39345D] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {loading ? "Saving..." : "Save Changes"}
                            </motion.button>

                        </div>
                    </div>

                </motion.div>
            </main>
        </div>
    );
};

export default DashboardPage;
