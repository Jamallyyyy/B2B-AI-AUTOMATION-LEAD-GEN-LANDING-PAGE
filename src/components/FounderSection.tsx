import { motion } from 'framer-motion';
import { Linkedin, Mail, Twitter } from 'lucide-react';

export const FounderSection = () => {
    return (
        <div className="py-24 px-6 relative border-t border-white/5 bg-slate-900/10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
                <div className="relative group w-full max-w-sm">
                    <div className="absolute inset-0 bg-accent-primary blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 rounded-full"></div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="aspect-square rounded-3xl overflow-hidden glass border-white/10 relative z-10"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                            alt="Founder"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </motion.div>
                </div>

                <div className="flex-1 space-y-8 text-left">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                            Systems Built by <span className="text-gradient">Humans</span>
                        </h2>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            I'm Alex, and I've spent the last decade building operations for high-growth tech companies. AI is a tool, not a replacement for strategy.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <p className="text-slate-300 font-medium italic text-lg leading-relaxed">
                            "We don't just sell you a script. We build the operational nervous system for your business so you can focus on high-leverage decisions."
                        </p>

                        <div className="flex gap-6">
                            <a href="#" className="p-3 rounded-xl glass hover:bg-white/10 transition-colors">
                                <Linkedin className="w-5 h-5 text-accent-primary" />
                            </a>
                            <a href="#" className="p-3 rounded-xl glass hover:bg-white/10 transition-colors">
                                <Twitter className="w-5 h-5 text-accent-secondary" />
                            </a>
                            <a href="#" className="p-3 rounded-xl glass hover:bg-white/10 transition-colors">
                                <Mail className="w-5 h-5 text-white" />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <div className="px-4 py-2 rounded-full glass border-white/5 text-sm font-medium text-slate-400">Ex-Stripe Operations</div>
                        <div className="px-4 py-2 rounded-full glass border-white/5 text-sm font-medium text-slate-400">10+ Years in B2B</div>
                        <div className="px-4 py-2 rounded-full glass border-white/5 text-sm font-medium text-slate-400">250+ Systems Built</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
