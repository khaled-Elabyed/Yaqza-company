import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, Eye } from 'lucide-react'; // Using Eye as a safe conceptual icon for Awareness/Yaqza
import clsx from 'clsx';
import Button from './Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={clsx(
                "fixed w-full z-50 transition-all duration-300",
                scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2 group">
                        <div className="bg-brand-primary p-2 rounded-xl text-white group-hover:bg-brand-dark transition-colors">
                            {/* Yaqza means awake/alert/aware. An eye or shield is appropriate. */}
                            <Eye className="w-6 h-6" />
                        </div>
                        <span className={clsx("text-2xl font-bold tracking-tight transition-colors", scrolled ? "text-brand-dark" : "text-brand-dark")}>
                            Yaqza
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={clsx(
                                    "text-sm font-medium transition-colors hover:text-brand-secondary",
                                    location.pathname === link.path ? "text-brand-primary" : "text-slate-600"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button variant="primary" size="sm" className="px-5 py-2">
                            Book Demo
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-slate-700 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-lg py-4 px-4 flex flex-col space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={clsx(
                                "text-base font-medium transition-colors hover:text-brand-secondary block p-2 rounded-lg hover:bg-slate-50",
                                location.pathname === link.path ? "text-brand-primary bg-slate-50" : "text-slate-600"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-2">
                        <Button variant="primary" className="w-full">
                            Book Demo
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
