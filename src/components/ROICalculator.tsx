import { useState, useEffect } from 'react';
import { animate } from 'framer-motion';
import { Clock, DollarSign, Zap, ArrowRight } from 'lucide-react';

const AnimatedCounter = ({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const controls = animate(displayValue, value, {
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (latest) => setDisplayValue(latest),
        });
        return () => controls.stop();
    }, [value]);

    return (
        <span className="font-display font-bold">
            {prefix}{Math.floor(displayValue).toLocaleString()}{suffix}
        </span>
    );
};

export const ROICalculator = () => {
    const [hoursWasted, setHoursWasted] = useState(15);
    const [laborCost, setLaborCost] = useState(65);
    const [efficiencyGain, setEfficiencyGain] = useState(80);

    const annualSavings = hoursWasted * laborCost * 52 * (efficiencyGain / 100);
    const hoursSavedYear = hoursWasted * 52 * (efficiencyGain / 100);

    return (
        <div className="w-full max-w-5xl mx-auto">
            <div className="relative p-8 md:p-12 rounded-[2.5rem] glass-dark border-white/5 overflow-hidden group">
                {/* Animated Background Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-primary/10 blur-[120px] -mr-64 -mt-64 rounded-full group-hover:bg-accent-primary/20 transition-colors duration-700"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-secondary/5 blur-[100px] -ml-48 -mb-48 rounded-full"></div>

                <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                    {/* Controls */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                                Calculate Your <span className="text-gradient">Efficiency Gap</span>
                            </h2>
                            <p className="text-slate-400 text-lg">
                                See exactly how much manual work is costing your operations every year.
                            </p>
                        </div>

                        <div className="space-y-10">
                            <div className="space-y-6">
                                <div className="flex justify-between items-end">
                                    <label className="text-slate-200 font-medium flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-accent-primary" />
                                        Team Hours Wasted / Week
                                    </label>
                                    <span className="text-2xl font-bold text-white bg-white/5 px-4 py-1 rounded-lg border border-white/10">
                                        {hoursWasted}h
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min="5"
                                    max="100"
                                    step="5"
                                    value={hoursWasted}
                                    onChange={(e) => setHoursWasted(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-accent-primary"
                                />
                                <div className="flex justify-between text-xs text-slate-500 font-medium uppercase tracking-wider">
                                    <span>5 Hours</span>
                                    <span>100 Hours</span>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex justify-between items-end">
                                    <label className="text-slate-200 font-medium flex items-center gap-2">
                                        <DollarSign className="w-4 h-4 text-accent-secondary" />
                                        Avg. Hourly Cost (Labor)
                                    </label>
                                    <span className="text-2xl font-bold text-white bg-white/5 px-4 py-1 rounded-lg border border-white/10">
                                        ${laborCost}
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min="20"
                                    max="250"
                                    step="5"
                                    value={laborCost}
                                    onChange={(e) => setLaborCost(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-accent-secondary"
                                />
                                <div className="flex justify-between text-xs text-slate-500 font-medium uppercase tracking-wider">
                                    <span>$20/hr</span>
                                    <span>$250/hr</span>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex justify-between items-end">
                                    <label className="text-slate-200 font-medium flex items-center gap-2">
                                        <Zap className="w-4 h-4 text-yellow-400" />
                                        Target Efficiency Gain
                                    </label>
                                    <span className="text-2xl font-bold text-white bg-white/5 px-4 py-1 rounded-lg border border-white/10">
                                        {efficiencyGain}%
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min="10"
                                    max="95"
                                    step="5"
                                    value={efficiencyGain}
                                    onChange={(e) => setEfficiencyGain(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                                />
                                <div className="flex justify-between text-xs text-slate-500 font-medium uppercase tracking-wider">
                                    <span>10% Low</span>
                                    <span>95% High</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Results */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-accent-primary/20 blur-[60px] rounded-full scale-75 opacity-50"></div>
                        <div className="relative p-1 bg-gradient-to-br from-white/10 to-transparent rounded-[2rem]">
                            <div className="bg-slate-950/80 backdrop-blur-xl p-8 md:p-10 rounded-[1.9rem] space-y-8">
                                <div>
                                    <p className="text-slate-500 font-medium uppercase tracking-widest text-sm mb-2">
                                        Potential Annual Savings
                                    </p>
                                    <div className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
                                        <AnimatedCounter value={annualSavings} prefix="$" />
                                    </div>
                                </div>

                                <div className="h-px bg-white/5 w-full"></div>

                                <div className="grid grid-cols-2 gap-8">
                                    <div>
                                        <p className="text-slate-500 font-medium uppercase tracking-widest text-xs mb-2">
                                            Hours Reclaimed / Yr
                                        </p>
                                        <div className="text-2xl md:text-3xl font-bold text-accent-secondary">
                                            <AnimatedCounter value={hoursSavedYear} suffix=" hrs" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-slate-500 font-medium uppercase tracking-widest text-xs mb-2">
                                            ROI Multiplier
                                        </p>
                                        <div className="text-2xl md:text-3xl font-bold text-yellow-400">
                                            {(efficiencyGain / 15).toFixed(1)}x
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <button className="button-primary w-full group py-5">
                                        Claim These Savings
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <p className="text-center text-slate-500 text-xs mt-4">
                                        Based on standard 52-week operational year
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
