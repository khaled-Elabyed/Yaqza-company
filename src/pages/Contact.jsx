import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => setIsSubmitted(true), 1000);
    };

    return (
        <div className="py-20 bg-brand-bg">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100">

                    {/* Contact Info */}
                    <div className="bg-brand-primary p-12 text-white flex flex-col justify-between">
                        <div>
                            <h1 className="text-3xl font-bold mb-6">Get in Touch</h1>
                            <p className="text-indigo-100 mb-8 max-w-sm">
                                Interested in bringing Yaqza to your school? Have questions about privacy? unique needs? We're here to help.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <MapPin className="w-6 h-6 text-brand-secondary" />
                                    <span>123 Innovation Drive,<br />Tech City, TC 90210</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Mail className="w-6 h-6 text-brand-secondary" />
                                    <span>hello@yaqza.ai</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Phone className="w-6 h-6 text-brand-secondary" />
                                    <span>+1 (555) 123-4567</span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-12">
                            <p className="text-sm text-indigo-200">Support Hours: Mon-Fri, 9am - 6pm EST</p>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="p-12">
                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="h-full flex flex-col justify-center items-center text-center"
                            >
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                                    <Send className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-2">Message Sent!</h3>
                                <p className="text-slate-600">Thank you for contacting us. We will get back to you shortly.</p>
                                <Button
                                    variant="outline"
                                    className="mt-6"
                                    onClick={() => setIsSubmitted(false)}
                                >
                                    Send Another
                                </Button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all"
                                        placeholder="Your Name"
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all"
                                        placeholder="you@school.edu"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                                    <textarea
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all resize-none"
                                        placeholder="How can we help?"
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    />
                                </div>
                                <Button type="submit" variant="primary" className="w-full">
                                    Send Message
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
