const companies = [
    "Acme Corp", "Global Systems", "TechFlow", "Innova", "Skyward", "Pulse AI", "Vertex", "NexGen"
];

export const TrustBar = () => {
    return (
        <div className="py-12 border-y border-white/5 bg-slate-900/10 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
                <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">
                    Trusted by forward-thinking teams
                </p>
            </div>

            <div className="flex w-fit animate-scroll whitespace-nowrap">
                {[...companies, ...companies].map((company, i) => (
                    <div
                        key={i}
                        className="flex items-center justify-center px-12 text-2xl font-display font-bold text-slate-700 grayscale hover:grayscale-0 hover:text-slate-400 transition-all duration-500 cursor-default"
                    >
                        {company}
                    </div>
                ))}
            </div>
        </div>
    );
};
