
const features = [
    {
        number: '01',
        icon: '✦',
        title: 'AI-Powered Responses',
        description: 'Give customers helpful, relevant answers using an assistant that understands your business information.'
    },
    {
        number: '02',
        icon: '◈',
        title: 'Your Business Knowledge',
        description: 'Build assistants around your own business content so customers get information that matters.'
    },
    {
        number: '03',
        icon: '⌘',
        title: 'Website Integration',
        description: 'Bring your AI assistant directly to your website with an embeddable chat experience.'
    },
    {
        number: '04',
        icon: '◎',
        title: 'Centralized Management',
        description: 'Manage your AI assistant and business support experience from one platform.'
    }
]

const Features = () => {
    return (
        <section id="features" className="bg-zinc-50 py-28 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-sm font-semibold uppercase tracking-widest text-violet-600">
                        What Madadly offers
                    </p>
                    <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
                        Everything your AI support needs
                    </h2>
                    <p className="mt-5 text-zinc-600 leading-7">
                        Give your customers a better support experience with
                        intelligent assistants built around your business.
                    </p>
                </div>

                <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {features.map((feature) => (
                        <div
                            key={feature.number}
                            className="group rounded-2xl border border-zinc-200 bg-white p-7 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-100/50 transition duration-300"
                        >
                            <div className="flex justify-between items-center">
                                <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center text-2xl group-hover:bg-violet-600 group-hover:text-white transition">
                                    {feature.icon}
                                </div>
                                <span className="text-xs text-zinc-400">{feature.number}</span>
                            </div>

                            <h3 className="mt-8 text-lg font-semibold">
                                {feature.title}
                            </h3>
                            <p className="mt-3 text-sm leading-7 text-zinc-500">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features
