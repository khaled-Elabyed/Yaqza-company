import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Clock, ArrowRight, Brain, Lock } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import Team from '../components/Team';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-20 md:pt-32 md:pb-32 bg-gradient-to-br from-brand-bg to-brand-primary/5">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-semibold mb-6">
                                Ethical AI for Modern Schools
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
                                Real-time Awareness for <span className="text-brand-primary">Safer Schools</span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                                Yaqza provides intelligent, privacy-first solutions to enhance school safety, automate attendance, and improve operational efficiency without compromising trust.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link to="/contact">
                                    <Button variant="primary" className="w-full sm:w-auto text-lg h-12">
                                        Get Started <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </Link>
                                <Link to="/services">
                                    <Button variant="outline" className="w-full sm:w-auto text-lg h-12">
                                        Explore Solutions
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Abstract Background Element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-3xl -z-10" />
            </section>

            {/* Value Proposition / Features */}
            <section className="py-20 md:py-32 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Yaqza?</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Our platform is built on three core pillars: Safety, Efficiency, and Ethics. We believe technology should serve education, not survey it.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card
                            title="Proactive Safety"
                            description="Detect potential behavioral issues like bullying or aggression in real-time, allowing staff to intervene early and respectfully."
                            icon={Shield}
                            delay={0.1}
                        />
                        <Card
                            title="Seamless Attendance"
                            description="Automate attendance taking with contactless facial recognition that respects student privacy and saves valuable teaching time."
                            icon={Clock}
                            delay={0.2}
                        />
                        <Card
                            title="Privacy First"
                            description="Your data stays yours. We use edge processing and advanced encryption to ensure student data is never compromised or claimed."
                            icon={Lock}
                            delay={0.3}
                        />
                    </div>
                </div>
            </section>

            {/* Team Preview */}
            <Team limit={3} showAction={true} />

            {/* Trust/Mission Banner */}
            <section className="py-20 bg-brand-primary text-white overflow-hidden relative">
                <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for Education, rooted in Ethics.</h2>
                        <p className="text-brand-subtle/80 text-lg mb-8 leading-relaxed text-indigo-100">
                            We distinguish between safety and surveillance. Yaqza is designed to be invisible, helpful, and non-intrusive, fostering a supportive environment where students can thrive.
                        </p>
                        <Link to="/about">
                            <Button variant="secondary" className="hover:bg-teal-500">Learn About Our Mission</Button>
                        </Link>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        {/* Visual Representation */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-secondary blur-2xl opacity-20" />
                            <Brain className="w-64 h-64 text-indigo-300/20" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
