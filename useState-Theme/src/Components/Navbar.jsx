import React, { useState } from "react";
import { Sun, Moon } from "lucide-react";

const Navbar = ({ theme, changeTheme }) => {

    return (
        <nav className="bg-blue-900 dark:bg-gray-500 text-white px-6 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">

                <div className="text-xl font-bold">
                    Ravinder
                </div>

                <ul className="flex gap-8 font-medium">
                    <li className="hover:text-gray-400 cursor-pointer">Home</li>
                    <li className="hover:text-gray-400 cursor-pointer">About</li>
                    <li className="hover:text-gray-400 cursor-pointer">Services</li>
                    <li className="hover:text-gray-400 cursor-pointer">Contact</li>
                    <li className="cursor-pointer">
                        <button onClick={changeTheme}>{theme == 'light' ? <Moon /> : <Sun />}</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;