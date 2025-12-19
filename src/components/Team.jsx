import React from 'react';
import { Link } from 'react-router-dom';
import TeamCard from './TeamCard';
import imgKhaled from '../assets/WhatsApp Image 2025-12-19 at 12.37.54 AM.jpeg';
import imgYoussef from '../assets/WhatsApp Image 2025-12-19 at 12.36.35 AM.jpeg';
import imgMostafa from '../assets/WhatsApp Image 2025-12-19 at 12.38.35 AM.jpeg';
import imgAhmed from '../assets/WhatsApp Image 2025-12-19 at 12.35.59 AM.jpeg';


const teamMembers = [
    {
        name: "Khaled Elabyed",
        role: "Fullstack Developer",
        github: "https://github.com/khaled-Elabyed/",
        linkedin: "https://www.linkedin.com/in/khaled-elabyed-904b83257/",
        photo: imgKhaled
    },
    {
        name: "Abd Elkhalek Mohamed",
        role: "AI Engineer",
        github: "https://github.com/abdelkhalek-soudy",
        linkedin: "https://www.linkedin.com/in/abdelkhalek-soudy-337b35286/",
        photo: null
    },
    {
        name: "Mostafa Elroby",
        role: "Sales & Marketing",
        github: "#",
        linkedin: "https://www.linkedin.com/in/%D9%85%D8%B5%D8%B7%D9%81%D9%89-%D8%A7%D9%84%D8%B1%D9%88%D8%A8%D9%8A-89a10a273/",
        photo: imgMostafa
    },
    {
        name: "Ahmed Abdullah",
        role: "Cyber Security",
        github: "#",
        linkedin: "#",
        photo: imgAhmed
    },
    {
        name: "Youssef",
        role: "Business Developer",
        github: "#",
        linkedin: "#",
        photo: imgYoussef
    }
];

const Team = ({ limit, showAction }) => {
    const displayedMembers = limit ? teamMembers.slice(0, limit) : teamMembers;

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        The passionate minds behind Yaqza's ethical AI revolution.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {displayedMembers.map((member, index) => (
                        <TeamCard
                            key={index}
                            {...member}
                            delay={index * 0.1}
                        />
                    ))}
                </div>

                {showAction && (
                    <div className="text-center">
                        <Link to="/about" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-brand-primary text-white font-medium hover:bg-brand-dark transition-colors shadow-lg shadow-brand-primary/20">
                            See All Team
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Team;
