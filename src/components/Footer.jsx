import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone, Eye } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-brand-dark text-slate-300 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center space-x-2 text-white">
                            <div className="bg-brand-secondary p-1.5 rounded-lg text-white">
                                <Eye className="w-5 h-5" />
                            </div>
                            <span className="text-xl font-bold">Yaqza</span>
                        </Link>
                        <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
                            Empowering schools with ethical AI for safety, awareness, and operational excellence. Safe. Smart. Secure.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="https://www.linkedin.com/company/يقظة/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="hover:text-brand-secondary transition-colors"><Linkedin className="w-5 h-5" /></a>
                            <a href="https://www.facebook.com/profile.php?id=61585465283602" target="_blank" rel="noopener noreferrer" className="hover:text-brand-secondary transition-colors"><Facebook className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/about" className="hover:text-brand-secondary transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-brand-secondary transition-colors">Our Services</Link></li>
                            <li><Link to="/contact" className="hover:text-brand-secondary transition-colors">Contact Support</Link></li>
                            <li><Link to="#" className="hover:text-brand-secondary transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Solutions</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/services" className="hover:text-brand-secondary transition-colors">School Safety AI</Link></li>
                            <li><Link to="/services" className="hover:text-brand-secondary transition-colors">Smart Attendance</Link></li>
                            <li><Link to="/services" className="hover:text-brand-secondary transition-colors">Behavioral Analytics</Link></li>
                            <li><Link to="/services" className="hover:text-brand-secondary transition-colors">Access Control</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-4 h-4 mt-1 text-brand-secondary" />
                                <span>123 Innovation Drive,<br />Tech City, TC 90210</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="w-4 h-4 text-brand-secondary" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="w-4 h-4 mb-0.5 text-brand-secondary" />
                                <span>hello@yaqza.ai</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Yaqza Technologies. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Terms</a>
                        <a href="#" className="hover:text-white">Privacy</a>
                        <a href="#" className="hover:text-white">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
