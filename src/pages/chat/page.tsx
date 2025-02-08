"use client";

import Sidebar from "@/components/side-bar";
import React, { useState, useEffect, useRef } from "react";
import { Send, AlertTriangle, Info } from "lucide-react";
import Link from "next/link";

const predefinedResponses: { [key: string]: string } = {
    "bitcoin": "Yes, it's available. Are you ready to proceed with the payment?",
    "payment": "I accept bank transfers and PayPal. Please ensure the payment is made from an account in your name.",
    "release": "Once I confirm the payment, I'll release the BTC within 30 minutes.",
    "ready": "Great, I suggest us to move over to WhatsApp to discuss further on the details.",
    "security": "Let's proceed with the payment then, please transfer the required amount now.",
    "whatsapp": "Warning: Moving conversations to external platforms is not allowed. Please keep all discussions here to ensure security.",
    "telegram": "Warning: Moving conversations to external platforms is not allowed. Please keep all discussions here to ensure security.",
    "messenger": "Warning: Moving conversations to external platforms is not allowed. Please keep all discussions here to ensure security.",
    "signal": "Warning: Moving conversations to external platforms is not allowed. Please keep all discussions here to ensure security.",
    "wechat": "Warning: Moving conversations to external platforms is not allowed. Please keep all discussions here to ensure security.",
    "viber": "Warning: Moving conversations to external platforms is not allowed. Please keep all discussions here to ensure security.",
    "transfer": "Unfortunately you will have to pay more since extra fees are involved during the process.",
};

const ChatInterface: React.FC = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi, it's Sarah here.", time: "10:30 AM", sender: "user" },
        { id: 2, text: "Hey, nice meeting you. I'm John - how may I help you?", time: "10:31 AM", sender: "seller" },
    ]);

    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const chatRef = useRef<HTMLDivElement>(null);
    const [showPopup, setShowPopup] = useState(false);
    const [showPopupFlag, setShowPopupFlag] = useState(false);
    const [analysisStep, setAnalysisStep] = useState(0);
    const [fraudRisk, setFraudRisk] = useState(0); // Controls progress bar width
    const [typedText, setTypedText] = useState("");

    useEffect(() => {
        if (showPopup) {
            setAnalysisStep(0);
            setTypedText("");
            setFraudRisk(0);

            // Step-by-step AI processing
            setTimeout(() => typeText("🔍 AI is analyzing the conversation..."), 1000);
            setTimeout(() => {
                setAnalysisStep(1);
                typeText("📌 Detected Phrase: 'Let's continue on WhatsApp'");
            }, 2500);
            setTimeout(() => {
                setAnalysisStep(2);
                typeText("📊 Similarity Score: 92.4% match with known fraudulent patterns.");
            }, 4000);
            setTimeout(() => {
                setAnalysisStep(3);
                typeText("⚠️ Risk Assessment: High probability of an off-platform transaction attempt.");
                slideRiskBar(78);
            }, 5500);
            setTimeout(() => {
                setAnalysisStep(4);
                typeText("⚙️ AI Model in Action...");
            }, 7000);
        }
    }, [showPopup]);

    // Simulate typing effect
    const typeText = (text: string) => {
        setTypedText("");
        let i = 0;
        const interval = setInterval(() => {
            setTypedText((prev) => prev + text[i]);
            i++;
            if (i === text.length) clearInterval(interval);
        }, 50); // Speed of typing effect
    };

    // Smoothly slide the risk percentage bar
    const slideRiskBar = (finalRisk: number) => {
        let currentRisk = 0;
        const interval = setInterval(() => {
            currentRisk += 2;
            setFraudRisk(currentRisk);
            if (currentRisk >= finalRisk) clearInterval(interval);
        }, 30); // Speed of bar filling
    };

    useEffect(() => {
        chatRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, [messages, isTyping]);

    const sendMessage = (event: React.FormEvent) => {
        event.preventDefault();
        if (inputValue.trim() === "") return;

        const newMessage = {
            id: Date.now(),
            text: inputValue,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            sender: "user",
        };

        setMessages([...messages, newMessage]);
        setInputValue("");

        setTimeout(() => {
            const lowerText = inputValue.toLowerCase();
            const responseKey = Object.keys(predefinedResponses).find(key => lowerText.includes(key));

            if (responseKey) {
                setIsTyping(true);

                setTimeout(() => {
                    const botResponse = {
                        id: Date.now() + 1,
                        text: predefinedResponses[responseKey],
                        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                        sender: "seller",
                    };

                    setMessages((prevMessages) => [...prevMessages, botResponse]);

                    // If the response contains "WhatsApp" or "Pay More", send a follow-up system warning
                    if (responseKey === "ready" || responseKey === "transfer") {
                        setTimeout(() => {
                            const warningMessage = {
                                id: Date.now() + 2,
                                text: responseKey === "ready"
                                    ? "Warning: Moving conversations to external platforms is not allowed. Please keep all discussions here to ensure security."
                                    : "⚠️ Fraud Detected: The seller is requesting additional payment. Please proceed with caution.",
                                time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                                sender: "system",
                            };
                            setMessages((prevMessages) => [...prevMessages, warningMessage]);
                        }, 1000); // Delay warning by 1 second
                    }

                    setIsTyping(false);
                }, 1500);
            }
        }, 1000);
    };

    return (
        <div className="flex h-screen font-montserrat bg-gray-100">
            <Sidebar />
            <div className="pl-72 w-full p-6 flex flex-col">

                {/* Chat Header */}
                <div className="mb-4 flex items-center justify-between">
                    <div>
                        <h1 className="text-xl font-bold text-gray-800">Deriv P2P Chat</h1>
                        <p className="text-gray-500 text-xs">You are currently discussing with <span className="font-bold">John Smith</span>. Stay safe by keeping all conversations on this platform.</p>
                    </div>
                </div>

                {/* Warning Message */}
                <div className="bg-yellow-100 text-yellow-800 mt-2 rounded-lg p-3 flex items-center gap-2 mb-4 border-l-4 border-yellow-600">
                    <AlertTriangle className="w-5 h-5" />
                    <p className="text-sm">Avoid sharing personal information or moving conversations to external platforms.</p>
                </div>

                {/* Popup for More Information */}
                {showPopup && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg font-bold text-gray-900">🤖 AI Fraud Analysis Report</h2>
                                <button onClick={() => setShowPopup(false)} className="text-gray-700 hover:text-gray-900">✖</button>
                            </div>

                            {/* Step 1: Typing Effect */}
                            <p className="text-sm text-gray-700 mt-2 animate-typing">{typedText}</p>

                            {/* Step 2: NLP Pattern Detection */}
                            {analysisStep >= 1 && (
                                <div className="mt-4 p-3 bg-gray-100 rounded-lg animate-fade-in">
                                    <h3 className="text-sm font-semibold text-gray-800">🔍 NLP Pattern Recognition</h3>
                                    <ul className="text-sm text-gray-700 list-disc pl-5 mt-2">
                                        <li>📌 **Detected Phrase:** "<span className="font-semibold text-red-500">pay more</span>"</li>
                                        <li>📊 **Similarity Score:** 92.4% match with known fraudulent patterns.</li>
                                    </ul>
                                </div>
                            )}

                            {/* Step 3: Fraud Probability Analysis with Sliding Bar */}
                            {analysisStep >= 3 && (
                                <div className="mt-4 p-3 bg-gray-100 rounded-lg animate-fade-in">
                                    <h3 className="text-sm font-semibold text-gray-800">📊 Fraud Probability Analysis</h3>
                                    <div className="mt-2 flex justify-between text-gray-700 text-sm">
                                        <span>🚨 High Risk</span>
                                        <span className="font-semibold text-red-500">{fraudRisk}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-3 mt-1">
                                        <div
                                            className="bg-red-500 h-3 rounded-full transition-all duration-500"
                                            style={{ width: `${fraudRisk}%` }}>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-600 mt-1">Based on message content, historical data, and sender behavior.</p>
                                </div>
                            )}

                            {/* Step 4: AI Processing Animation */}
                            {analysisStep >= 4 && (
                                <div className="mt-4 p-3 bg-gray-100 rounded-lg flex items-center animate-fade-in">
                                    <h3 className="text-sm font-semibold text-gray-800">⚙️ AI Model in Action</h3>
                                    <div className="ml-auto animate-spin border-t-4 border-blue-500 border-solid rounded-full h-6 w-6"></div>
                                </div>
                            )}

                            {/* Close Button */}
                            <Link href={'/data-form/page'}>
                                <button
                                    onClick={() => setShowPopup(false)}
                                    className="mt-4 w-full bg-red-600 text-sm text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700"
                                >
                                    Astriv AI P2P Dispute Resolver -{">"}
                                </button>
                            </Link>
                        </div>
                    </div>
                )}

                {showPopupFlag && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg font-bold text-gray-900">🚩 Flag this User</h2>
                                <button onClick={() => setShowPopupFlag(false)} className="text-gray-700 hover:text-gray-900">✖</button>
                            </div>

                            {/* Notification that seller has been flagged */}
                            <div className="mt-4 p-3 bg-green-100 rounded-lg animate-fade-in">
                                <h3 className="text-sm font-semibold text-green-800">✅ Seller has been flagged successfully.</h3>
                                <p className="text-sm text-green-700 mt-2">The seller has been flagged for further review. Our team will investigate the issue shortly.</p>
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={() => setShowPopupFlag(false)}
                                className="mt-4 w-full bg-red-600 text-sm text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}

                {/* Chat Messages */}
                <div className="flex-1 border border-gray-300 overflow-y-auto bg-white rounded-lg shadow-md p-4 space-y-4">
                    {messages.map((message) => (
                        <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} items-center gap-3`}>
                            {message.sender !== "user" && message.sender !== "system" && (
                                <img
                                    src="https://play-lh.googleusercontent.com/hJGHtbYSQ0nCnoEsK6AGojonjELeAh_Huxg361mVrPmzdwm8Ots-JzEH5488IS2nojI"
                                    alt="Avatar"
                                    className="w-8 h-8 rounded-full"
                                />
                            )}
                            <div className={`p-3 rounded-lg max-w-xs text-sm relative flex flex-col 
    ${message.sender === "user" ? "bg-red-500 text-white" :
                                    message.sender === "system" ? "bg-yellow-100 text-yellow-800  border-yellow-600" :
                                        "bg-gray-100 text-gray-900"}`}
                            >
                                <div className="flex items-center gap-2 flex-wrap">
                                    {message.sender === "system"}
                                    <p>{message.text}</p>
                                    {message.sender === "system" && (
                                        <div className="w-full">
                                            <button 
                                                onClick={() => {
                                                    if (message.text.includes("additional payment")) {
                                                        setShowPopup(true); // Direct to showPopup for "Pay More"
                                                    } else {
                                                        setShowPopupFlag(true); // Direct to showPopupFlag for WhatsApp
                                                    }
                                                }} 
                                                className="text-white text-xs mt-2 bg-red-500 rounded-md border border-red-200 p-2"
                                            >
                                                Learn More
                                            </button>
                                        </div>
                                    )}
                                </div>

                                {/* Time appears below the message */}
                                <p className="text-xs opacity-60 mt-1 text-right">{message.time}</p>
                            </div>
                        </div>
                    ))}

                    {/* Typing Animation */}
                    {isTyping && (
                        <div className="flex items-center gap-3">
                            <img
                                src="https://play-lh.googleusercontent.com/hJGHtbYSQ0nCnoEsK6AGojonjELeAh_Huxg361mVrPmzdwm8Ots-JzEH5488IS2nojI"
                                alt="Avatar"
                                className="w-8 h-8 rounded-full"
                            />
                            <div className="p-3 rounded-lg bg-gray-100 text-gray-900 max-w-xs text-sm flex items-center gap-2 animate-pulse">
                                Typing...
                            </div>
                        </div>
                    )}
                    <div ref={chatRef}></div>
                </div>

                {/* Message Input */}
                <form onSubmit={sendMessage} className="mt-4 bg-white rounded-lg shadow-md p-4 flex items-center">
                    <input
                        type="text"
                        placeholder="Type your message here..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <button type="submit" className="bg-red-600 text-white px-4 py-2 ml-2 rounded-lg font-semibold hover:bg-red-700 flex items-center gap-1">
                        <Send className="w-4 h-4" />
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChatInterface;