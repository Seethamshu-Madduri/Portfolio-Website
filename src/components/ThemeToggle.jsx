import React from "react";
// We need to install react-icons later: npm install react-icons
// For now using simple text if icons missing, but better to include icons in plan.
import { Moon, Sun } from "lucide-react"; // Using lucide-react (standard in modern stacks) or react-icons

const ThemeToggle = ({ theme, toggleTheme }) => {
    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle Theme"
        >
            {theme === "dark" ? (
                <Sun className="w-6 h-6 text-yellow-500" />
            ) : (
                <Moon className="w-6 h-6 text-slate-800" />
            )}
        </button>
    );
};

export default ThemeToggle;
