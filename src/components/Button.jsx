import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const Button = ({ children, variant = 'primary', className, ...props }) => {
    const baseStyles = 'inline-flex items-center justify-center px-6 py-2.5 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-brand-primary text-white hover:bg-brand-dark focus:ring-brand-primary shadow-lg shadow-brand-primary/20',
        secondary: 'bg-brand-secondary text-white hover:bg-teal-600 focus:ring-brand-secondary shadow-lg shadow-brand-secondary/20',
        outline: 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary/5 focus:ring-brand-primary',
        ghost: 'text-brand-subtle hover:text-brand-primary hover:bg-slate-100',
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={twMerge(baseStyles, variants[variant], className)}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
