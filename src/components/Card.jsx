import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const Card = ({ title, description, icon: Icon, className, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={clsx(
                "bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100",
                className
            )}
        >
            {Icon && (
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 text-brand-primary">
                    <Icon className="w-6 h-6" />
                </div>
            )}
            <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
            <p className="text-slate-600 leading-relaxed">{description}</p>
        </motion.div>
    );
};

export default Card;
