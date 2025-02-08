import Sidebar from "@/components/side-bar";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const disputeData = {
  caseId: "#DR78392",
  status: "In Progress",
  factSummary: {
    paymentStatus: "Confirmed",
    deliveryStatus: "Pending",
    transactionDate: "March 15, 2025",
    amount: "$250.00 USD",
  },
  aiRecommendation: {
    recommendation: "Refund Buyer $50.00",
  },
};

const DisputeResolutionPage: React.FC = () => {
  const [loadingStates, setLoadingStates] = useState({
    transactionHistory: false,
    blockchainAnalysis: false,
    smartContractVerification: false,
  });
  const [showFactSummary, setShowFactSummary] = useState(false);
  const [showAIRecommendation, setShowAIRecommendation] = useState(false);
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
          <h1 className="text-xl font-bold text-gray-800">Dispute Resolution Center</h1>
          {/* Right-aligned Case ID and Progress */}
          <div className="ml-auto flex items-center space-x-4">
            <h2 className="text-sm font-semibold text-gray-700">
              Case ID: <span className="text-gray-800">{disputeData.caseId}</span>
            </h2>
            <span
              className={`px-3 py-1 text-xs rounded-md border ${
                disputeData.status === "In Progress"
                  ? "bg-blue-100 text-blue-700 border-blue-500"
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
            {/* Fact Gathering Progress */}
            <div className="mt-4 bg-gray-50 rounded-md border border-gray-300 shadow-md p-6 mb-6">
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
                    <span className="text-green-600 text-sm ml-2">Transaction History</span>
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
                    className={`h-2 rounded-full ${
                      loadingStates.transactionHistory ? "bg-green-500" : "bg-blue-500"
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
                    className={`h-2 rounded-full ${
                      loadingStates.blockchainAnalysis ? "bg-green-500" : "bg-blue-500"
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
                    className={`h-2 rounded-full ${
                      loadingStates.smartContractVerification ? "bg-green-500" : "bg-blue-500"
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
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 border border-gray-300 rounded-lg shadow-md p-6">
                  <h3 className="text-sm font-semibold text-gray-700 mb-1">Payment Status</h3>
                  <span
                    className={`font-semibold ${
                      disputeData.factSummary.paymentStatus === "Confirmed"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {disputeData.factSummary.paymentStatus}
                  </span>
                </div>
                <div className="bg-gray-50 border border-gray-300 rounded-lg shadow-md p-6">
                  <h3 className="text-sm font-semibold text-gray-700 mb-1">Delivery Status</h3>
                  <span
                    className={`font-semibold ${
                      disputeData.factSummary.deliveryStatus === "Pending"
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
          <div className="mt-5 bg-blue-50 p-6 rounded-lg mb-6 border border-blue-300">
            <h3 className="text-md font-semibold text-gray-800 mb-2">AI Recommendation</h3>
            {showAIRecommendation && (
              <div className="mt-4 bg-white p-4 rounded-md">
                <p className="text-sm text-gray-600 mb-3">
                  Based on the gathered facts, we recommend:
                </p>
                <span className="text-blue-600 font-semibold cursor-pointer text-md">
                  {disputeData.aiRecommendation.recommendation}
                </span>
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
            <button className="mt-6 bg-green-600 text-sm text-white w-full px-4 py-2 rounded-lg font-semibold hover:bg-green-700 flex items-center justify-center gap-2">
              ✅ Accept and Close Dispute
            </button>
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