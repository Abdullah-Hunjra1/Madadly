
const steps = [
    {
        number: '01',
        title: 'Create your assistant',
        description: 'Set up an AI assistant for your business.'
    },
    {
        number: '02',
        title: 'Connect your knowledge',
        description: 'Provide the business information your assistant needs.'
    },
    {
        number: '03',
        title: 'Add it to your website',
        description: 'Integrate the chat widget and start assisting visitors.'
    }
]

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-28 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto">
                    <p className="text-sm font-semibold uppercase tracking-widest text-violet-600">
                        Simple process
                    </p>
                    <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
                        Get started in three steps
                    </h2>
                </div>

                <div className="mt-16 grid md:grid-cols-3 gap-10">
                    {steps.map((step, index) => (
                        <div key={step.number} className="relative">
                            <span className="text-5xl font-bold text-violet-100">
                                {step.number}
                            </span>
                            <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                            <p className="mt-3 text-zinc-500 leading-7">
                                {step.description}
                            </p>
                            {index !== 2 && (
                                <div className="hidden md:block absolute top-8 left-28 right-0 border-t border-dashed border-violet-200" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
