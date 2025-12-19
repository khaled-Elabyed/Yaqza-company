import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, User } from 'lucide-react';
import clsx from 'clsx';

const TeamCard = ({ name, role, github, linkedin, photo, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 group"
        >
            <div className="aspect-square bg-slate-100 relative overflow-hidden">
                {photo ? (
                    <img
                        src={photo}
                        alt={name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://via.placeholder.com/400x400?text=Member"; // Fallback
                            e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-slate-200');
                        }}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-400">
                        <User className="w-20 h-20" />
                    </div>
                )}

                {/* Overlay with links (optional style choice, keeping it clean for now) */}
            </div>

            <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{name}</h3>
                <p className="text-brand-primary font-medium mb-4">{role}</p>

                <div className="flex justify-center space-x-4">
                    {github && github !== '#' && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-brand-dark transition-colors"
                            aria-label={`${name}'s GitHub`}
                        >
                            <Github className="w-5 h-5" />
                        </a>
                    )}
                    {linkedin && linkedin !== '#' && (
                        <a
                            href={linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-brand-primary transition-colors"
                            aria-label={`${name}'s LinkedIn`}
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default TeamCard;
