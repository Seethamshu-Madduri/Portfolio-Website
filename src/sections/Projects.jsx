import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data/resume";
import { Github, ExternalLink, Code } from "lucide-react";

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-black transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Featured Projects
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resumeData.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800 transition-all duration-300 ease-in-out hover:-translate-y-[6px] hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)] flex flex-col"
                        >
                            {/* Fallback image or project category banner */}
                            <div className="h-48 bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                                <Code className="text-white w-12 h-12 opacity-80 group-hover:scale-110 transition-transform duration-500" />
                                <span className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/30">
                                    {project.category}
                                </span>
                            </div>

                            <div className="p-6 flex flex-col flex-grow relative">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 flex-grow opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.techStack.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded border border-gray-700"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                    <a
                                        href="#"
                                        className="relative px-4 py-2 rounded-lg font-medium text-sm text-gray-300 bg-gray-800 overflow-hidden group/btn shadow-sm"
                                    >
                                        <div className="absolute inset-0 w-full h-full bg-primary transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 ease-out"></div>
                                        <span className="relative flex items-center group-hover/btn:text-white transition-colors duration-300">
                                            <Github className="w-4 h-4 mr-2" />
                                            Code
                                        </span>
                                    </a>
                                    <a
                                        href="#"
                                        className="relative px-4 py-2 rounded-lg font-medium text-sm text-gray-300 bg-gray-800 overflow-hidden group/btn shadow-sm"
                                    >
                                        <div className="absolute inset-0 w-full h-full bg-primary transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 ease-out"></div>
                                        <span className="relative flex items-center group-hover/btn:text-white transition-colors duration-300">
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            Demo
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
