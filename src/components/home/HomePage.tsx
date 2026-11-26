// 'use client'

// import Navbar from './Navbar'
// import HeroSection from './HeroSection'
// import Features from './Features'
// import HowItWorks from './HowItWorks'
// import Footer from './Footer'
// import axios from 'axios'

// const HomePage = ({ email }: { email: string }) => {
//     const handleLogin = () => {
//         window.location.href = '/api/auth/login'
//     }

//     const handleLogout = async () => {
//         try {
//             const result = await axios.get('/api/auth/logout')
//             window.location.href = '/'
//             console.log(result.data)
//         } catch (error) {
//             console.error('Error logging out:', error)
//         }
//     }

//     return (
//         <main className="min-h-screen bg-white text-zinc-900 overflow-x-hidden">
//             <Navbar email={email} handleLogin={handleLogin} handleLogout={handleLogout} />
//             <HeroSection email={email} handleLogin={handleLogin} handleLogout={handleLogout} />
//             <Features />
//             <HowItWorks />

//             <section className="px-6 py-24">
//                 <div className="max-w-6xl mx-auto rounded-3xl bg-zinc-950 px-8 py-16 md:px-16 text-center text-white">
//                     <p className="text-sm font-semibold text-violet-400 mb-4">
//                         GET STARTED WITH MADADLY
//                     </p>
//                     <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
//                         Ready to transform your customer support?
//                     </h2>
//                     <p className="mt-5 text-zinc-400 max-w-xl mx-auto">
//                         Give your customers instant answers with an AI assistant
//                         that understands your business.
//                     </p>
//                     <button
//                         onClick={handleLogin}
//                         className="mt-9 rounded-xl bg-violet-600 px-8 py-3.5 font-medium hover:bg-violet-500 transition"
//                     >
//                         Get Started
//                     </button>
//                 </div>
//             </section>

//             <Footer />
//         </main>
//     )
// }

// export default HomePage






'use client'

import Navbar from './Navbar'
import HeroSection from './HeroSection'
import Features from './Features'
import HowItWorks from './HowItWorks'
import FAQ from './FAQ'
import CTASection from './CTASection'
import Footer from './Footer'
import axios from 'axios'

const HomePage = ({ email }: { email: string }) => {
    const handleLogin = () => {
        window.location.href = '/api/auth/login'
    }

    const handleLogout = async () => {
        try {
            const result = await axios.get('/api/auth/logout')
            window.location.href = '/'
            console.log(result.data)
        } catch (error) {
            console.error('Error logging out:', error)
        }
    }

    return (
        <main className="min-h-screen overflow-x-hidden bg-canvas text-ink">
            <Navbar email={email} handleLogin={handleLogin} handleLogout={handleLogout} />
            <HeroSection email={email} handleLogin={handleLogin} handleLogout={handleLogout} />
            <Features />
            <HowItWorks />
            <FAQ />
            <CTASection handleLogin={handleLogin} />
            <Footer />
        </main>
    )
}

export default HomePage