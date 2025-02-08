import Sidebar from "@/components/side-bar";
import React from "react";

const DisputeResolutionPage: React.FC = () => {
  return (
    <div className="flex h-screen font-montserrat">
      <Sidebar />
      <div className="pl-72 bg-gray-100 w-full p-6 overflow-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">Dispute Resolution Center</h1>

          {/* Right-aligned Case ID and Progress */}
          <div className="ml-auto flex items-center space-x-4">
            <h2 className="text-sm font-semibold text-gray-700">
              Case ID: <span className="text-gray-800">#DR78392</span>
            </h2>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-md border border-blue-500">
              In Progress
            </span>
          </div>
        </div>

        <p className="mb-2 mt-1 text-sm text-gray-500">Enhanced fraud detection with automated fact-gathering, real-time recommendations, and smart contract integration for seamless resolutions.</p>

        {/* Main Content with AI Recommendation */}
        <div className="grid grid-cols-3 gap-6">
          {/* 2/3 Section - Fact Gathering and Summary */}
          <div className="col-span-2">
            {/* Fact Gathering Progress */}
            <div className="mt-4 bg-gray-50 rounded-md border border-gray-300 shadow-md p-6 mb-6">
              <h3 className="text-md font-semibold text-gray-700 mb-3">Fact Gathering Progress</h3>

              {/* Transaction History */}
              <div className="flex items-center mb-2">
                <span className="text-green-600 text-sm">✔ Transaction History</span>
                <div className="flex-1 h-2 bg-gray-200 rounded-full ml-4">
                  <div className="h-2 bg-green-500 rounded-full w-full"></div>
                </div>
              </div>

              {/* Blockchain Analysis */}
              <div className="flex items-center mb-2">
                <span className="text-gray-400 text-sm">◌ Blockchain Analysis</span>
                <div className="flex-1 h-2 bg-gray-200 rounded-full ml-4">
                  <div className="h-2 bg-blue-500 rounded-full w-2/3"></div>
                </div>
              </div>

              {/* Smart Contract Verification */}
              <div className="flex items-center">
                <span className="text-gray-400 text-sm">◌ Smart Contract Verification</span>
                <div className="flex-1 h-2 bg-gray-200 rounded-full ml-4">
                  <div className="h-2 bg-gray-400 rounded-full w-1/3"></div>
                </div>
              </div>
            </div>

            {/* Fact Summary */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 border border-gray-300 rounded rounded-md border border-300 shadow-md p-6 rounded-lg">
                <h3 className="text-sm font-semibold text-gray-700 mb-1">Payment Status</h3>
                <span className="text-green-600 font-semibold">Confirmed</span>
              </div>
              <div className="bg-gray-50 border border-gray-300 rounded rounded-md border border-300 shadow-md p-6 rounded-lg">
                <h3 className="text-sm font-semibold text-gray-700 mb-1">Delivery Status</h3>
                <span className="text-yellow-600 font-semibold">Pending</span>
              </div>
              <div className="bg-gray-50 border border-gray-300 rounded rounded-md border border-300 shadow-md p-6 rounded-lg">
                <h3 className="text-sm font-semibold text-gray-700 mb-1">Transaction Date</h3>
                <span className="text-gray-700">March 15, 2025</span>
              </div>
              <div className="bg-gray-50 border border-gray-300 rounded rounded-md border border-300 shadow-md p-6 rounded-lg">
                <h3 className="text-sm font-semibold text-gray-700 mb-1">Amount</h3>
                <span className="text-gray-700">$250.00 USD</span>
              </div>
            </div>
          </div>

          {/* 1/3 Section - AI Recommendation & Buttons */}
          <div className="mt-5 bg-blue-50 p-6 rounded-lg mb-6 border border-blue-300">
            <h3 className="text-md font-semibold text-gray-800 mb-2">AI Recommendation</h3>
            <div className="mt-4 bg-white p-4 rounded-md">
            <p className="text-sm text-gray-600 mb-3">
              Based on the gathered facts, we recommend:
            </p>
            <span className="text-blue-600 font-semibold cursor-pointer text-md">
              Refund Buyer $50.00
            </span>
            </div>

            {/* Smart Contract Execution Timer */}
            <div className="bg-yellow-100 p-3 rounded-lg border border-yellow-300 mt-4">
              <p className="text-orange-700 text-sm font-semibold flex items-center gap-1">
                <span className="mb-2">⏳ Smart contract execution in:</span>
              </p>
              <span className="text-orange-700 font-bold text-xl">23:45:12</span>
            </div>

            {/* Stacked Action Buttons */}
            <button className="mt-6 bg-green-600 text-sm text-white w-full px-4 py-2 rounded-lg font-semibold hover:bg-green-700 mt-4 flex items-center justify-center gap-2">
              ✅ Accept and Close Dispute
            </button>
            <button className="bg-gray-200 text-sm border border-gray-300 text-gray-800 w-full px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 mt-2 flex items-center justify-center gap-2">
              ⚖️ Escalate to Moderator
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisputeResolutionPage;
