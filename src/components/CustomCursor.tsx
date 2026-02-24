import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [isHovering, setIsHovering] = useState(false);

    const springConfig = { stiffness: 450, damping: 50 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX - 10);
            mouseY.set(e.clientY - 10);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('.group') ||
                target.closest('input') ||
                target.closest('[role="button"]')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-5 h-5 bg-accent-primary/40 backdrop-blur-sm rounded-full pointer-events-none z-[100] border border-accent-primary/50 hidden md:block"
            style={{
                x: cursorX,
                y: cursorY,
                scale: isHovering ? 2.5 : 1,
            }}
            transition={{ scale: { type: "spring", stiffness: 300, damping: 20 } }}
        />
    );
};
