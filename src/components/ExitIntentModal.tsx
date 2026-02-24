import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, ArrowRight, CheckCircle } from 'lucide-react';

export const ExitIntentModal = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasShown, setHasShown] = useState(false);
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !hasShown) {
                setIsVisible(true);
                setHasShown(true);
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);
        return () => document.removeEventListener('mouseleave', handleMouseLeave);
    }, [hasShown]);

    if (!isVisible && !submitted) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsVisible(false)}
                        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-lg glass-dark rounded-[2.5rem] border-white/10 p-8 md:p-12 overflow-hidden shadow-2xl"
                    >
                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/5 transition-colors"
                        >
                            <X className="w-5 h-5 text-slate-500" />
                        </button>

                        <div className="relative z-10 text-center">
                            {!submitted ? (
                                <>
                                    <div className="w-20 h-20 bg-accent-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8 rotate-3">
                                        <Gift className="w-10 h-10 text-accent-primary" />
                                    </div>
                                    <h2 className="text-3xl font-bold mb-4 text-white">Wait! Don't Leave Yet</h2>
                                    <p className="text-slate-400 mb-8 text-lg">
                                        Get our <span className="text-white font-semibold">"2026 AI Automation Checklist"</span> for B2B Founders. Free for the next 48 hours.
                                    </p>

                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            setSubmitted(true);
                                            setTimeout(() => setIsVisible(false), 3000);
                                        }}
                                        className="space-y-4"
                                    >
                                        <input
                                            type="email"
                                            required
                                            placeholder="Enter your work email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-accent-primary/20 focus:border-accent-primary/50 transition-all font-medium"
                                        />
                                        <button className="button-primary w-full py-5 group">
                                            Send Me The Checklist
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </form>
                                    <p className="text-xs text-slate-500 mt-6">
                                        Join 1,200+ founders receiving weekly automation insights.
                                    </p>
                                </>
                            ) : (
                                <div className="py-12">
                                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle className="w-10 h-10 text-green-400" />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4 text-white">Sent Success!</h3>
                                    <p className="text-slate-400">Check your inbox. The checklist is on its way.</p>
                                </div>
                            )}
                        </div>

                        {/* Background Glows */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/20 blur-[80px] -mr-32 -mt-32 rounded-full"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-secondary/10 blur-[60px] -ml-24 -mb-24 rounded-full"></div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
