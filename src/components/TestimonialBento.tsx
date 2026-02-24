import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Sarah Chen",
        role: "COO at TechGrowth",
        content: "The ROI was immediate. We saved 15 hours a week within the first month of implementing their recommendations.",
        size: "large",
        rating: 5
    },
    {
        name: "Marcus Thorne",
        role: "Founder, ScaleUp",
        content: "Finally, someone who understands B2B operations. No jargon, just results.",
        size: "small",
        rating: 5
    },
    {
        name: "Elena Rodriguez",
        role: "Ops Lead at FlowState",
        content: "The audit was eye-opening. We didn't realize how much we were leaking in manual handoffs between Sales and CS.",
        size: "medium",
        rating: 5
    },
    {
        name: "David Park",
        role: "CEO, DataPulse",
        content: "Their AI systems are robust. Professional-grade automation that actually works under pressure.",
        size: "small",
        rating: 5
    },
    {
        name: "Jessica Wu",
        role: "VP Operations",
        content: "Systematic, clear, and incredibly effective. If you're still doing manual data entry, you're falling behind.",
        size: "medium",
        rating: 5
    }
];

export const TestimonialBento = () => {
    return (
        <div className="py-24 px-6 relative">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                    Voices of <span className="text-gradient">Success</span>
                </h2>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                    We don't just build systems; we build competitive advantages for founders who value their time.
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
                {testimonials.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className={`group relative glass-dark border-white/5 p-8 rounded-[2rem] flex flex-col justify-between hover:border-accent-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent-primary/5 ${item.size === 'large' ? 'md:col-span-2 md:row-span-2' :
                            item.size === 'medium' ? 'md:row-span-2' : ''
                            }`}
                    >
                        <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Quote className="w-12 h-12 text-accent-primary" />
                        </div>

                        <div className="space-y-4 relative z-10">
                            <div className="flex gap-1">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                                ))}
                            </div>
                            <p className={`text-slate-200 leading-relaxed font-medium ${item.size === 'large' ? 'text-2xl' : 'text-lg'}`}>
                                "{item.content}"
                            </p>
                        </div>

                        <div className="flex items-center gap-4 pt-6">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white font-bold text-lg">
                                {item.name[0]}
                            </div>
                            <div>
                                <p className="font-bold text-white">{item.name}</p>
                                <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">{item.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
