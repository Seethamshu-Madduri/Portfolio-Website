import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data/resume";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Experience
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto"></div>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {resumeData.experience.map((exp, index) => (
                        <div key={index} className="relative pl-8 md:pl-0">
                            {/* Timeline Line (Desktop) */}
                            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>

                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className={`flex flex-col md:flex-row items-center justify-between mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-gray-800 transform md:-translate-x-1/2 mt-1.5 md:mt-0"></div>

                                {/* Content Width 50% */}
                                <div className="w-full md:w-5/12">
                                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Briefcase className="w-4 h-4 text-primary" />
                                            <h3 className="font-bold text-lg text-gray-900 dark:text-white">{exp.role}</h3>
                                        </div>
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{exp.company}</p>
                                        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-4">
                                            <Calendar className="w-3 h-3" />
                                            <span>{exp.duration}</span>
                                        </div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Spacer for the other side */}
                                <div className="w-full md:w-5/12 hidden md:block"></div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
