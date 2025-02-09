import Sidebar from "@/components/side-bar";
import { Info, X, ChevronDown, ChevronUp, } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const disputeDetails = [
  {
    title: "Transaction History",
    status: "Verified ✅",
    details: [
      "Payment gateway records (e.g., PayPal, Stripe, blockchain transactions)",
      "Bank transaction statements",
      "Seller’s and buyer’s order history",
      "Invoices and receipts from the platform",
    ],
  },
  {
    title: "Blockchain Analysis",
    status: "In Progress ⏳",
    details: [
      "Smart contract transactions on Ethereum/Solana/etc.",
      "Token transfers and wallet activity",
      "Confirmation of fund movements through blockchain explorers",
      "Fraud detection flags (e.g., flagged addresses, mixer interactions)",
    ],
  },
  {
    title: "Policy References",
    status: "Article 5, Section B 📜",
    details: [
      "Platform’s dispute resolution policies",
      "Terms of Service and Buyer Protection Policy",
      "Relevant international consumer protection laws",
      "Arbitration guidelines for online marketplaces",
    ],
  },
  {
    title: "Chat Logs",
    status: "Extracted Key Messages 💬",
    details: [
      "Seller-buyer conversation history on platform chat",
      "Email or customer service ticket records",
      "AI-powered sentiment analysis to detect fraudulent behavior",
      "Timestamped logs to verify response time and intent",
    ],
  },
  {
    title: "Transactional Data",
    status: "Cross-Checked with Ledger 📊",
    details: [
      "Internal ledger reconciliation",
      "Cross-validation with seller’s inventory management",
      "Third-party payment processor verification",
      "Any manual adjustments made to transactions",
    ],
  },
  {
    title: "Past History",
    status: "Seller has 2 Similar Disputes 🕵️",
    details: [
      "Seller’s previous dispute resolution cases",
      "History of chargebacks and refund requests",
      "Customer complaints and reviews",
      "AI pattern detection for repeated dispute behavior",
    ],
  },
];

const disputeData = {
  caseId: "##12345",
  status: "In Progress",
  factSummary: {
    paymentStatus: "Confirmed",
    deliveryStatus: "Pending",
    transactionDate: "02 Feb 2025",
    amount: "RM 1,000.00",
  },
  aiRecommendation: {
    recommendation: [
      "It is recommended to enforce the original agreed-upon price and ensure compliance with the terms initially set forth.",
      "In accordance with Malaysian law, any attempt to deviate from the agreed terms or engage in fraudulent activity may constitute a violation of the Consumer Protection Act 1999 or the Contracts Act 1950, which safeguard against unfair trade practices and breaches of contract.",
      "In the event of non-compliance, potential penalties, including legal action or financial sanctions, may be applied to deter such behavior."
    ]
  },
  factDetails: [
    "Transaction History: Verified",
    "Blockchain Analysis: In Progress",
    "Smart Contract Verification: Pending",
    "Policy References: Article 5, Section B",
    "Chat Logs: Extracted key messages",
    "Transactional Data: Cross-checked with ledger",
    "Past History: Seller has 2 similar disputes",
  ],
};

const DisputeResolutionPage: React.FC = () => {
  const [loadingStates, setLoadingStates] = useState({
    transactionHistory: false,
    blockchainAnalysis: false,
    smartContractVerification: false,
  });
  const [expanded, setExpanded] = useState<number | null>(null);
  const [showFactSummary, setShowFactSummary] = useState(false);
  const [showAIRecommendation, setShowAIRecommendation] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [countdown, setCountdown] = useState(24 * 60 * 60); // 24 hours in seconds

  useEffect(() => {
    // Step 1: Start loading Transaction History after 2 seconds
    const transactionHistoryTimeout = setTimeout(() => {
      setLoadingStates((prev) => ({ ...prev, transactionHistory: true }));
    }, 2000);

    // Step 2: Start loading Blockchain Analysis after 4 seconds
    const blockchainAnalysisTimeout = setTimeout(() => {
      setLoadingStates((prev) => ({ ...prev, blockchainAnalysis: true }));
    }, 4000);

    // Step 3: Start loading Smart Contract Verification after 6 seconds
    const smartContractVerificationTimeout = setTimeout(() => {
      setLoadingStates((prev) => ({ ...prev, smartContractVerification: true }));
    }, 6000);

    // Step 4: Show Fact Summary and AI Recommendation after 8 seconds
    const showSummaryTimeout = setTimeout(() => {
      setShowFactSummary(true);
      setShowAIRecommendation(true);
    }, 8000);

    // Step 5: Start countdown after 8 seconds
    const startCountdownTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
      return () => clearInterval(interval); // Cleanup interval on unmount
    }, 8000);

    // Cleanup timeouts
    return () => {
      clearTimeout(transactionHistoryTimeout);
      clearTimeout(blockchainAnalysisTimeout);
      clearTimeout(smartContractVerificationTimeout);
      clearTimeout(showSummaryTimeout);
      clearTimeout(startCountdownTimeout);
    };
  }, []);

  // Format countdown time
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className="flex h-screen font-montserrat">
      <Sidebar />
      <div className="pl-72 bg-gray-100 w-full p-6 overflow-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">Additional AI Analysis</h1>
          {/* Right-aligned Case ID and Progress */}
          <div className="ml-auto flex items-center space-x-4">
            <h2 className="text-sm font-semibold text-gray-700">
              Case ID: <span className="text-gray-800">{disputeData.caseId}</span>
            </h2>
            <span
              className={`px-3 py-1 text-xs rounded-md border ${disputeData.status === "In Progress"
                ? "bg-yellow-100 text-yellow-500 border-yellow-500"
                : "bg-green-100 text-green-700 border-green-500"
                }`}
            >
              {disputeData.status}
            </span>
          </div>
        </div>
        <p className="mb-2 mt-1 text-sm text-gray-500">
          Enhanced fraud detection with automated fact-gathering, real-time recommendations, and smart contract integration for seamless resolutions.
        </p>
        {/* Main Content with AI Recommendation */}
        <div className="grid grid-cols-3 gap-6">
          {/* 2/3 Section - Fact Gathering and Summary */}
          <div className="col-span-2">
          <div className="mt-5 bg-green-100 text-sm text-green-700 p-4 rounded-lg mb-6 border-l-4 border-green-600">
                    <strong>Info</strong>
                    <p>Click on the INFO icon to learn more of data sources utilized to resolve the dispute scenario.</p>
                </div>
            {/* Fact Gathering Progress */}
            <div className=" bg-gray-50 rounded-md border border-gray-300 shadow-md p-6 mb-4 relative">
              <button onClick={() => setShowPopup(true)} className="absolute top-4 right-4">
                <Info className="w-5 h-5 text-red-500 cursor-pointer hover:text-red-600" />
              </button>
              <h3 className="text-md font-semibold text-gray-700 mb-3">Fact Gathering Progress</h3>
              {/* Transaction History */}
              <div className="flex items-center mb-2">
                {loadingStates.transactionHistory ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-green-500 shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-green-600 text-sm ml-2">Data Gathering</span>
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="animate-spin h-5 w-5 text-blue-500 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    <span className="text-gray-400 text-sm ml-2">Transaction History</span>
                  </>
                )}
                <div className="flex-1 h-2 bg-gray-200 rounded-full ml-4">
                  <div
                    className={`h-2 rounded-full ${loadingStates.transactionHistory ? "bg-green-500" : "bg-blue-500"
                      }`}
                    style={{
                      width: loadingStates.transactionHistory ? "100%" : "0%",
                      transition: "width 2s ease-in-out",
                    }}
                  ></div>
                </div>
              </div>
              {/* Blockchain Analysis */}
              <div className="flex items-center mb-2">
                {loadingStates.blockchainAnalysis ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-green-500 shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-green-600 text-sm ml-2">Blockchain Analysis</span>
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="animate-spin h-5 w-5 text-blue-500 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    <span className="text-gray-400 text-sm ml-2">Blockchain Analysis</span>
                  </>
                )}
                <div className="flex-1 h-2 bg-gray-200 rounded-full ml-4">
                  <div
                    className={`h-2 rounded-full ${loadingStates.blockchainAnalysis ? "bg-green-500" : "bg-blue-500"
                      }`}
                    style={{
                      width: loadingStates.blockchainAnalysis ? "100%" : "0%",
                      transition: "width 2s ease-in-out",
                    }}
                  ></div>
                </div>
              </div>
              {/* Smart Contract Verification */}
              <div className="flex items-center">
                {loadingStates.smartContractVerification ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-green-500 shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-green-600 text-sm ml-2">Smart Contract Verification</span>
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="animate-spin h-5 w-5 text-blue-500 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    <span className="text-gray-400 text-sm ml-2">Smart Contract Verification</span>
                  </>
                )}
                <div className="flex-1 h-2 bg-gray-200 rounded-full ml-4">
                  <div
                    className={`h-2 rounded-full ${loadingStates.smartContractVerification ? "bg-green-500" : "bg-blue-500"
                      }`}
                    style={{
                      width: loadingStates.smartContractVerification ? "100%" : "0%",
                      transition: "width 2s ease-in-out",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            {/* Fact Summary */}
            {showFactSummary && (
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 border border-gray-300 rounded-lg shadow-md p-6">
                  <h3 className="text-sm font-semibold text-gray-700 mb-1">Payment Status</h3>
                  <span
                    className={`font-semibold ${disputeData.factSummary.paymentStatus === "Confirmed"
                      ? "text-green-600"
                      : "text-red-600"
                      }`}
                  >
                    {disputeData.factSummary.paymentStatus}
                  </span>
                </div>
                <div className="bg-gray-50 border border-gray-300 rounded-lg shadow-md p-6">
                  <h3 className="text-sm font-semibold text-gray-700 mb-1">Sale Status</h3>
                  <span
                    className={`font-semibold ${disputeData.factSummary.deliveryStatus === "Pending"
                      ? "text-yellow-600"
                      : "text-green-600"
                      }`}
                  >
                    {disputeData.factSummary.deliveryStatus}
                  </span>
                </div>
                <div className="bg-gray-50 border border-gray-300 rounded-lg shadow-md p-6">
                  <h3 className="text-sm font-semibold text-gray-700 mb-1">Transaction Date</h3>
                  <span className="text-gray-700">{disputeData.factSummary.transactionDate}</span>
                </div>
                <div className="bg-gray-50 border border-gray-300 rounded-lg shadow-md p-6">
                  <h3 className="text-sm font-semibold text-gray-700 mb-1">Amount</h3>
                  <span className="text-gray-700">{disputeData.factSummary.amount}</span>
                </div>
              </div>
            )}
          </div>
          {/* 1/3 Section - AI Recommendation & Buttons */}
          <div className="mt-5 bg-red-50 p-6 rounded-lg mb-6 border border-red-300">
            <h3 className="text-md font-semibold text-gray-800 mb-2">AI Recommendation</h3>
            {showAIRecommendation && (
              <div className="mt-4 bg-white p-4 rounded-md">
                <p className="text-sm text-gray-600 mb-3">
                  Based on the gathered facts, we recommend:
                </p>
                <ul className="space-y-2 text-sm">
                  {disputeData.aiRecommendation.recommendation.map((point, index) => (
                    <li key={index} className="flex items-center text-red-500 font-semibold">                      
                      - {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {showPopup && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-auto">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-auto relative">
                  {/* Close Button */}
                  <button
                    className="absolute top-3 right-3 p-1 rounded-full hover:bg-gray-200 transition"
                    onClick={() => setShowPopup(false)}
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>

                  <h2 className="text-lg font-semibold mb-4">Dispute Resolution Details</h2>
                  <div className="overflow-auto max-h-[70vh]">
                    {disputeDetails.map((item, index) => (
                      <div key={index} className="mb-3 bg-white shadow-sm border border-gray-300 rounded-md">
                        <div
                          className="p-3 cursor-pointer flex justify-between items-center"
                          onClick={() => setExpanded(expanded === index ? null : index)}
                        >
                          <div>
                            <p className="font-semibold">{item.title}</p>
                            <p className="text-sm text-gray-500">{item.status}</p>
                          </div>
                          {expanded === index ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </div>
                        {expanded === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="p-3 bg-gray-100 rounded-b-lg overflow-auto max-h-40"
                          >
                            <ul className="list-disc list-inside text-sm text-gray-700">
                              {item.details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {/* Smart Contract Execution Timer */}
            <div className="bg-yellow-100 p-3 rounded-lg border border-yellow-300 mt-4">
              <p className="text-orange-700 text-sm font-semibold flex items-center gap-1">
                <span className="mb-2">⏳ Smart contract execution in:</span>
              </p>
              <span className="text-orange-700 font-bold text-xl">{formatTime(countdown)}</span>
            </div>
            {/* Stacked Action Buttons */}
            <Link href={"/fraud-detection/page"}>
              <button className="mt-6 bg-green-600 text-sm text-white w-full px-4 py-2 rounded-lg font-semibold hover:bg-green-700 flex items-center justify-center gap-2">
                ✅ Accept and Close Dispute
              </button>
            </Link>
            <button className="bg-gray-200 text-sm border border-gray-300 text-gray-800 w-full px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 mt-2 flex items-center justify-center gap-2">
              ⚖️ Escalate to Moderator
            </button>
          </div>
        </div>
        <Link href={'/what-if/page'}>
          <button className="bg-gradient-to-r from-red-600 to-red-400 p-3 rounded-lg border border-red-500 text-sm text-white w-full">
            Explore What-IF AI Simulator ✨
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DisputeResolutionPage;