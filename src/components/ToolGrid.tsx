import { motion } from 'framer-motion';
import {
    Slack,
    Mail,
    MessageSquare,
    Database,
    Calendar,
    Github,
    Chrome,
    Cloud,
    FileText,
    CreditCard,
    Target
} from 'lucide-react';

const tools = [
    { name: 'Slack', icon: Slack, color: 'text-[#4A154B]', desc: 'Automate notifications and team reporting' },
    { name: 'HubSpot', icon: Target, color: 'text-[#FF7A59]', desc: 'Sync leads and update deal stages automatically' },
    { name: 'Gmail', icon: Mail, color: 'text-[#EA4335]', desc: 'Automated follow-ups and inbox sorting' },
    { name: 'Notion', icon: FileText, color: 'text-white', desc: 'Auto-generate docs and database entries' },
    { name: 'Stripe', icon: CreditCard, color: 'text-[#635BFF]', desc: 'Sync payments and financial reporting' },
    { name: 'Calendly', icon: Calendar, color: 'text-[#006BFF]', desc: 'Automated booking workflows' },
    { name: 'Google Sheets', icon: Database, color: 'text-[#34A853]', desc: 'Real-time data logging and synchronization' },
    { name: 'GitHub', icon: Github, color: 'text-white', desc: 'CI/CD and development workflow automation' },
    { name: 'WhatsApp', icon: MessageSquare, color: 'text-[#25D366]', desc: 'Automated customer communications' },
    { name: 'Typeform', icon: FileText, color: 'text-white', desc: 'Process form entries with AI logic' },
    { name: 'Salesforce', icon: Cloud, color: 'text-[#00A1E0]', desc: 'Enterprise-grade CRM automation' },
    { name: 'LinkedIn', icon: Chrome, color: 'text-[#0A66C2]', desc: 'Lead generation and outreach systems' },
];

export const ToolGrid = () => {
    return (
        <div className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                    Integrates With Your <span className="text-gradient">Favorite Tools</span>
                </h2>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                    We don't build islands. We build bridges between the tools you already use every day.
                </p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {tools.map((tool, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="group relative"
                    >
                        <div className="aspect-square p-6 rounded-2xl glass-dark border-white/5 flex flex-col items-center justify-center gap-4 hover:border-accent-primary/50 transition-colors duration-500">
                            <tool.icon className={`w-8 h-8 ${tool.color} group-hover:scale-110 transition-transform duration-500`} />
                            <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors">
                                {tool.name}
                            </span>
                        </div>

                        {/* Tooltip */}
                        <div className="absolute inset-x-0 bottom-full mb-4 z-50 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300">
                            <div className="bg-slate-900 border border-white/10 p-3 rounded-xl shadow-2xl text-xs text-slate-300 text-center backdrop-blur-md">
                                {tool.desc}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-900"></div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
