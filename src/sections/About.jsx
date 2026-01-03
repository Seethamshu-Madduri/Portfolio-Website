import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data/resume";
import { MapPin, Mail, Phone } from "lucide-react";

const About = () => {
    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                >
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            About Me
                        </h2>
                        <div className="w-20 h-1 bg-primary mb-6"></div>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                            {resumeData.personalInfo.summary}
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center text-gray-600 dark:text-gray-400">
                                <MapPin className="w-5 h-5 mr-3 text-primary" />
                                <span>{resumeData.personalInfo.location}</span>
                            </div>
                            <div className="flex items-center text-gray-600 dark:text-gray-400">
                                <Mail className="w-5 h-5 mr-3 text-primary" />
                                <a href={`mailto:${resumeData.personalInfo.email}`} className="hover:text-primary transition-colors">
                                    {resumeData.personalInfo.email}
                                </a>
                            </div>
                            <div className="flex items-center text-gray-600 dark:text-gray-400">
                                <Phone className="w-5 h-5 mr-3 text-primary" />
                                <span>{resumeData.personalInfo.phone}</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3 translate-x-2 translate-y-2"></div>
                        <div className="relative bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
                            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Education</h3>
                            <div className="space-y-6">
                                {resumeData.education.map((edu, index) => (
                                    <div key={index} className="border-l-2 border-primary pl-4">
                                        <h4 className="font-medium text-gray-900 dark:text-white">{edu.degree}</h4>
                                        <p className="text-sm text-primary mb-1">{edu.institution}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{edu.duration}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
