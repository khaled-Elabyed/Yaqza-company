import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, EyeOff } from 'lucide-react';
import Card from '../components/Card';
import Team from '../components/Team';

const About = () => {
    return (
        <div className="py-20 bg-brand-bg">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">More Than Technology.<br />A Commitment to Care.</h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Yaqza was born from a simple belief: <span className="text-brand-primary font-semibold">Schools should be safe havens, not fortresses.</span> We use advanced AI to protect students while preserving the open, nurturing environment essential for learning.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
                    >
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h2>
                        <p className="text-slate-600 mb-4">To create a world where every student feels safe, seen, and supported, and where educators are empowered with the insights they need to foster a positive school culture.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
                    >
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
                        <p className="text-slate-600 mb-4">We develop ethical, privacy-first AI solutions that solve real-world operational and safety challenges in schools, from automated attendance to real-time behavioral awareness.</p>
                    </motion.div>
                </div>

                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-slate-900 mb-10">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card
                            title="Empathy First"
                            description="We design for humans, not just users. Our technology is built to support the emotional and physical well-being of students."
                            icon={Heart}
                        />
                        <Card
                            title="Radical Privacy"
                            description="We believe privacy is a fundamental right. Our systems are designed to minimize data retention and maximize security."
                            icon={EyeOff}
                        />
                        <Card
                            title="Community Driven"
                            description="We work closely with educators, parents, and administrators to ensure our tools meet the real needs of the school community."
                            icon={Users}
                        />
                    </div>
                </div>

                <Team />
            </div>
        </div>
    );
};

export default About;
