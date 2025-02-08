import React from "react";
import Sidebar from "@/components/side-bar";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, RadialBarChart, RadialBar } from "recharts";

const fraudRiskData = [{ name: "Risk Level", uv: 85, fill: "#DC2626" }];
const disputeData = [
    { name: "Jan", disputes: 10 },
    { name: "Feb", disputes: 15 },
    { name: "Mar", disputes: 30 },
    { name: "Apr", disputes: 50 },
];

const responseTimeData = [{ name: "Response Time", value: 75 }];
const sentimentData = [
    { name: "Positive", value: 60, fill: "#16A34A" },
    { name: "Neutral", value: 30, fill: "#FACC15" },
    { name: "Negative", value: 10, fill: "#DC2626" },
];

const FraudDetectionDashboard: React.FC = () => {
    return (
        <div className="flex h-screen font-montserrat">
            <Sidebar />
            <div className="pl-72 bg-gray-100 w-full p-6 overflow-auto">
                <h1 className="text-xl font-bold text-gray-800">Fraud Detection & Reputation Dashboard</h1>
                <p className=" mb-6 text-gray-500 text-sm">A comprehensive feature covering fraud detection alerts, reputation scoring, and a behavioral analytics dashboard.</p>
                <div className="grid grid-cols-2 gap-6 mb-6">
                    {/* Seller Profile */}
                    <div className="relative border border-gray-300 bg-gray-50 p-4 rounded-lg shadow-md">
                        {/* Verified Seller Badge */}
                        <span className="absolute top-4 right-4 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-md border border-green-500">
                            Verified Seller
                        </span>

                        {/* First Row: Image & Name + Seller Role */}
                        <div className="flex items-center space-x-4 mb-2">
                            <img
                                src="https://play-lh.googleusercontent.com/hJGHtbYSQ0nCnoEsK6AGojonjELeAh_Huxg361mVrPmzdwm8Ots-JzEH5488IS2nojI"
                                alt="John Smith"
                                className="w-20 h-20 rounded-full"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-700">John Smith</h3>
                                <p className="text-sm text-gray-500">Seller</p>
                            </div>
                        </div>

                        {/* Second Row: Reputation Score */}
                        <p className="text-green-600 font-bold text-3xl">
                            92 <span className="text-gray-400 text-xs">/ 100 Reputation Score</span>
                        </p>

                        {/* Third Row: Additional Details */}
                        <div className="mt-4 text-gray-500 text-sm">
                            <p className="flex items-center space-x-2 text-gray-500">
                                <span className="text-green-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <span className="text-black text-sm">Active since 2024</span>
                            </p>
                            <p className="mt-1 text-black">⭐ <span className="ml-1">4.8/5 Average Rating</span></p>
                        </div>
                    </div>


                    {/* Buyer Profile */}
                    <div className="relative border border-gray-300 bg-gray-50 p-4 rounded-lg shadow-md">
                        {/* Moderate Risk Badge */}
                        <span className="absolute top-4 right-4 px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-md border border-yellow-500">
                            Moderate Risk
                        </span>

                        {/* First Row: Image & Name + Role */}
                        <div className="flex items-center space-x-4 mb-2">
                            <img
                                src="https://play-lh.googleusercontent.com/7Ak4Ye7wNUtheIvSKnVgGL_OIZWjGPZNV6TP_3XLxHC-sDHLSE45aDg41dFNmL5COA=w240-h480-rw"
                                alt="Sarah Johnson"
                                className="w-20 h-20 rounded-full"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-700">Sarah Johnson</h3>
                                <p className="text-sm text-gray-500">Buyer</p>
                            </div>
                        </div>

                        {/* Second Row: Reputation Score */}
                        <p className="text-yellow-600 font-bold text-3xl">
                            76 <span className="text-gray-400 text-xs">/ 100 Reputation Score</span>
                        </p>

                        {/* Third Row: Additional Details */}
                        <div className="mt-4 text-gray-500 text-sm">
                            <p className="flex items-center space-x-2 text-gray-500">
                                <span className="text-green-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <span className="text-black text-sm">Active since 2024</span>
                            </p>
                            <p className="mt-1">⭐ <span className="text-black ml-1">3.5/5 Average Rating</span></p>
                        </div>
                    </div>
                </div>

                {/* Fraud Alert */}
                <div className="bg-red-100 text-sm text-red-700 p-4 rounded-lg mb-6 border-l-4 border-red-600">
                    <strong>Fraud Alert</strong>
                    <p>This buyer has filed 5 disputes in the last month</p>
                </div>

                {/* Chat Log Preview */}
                {/* <div className="mb-6">
                    <h2 className="text-lg font-bold text-gray-800 mb-4">Chat Log Preview</h2>
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <p className="text-sm text-gray-700">
                            <span className="text-red-600">"Let's move to Telegram"</span> - This phrase was flagged as suspicious.
                        </p>
                    </div>
                </div> */}

                {/* Fraud Risk Score Gauge */}
                {/* <div className="mb-6">
                    <h2 className="text-lg font-bold text-gray-800 mb-4">Fraud Risk Score</h2>
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <div className="h-4 bg-gray-200 rounded-full">
                            <div className="h-4 bg-red-600 rounded-full w-3/4"></div>
                        </div>
                        <p className="text-sm text-gray-700 mt-2">High Risk (85/100)</p>
                    </div>
                </div> */}

                {/* Data Analysis Charts */}
                <div className="grid grid-cols-3 gap-6 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-md font-semibold text-gray-700 mb-2">Dispute Frequency</h3>
                        <div className="h-32 bg-blue-200 flex items-end">
                            <div className="w-1/4 h-1/6 bg-blue-600"></div>
                            <div className="w-1/4 h-1/3 bg-blue-600"></div>
                            <div className="w-1/4 h-2/3 bg-blue-600"></div>
                            <div className="w-1/4 h-full bg-red-600"></div>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-md font-semibold text-gray-700 mb-2">Response Time</h3>
                        <div className="h-6 bg-gray-200">
                            <div className="h-6 bg-orange-500 w-3/4"></div>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-md font-semibold text-gray-700 mb-2">Message Sentiment</h3>
                        <div className="h-32 flex items-end">
                            <div className="w-1/3 h-2/3 bg-green-500"></div>
                            <div className="w-1/3 h-1/3 bg-orange-500"></div>
                            <div className="w-1/3 h-1/6 bg-red-500"></div>
                        </div>
                    </div>
                </div>

                {/* Resolution Options */}
                <h1 className="mb-4 text-gray-700 font-bold text-md">Resolution Options</h1>
                <div className="flex space-x-4">
                    <button className="bg-red-600 text-sm text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700">
                        🚩 Flag Account for Review
                    </button>
                    <button className="bg-black text-sm text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800">
                        🚫 Block User
                    </button>
                    <button className="bg-blue-600 text-sm text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700">
                        ✅ Standard Resolution
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FraudDetectionDashboard;
