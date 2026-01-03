import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data/resume";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-black transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Get In Touch
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-800">
                    {/* Contact Info */}
                    <div className="w-full md:w-5/12 bg-primary p-8 text-white flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <Mail className="w-6 h-6 mt-1 opacity-80" />
                                    <div>
                                        <p className="text-sm opacity-80 mb-1">Email Me</p>
                                        <p className="font-medium">{resumeData.personalInfo.email}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Phone className="w-6 h-6 mt-1 opacity-80" />
                                    <div>
                                        <p className="text-sm opacity-80 mb-1">Call Me</p>
                                        <p className="font-medium">{resumeData.personalInfo.phone}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-6 h-6 mt-1 opacity-80" />
                                    <div>
                                        <p className="text-sm opacity-80 mb-1">Location</p>
                                        <p className="font-medium">{resumeData.personalInfo.location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <p className="text-sm opacity-70">
                                Check out my projects on the portfolio or reach out directly to discuss potential collaborations.
                            </p>
                        </div>
                    </div>

                    {/* Simple Form (placeholder functionality) */}
                    <div className="w-full md:w-7/12 p-8 md:p-12">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Doe" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                                <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                                <textarea rows="4" className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Your message here..."></textarea>
                            </div>

                            <button className="w-full py-3 px-6 bg-primary text-white font-medium rounded-lg hover:bg-blue-600 transition-colors shadow-lg flex items-center justify-center gap-2">
                                <Send className="w-5 h-5" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
