import React from 'react';
import { Shield, Clock, BarChart3, Lock, Zap, Smartphone } from 'lucide-react';
import Card from '../components/Card';

const Services = () => {
    const services = [
        {
            title: "Behavioral Awareness AI",
            description: "Our flagship system detects signs of aggression, bullying, or distress in real-time, alerting staff instantly so they can de-escalate situations before they become incidents.",
            icon: Shield
        },
        {
            title: "Smart Contactless Attendance",
            description: "Face recognition technology that marks attendance as students enter the classroom. Fast, hygienic, and eliminates manual roll calls, saving up to 15 minutes per day.",
            icon: Clock
        },
        {
            title: "Operational Analytics Dashboard",
            description: " gain actionable insights into school operations, flow, and safety trends. Make data-driven decisions to optimize resource allocation.",
            icon: BarChart3
        },
        {
            title: "Secure Access Control",
            description: "Integrate with existing door systems to automate access for authorized staff and students, keeping unauthorized visitors out.",
            icon: Lock
        },
        {
            title: "Emergency Response Integration",
            description: "One-tap emergency alerts that instantly notify security, administration, and first responders with precise location data.",
            icon: Zap
        },
        {
            title: "Parent & Staff Apps",
            description: "Mobile applications for parents to receive reassured notifications and for staff to manage alerts and attendance on the go.",
            icon: Smartphone
        }
    ];

    return (
        <div className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Intelligent Solutions for Modern Schools</h1>
                    <p className="text-xl text-slate-600">
                        A comprehensive suite of tools designed to work together seamlessly, creating a safer and more efficient educational environment.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            {...service}
                            delay={index * 0.1}
                            className="hover:-translate-y-1 transition-transform"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
