import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data/resume";
import { ArrowDown } from "lucide-react";

const Hero = () => {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-slate-900 overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] right-[-5%] w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-50 dark:opacity-20 animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-72 h-72 bg-purple-500/20 rounded-full blur-3xl opacity-50 dark:opacity-20 animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-2xl font-medium text-primary mb-4">
                        Hello, I'm
                    </h2>
                    <div className="relative inline-block mb-6">
                        <motion.h1
                            initial={{ opacity: 0.1, backgroundPosition: "0% 50%" }}
                            animate={{ opacity: 1, backgroundPosition: "100% 50%" }}
                            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
                            className="text-5xl md:text-7xl font-bold tracking-tight font-tech text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-900 to-gray-500 dark:from-gray-400 dark:via-white dark:to-gray-400 bg-300%"
                        >
                            {resumeData.personalInfo.name}
                        </motion.h1>
                        <motion.div
                            initial={{ scaleX: 0, originX: 0 }}
                            animate={{ scaleX: [0, 1, 1, 0], originX: ["0%", "0%", "100%", "100%"] }}
                            transition={{ duration: 1.5, ease: "easeInOut", times: [0, 0.4, 0.6, 1] }}
                            className="absolute inset-0 bg-primary/20 dark:bg-blue-500/20 z-10"
                        />
                    </div>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                        {resumeData.personalInfo.role}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:border-primary hover:text-primary dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
            >
                <a href="#about" className="text-gray-400 hover:text-primary transition-colors">
                    <ArrowDown size={32} />
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
