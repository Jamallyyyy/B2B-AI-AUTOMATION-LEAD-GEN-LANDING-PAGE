interface BeamCardProps {
    children: React.ReactNode;
    className?: string;
}

export const BeamCard: React.FC<BeamCardProps> = ({ children, className = "" }) => {
    return (
        <div className={`relative group p-[1px] overflow-hidden rounded-2xl ${className}`}>
            {/* Beam Effect */}
            <div className="absolute inset-x-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-accent-primary to-transparent -translate-x-full group-hover:animate-beam pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-accent-primary to-transparent -translate-y-full group-hover:animate-beam-v pointer-events-none [animation-delay:0.5s]"></div>
            <div className="absolute inset-x-0 bottom-0 h-px w-full bg-gradient-to-r from-transparent via-accent-primary to-transparent translate-x-full group-hover:animate-beam-reverse pointer-events-none [animation-delay:1s]"></div>
            <div className="absolute inset-y-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-accent-primary to-transparent translate-y-full group-hover:animate-beam-v-reverse pointer-events-none [animation-delay:1.5s]"></div>

            <div className="relative h-full w-full glass-dark rounded-2xl p-8 transition-colors duration-500 group-hover:bg-slate-900/80">
                {children}
            </div>
        </div>
    );
};
