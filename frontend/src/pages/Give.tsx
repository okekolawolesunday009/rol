import { useState } from 'react';
import Section from "../components/SectionProp";
import ProjectCard from '../components/ProjectCard';
import { projects, type Project } from '../data/projects';

export default function GivePage() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <div>
            {/* Hero Section */}
            <Section bgColor="bg-gradient-to-br from-red-600 to-rose-700 relative py-20">
                <div className="max-w-4xl mx-auto px-6 md:px-8 py-12 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 italic tracking-tight">
                        Give with Purpose
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
                        Your generosity fuels our ministry. Choose a project below and invest in the vision God has given us.
                    </p>
                </div>
            </Section>

            {/* Projects Grid Section */}
            <Section bgColor="bg-slate-950" className="py-24">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="flex flex-col gap-8">
                        {/* Section Header */}
                        <div className="flex flex-col gap-3 md:gap-0 md:flex-row md:items-end md:justify-between">
                            <div>
                                <span className="text-orange-500 font-label text-sm tracking-[0.3em] uppercase mb-3 block">
                                    Select a Project
                                </span>
                                <h2 className="font-headline text-4xl md:text-5xl italic text-white">
                                    Different ministries, one mission
                                </h2>
                            </div>
                            <p className="max-w-xl text-sm md:text-base text-slate-300 leading-relaxed">
                                Each project has a unique account number for tracking your contribution to specific ministries.
                            </p>
                        </div>

                        {/* Projects Grid */}
                        <div className="relative mt-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {projects.map((project) => (
                                    <ProjectCard 
                                        key={project.id} 
                                        project={project}
                                        onSelect={setSelectedProject}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Selected Project Details / Donation Info */}
            {selectedProject && (
                <Section bgColor="bg-slate-900 border-t border-slate-700" className="py-16">
                    <div className="max-w-4xl mx-auto px-6 md:px-8">
                        <div className={`rounded-2xl p-8 md:p-12 ${selectedProject.colorClass}`}>
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                        {selectedProject.title}
                                    </h3>
                                    <p className="text-white/80">Giving to: {selectedProject.goal}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors duration-200 text-white font-semibold"
                                >
                                    Close
                                </button>
                            </div>

                            <p className="text-white/90 mb-8 text-lg leading-relaxed">
                                {selectedProject.description}
                            </p>

                            {/* Account Information Box */}
                            <div className="bg-black/30 rounded-xl p-8 border border-white/10 mb-8">
                                <p className="text-white/60 text-sm uppercase tracking-[0.2em] mb-3">
                                    Account Number for This Project
                                </p>
                                <div className="flex items-center gap-4 mb-4">
                                    <code className="text-2xl md:text-3xl font-mono font-bold text-white bg-white/10 px-6 py-3 rounded-lg flex-1">
                                        {selectedProject.accountNumber}
                                    </code>
                                    <button
                                        onClick={() => {
                                            navigator.clipboard.writeText(selectedProject.accountNumber);
                                            alert('Account number copied to clipboard!');
                                        }}
                                        className="px-4 py-3 rounded-lg bg-white/25 hover:bg-white/35 transition-colors duration-200 text-white font-semibold whitespace-nowrap"
                                    >
                                        Copy
                                    </button>
                                </div>
                                <p className="text-white/70 text-sm">
                                    Use this account number when making your donation to ensure your gift supports this specific project.
                                </p>
                            </div>

                            {/* Donation Methods */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <a
                                    href="#"
                                    className="px-6 py-4 rounded-lg bg-white text-black font-bold hover:bg-white/90 transition-colors duration-200 text-center"
                                >
                                    Give Online
                                </a>
                                <a
                                    href="#"
                                    className="px-6 py-4 rounded-lg bg-white/20 border border-white text-white font-bold hover:bg-white/30 transition-colors duration-200 text-center"
                                >
                                    Bank Transfer
                                </a>
                                <a
                                    href="#"
                                    className="px-6 py-4 rounded-lg bg-white/20 border border-white text-white font-bold hover:bg-white/30 transition-colors duration-200 text-center"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </Section>
            )}

            {/* HowTo Give Section */}
            <Section bgColor="bg-slate-950" className="py-24">
                <div className="max-w-4xl mx-auto px-6 md:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 italic">How to Give</h2>
                        <p className="text-slate-300 text-lg">Multiple ways to support our ministry</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Online Giving',
                                description: 'Fast, secure, and convenient. Give online with your credit card or bank account.',
                                icon: '💳',
                            },
                            {
                                title: 'Mobile App',
                                description: 'Download our app to give on the go with just a few taps.',
                                icon: '📱',
                            },
                            {
                                title: 'In Person',
                                description: 'Give during our weekly services using the offering plate or visit our office.',
                                icon: '🏢',
                            },
                        ].map((method, idx) => (
                            <div key={idx} className="bg-slate-900 rounded-xl p-8 border border-slate-800 hover:border-slate-700 transition-colors duration-200">
                                <div className="text-5xl mb-4">{method.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-3">{method.title}</h3>
                                <p className="text-slate-300">{method.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
}