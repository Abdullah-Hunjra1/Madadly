import Link from "next/link"

const Footer = () => {
    return (
        <footer className="border-t border-zinc-200 px-6 py-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
                <Link href="/" className="text-xl font-bold tracking-tight">
                    Madadly<span className="text-violet-600">.</span>
                </Link>

                <p className="text-sm text-zinc-500 text-center">
                    AI-powered help. Made simple.
                </p>

                <p className="text-sm text-zinc-400">
                    © {new Date().getFullYear()} Madadly. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
