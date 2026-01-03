import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 py-6 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center text-gray-600 dark:text-gray-400">
                    <p>© {new Date().getFullYear()} Seethamshu Madduri. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
