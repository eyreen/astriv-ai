"use client";

import Link from 'next/link';
import ChatInterface from '@/pages/chat/page';
import { usePathname, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const id = searchParams?.get("id") || "";

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

    return (
        <>
            {/* Mobile Toggle Button */}
            <button
                onClick={toggleSidebar}
                className="fixed top-16 right-0 z-50 flex flex-col items-center justify-center w-8 h-8 bg-red-500 rounded-l-full shadow-lg lg:hidden"
            >
                <div className="w-5 h-0.5 bg-white mb-1 rounded"></div>
                <div className="w-5 h-0.5 bg-white mb-1 rounded"></div>
                <div className="w-5 h-0.5 bg-white rounded"></div>
            </button>

            {/* Sidebar */}
            <aside
                className={`bg-gray-900 text-gray-800 w-64 h-full fixed left-0 z-40 border-t border-r border-gray-600 transform transition-transform duration-300 ease-in-out ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } lg:translate-x-0`}
            >
                <div className="text-lg text-gray-400 px-6 py-6 font-bold">
                    Module Management
                </div>
                <nav>
                    <ul className="ml-2 mr-2">
                        <li>
                            <Link href={`/data-form`}>
                                <div className="flex items-center px-4 py-2 hover:bg-gradient-to-r from-red-600 to-red-400 hover:text-white hover:rounded-md font-bold text-md cursor-pointer text-gray-400">
                                    Data Form
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/context-analysis/page`}>
                                <div className="flex items-center px-4 py-2 hover:bg-gradient-to-r from-red-600 to-red-400 hover:text-white hover:rounded-md font-bold text-md cursor-pointer text-gray-400">
                                    Context Analysis
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/fact-gathering/page`}>
                                <div className="flex items-center px-4 py-2 hover:bg-gradient-to-r from-red-600 to-red-400 hover:text-white hover:rounded-md font-bold text-md cursor-pointer text-gray-400">
                                    Facts Gathering
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/fraud-detection/page`}>
                                <div className="flex items-center px-4 py-2 hover:bg-gradient-to-r from-red-600 to-red-400 hover:text-white hover:rounded-md font-bold text-md cursor-pointer text-gray-400">
                                    Fraud Detection
                                </div>
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Footer Sidebar Items */}
                <ul className="absolute bottom-0 w-full">
                    <hr className="border-t-1 border-zinc-600 my-4 w-[80%] mx-auto" />
                    <div className="ml-2 mr-2">
                        <li>
                            <Link href={`/corporate/${id}/profile`}>
                                <div className="flex items-center px-4 py-2 hover:bg-gradient-to-r from-red-600 to-red-400 hover:text-white hover:rounded-md font-bold text-md cursor-pointer text-gray-400">
                                    Profile
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/corporate/${id}/settings`}>
                                <div className="flex items-center px-4 py-2 hover:bg-gradient-to-r from-red-600 to-red-400 hover:text-white hover:rounded-md font-bold text-md cursor-pointer text-gray-400">
                                    Settings
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/corporate/${id}/help`}>
                                <div className="flex items-center px-4 py-2 hover:bg-gradient-to-r from-red-600 to-red-400 hover:text-white hover:rounded-md font-bold text-md cursor-pointer text-gray-400">
                                    Help
                                </div>
                            </Link>
                        </li>
                    </div>
                </ul>
            </aside>
        </>
    );
};

export default Sidebar;
