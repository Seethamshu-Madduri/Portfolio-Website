import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data/resume";

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-black transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Technical Skills
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {resumeData.skills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-gray-900 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-800"
                        >
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                                {skillGroup.category}
                            </h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {skillGroup.items.map((skill, i) => {
                                    const isObject = typeof skill === 'object';
                                    const name = isObject ? skill.name : skill;
                                    const icon = isObject ? skill.icon : null;

                                    return (
                                        <span
                                            key={i}
                                            className={`px-4 py-2 bg-gray-800 rounded-lg text-sm font-medium border flex items-center gap-2 transition-all hover:-translate-y-1 hover:shadow-lg ${isObject
                                                    ? "border-red-500 text-white shadow-red-500/20"
                                                    : "border-gray-700 text-blue-400"
                                                }`}
                                        >
                                            {icon && <img src={icon} alt={name} className="w-5 h-5 object-contain" />}
                                            {name}
                                        </span>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
