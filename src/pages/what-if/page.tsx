import Sidebar from "@/components/side-bar";
import React, { useState } from "react";

const WhatIfPage: React.FC = () => {
  const [showOutcome, setShowOutcome] = useState(false);
  const [loading, setLoading] = useState(false); // New state for loading
  const [files, setFiles] = useState<File[]>([]);
  const [issueDescription, setIssueDescription] = useState('');

  function setIssue (): void {
    setIssueDescription("The seller wanted to increase price from the original agreement");
  }

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles([...files, ...Array.from(event.target.files)]);
    }
  };

  // Handle drag-and-drop file upload
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files) {
      setFiles([...files, ...Array.from(event.dataTransfer.files)]);
    }
  };

  const handleSubmit = () => {
    console.log("Submit button clicked");
    setLoading(true); // Start loading

    // Simulate AI analysis with a 3-second delay
    setTimeout(() => {
      setLoading(false); // Stop loading
      setShowOutcome(true); // Show the outcome modal
    }, 3000);
  };

  return (
    <div className="flex h-screen font-montserrat">
      <Sidebar />
      <div className="pl-72 bg-gray-100 w-full p-6 overflow-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800">What-If Scenario Simulator</h2>
        </div>
        <div>
          <p className="mb-8 text-xs text-gray-600">
            Explore potential outcomes and improve your chances of success.
            Upload evidence and adjust parameters to see how they impact your dispute.
          </p>
          {/* Upload Evidence */}
          <div className="bg-white p-6 rounded-lg border border-gray-300 mb-3">
            <h3 className="mt-3 mb-6 text-md font-semibold text-gray-700">Upload Evidence</h3>
            {/* Drag & Drop Area */}
            <div
              className="mb-8 border-2 text-sm rounded-md border-dashed border-gray-400 p-4 text-center text-gray-600 cursor-pointer"
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
            >
              <input
                type="file"
                className="hidden"
                id="fileUpload"
                multiple
                accept=".pdf,.txt,.jpg,.png,.mp4"
                onChange={handleFileChange}
              />
              <label htmlFor="fileUpload" className="block cursor-pointer">
                📂 Drag and drop your chat log or transaction proof here
                <p className="text-xs text-gray-500">Supports chat logs, PDFs, and videos</p>
              </label>
            </div>
            {/* Display Selected Files */}
            {files.length > 0 && (
              <div className="mt-2 text-sm text-gray-700">
                <h4 className="font-semibold">Selected Files:</h4>
                <ul className="list-disc ml-4">
                  {files.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {/* Adjust Parameters */}
          <div className="bg-white p-6 rounded-lg border border-gray-300">
            <h3 className="text-md font-semibold text-gray-700 mb-2">Adjust Parameters</h3>
            <label className="text-sm font-semibold text-gray-700 block mb-2">Communication Tone</label>
            <select className="w-full text-sm p-2 border border-gray-300 rounded-md mb-2">
              <option>Neutral</option>
              <option>Polite</option>
              <option>Assertive</option>
            </select>
            <label className="text-sm font-semibold text-gray-700 block mb-2">Dispute Category</label>
            <select className="w-full text-sm p-2 border border-gray-300 rounded-md mb-2">
              <option>Fraudulent Charge</option>
              <option>Buyer Not Paid</option>
              <option>Item Not Received</option>
            </select>
            <label className="text-sm font-semibold text-gray-700 block mb-2" onClick={() => setIssue()}>Additional Details</label>
            <textarea className="w-full text-sm p-2 border border-gray-300 rounded-md" value={issueDescription}></textarea>
          </div>
          {/* Submit Button */}
          <button
            className="mt-3 bg-red-500 text-white px-4 py-2 rounded-md w-full text-sm"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-100">
            <div className="text-center py-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="animate-spin h-8 w-8 mx-auto text-red-500"
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
              <p className="mt-4 text-grey-600 animate-pulse">AI is analyzing...</p>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Potential Outcome */}
      {showOutcome && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-100">
            <h2 className="text-lg font-semibold text-gray-800 text-center mb-5">Potential Outcomes</h2>
            <div className="flex">
              <div className="pr-2">
                <p className="text-2xl font-bold text-green-600 text-center">90%</p>
                <p className="text-sm text-green-600 text-center mb-4">Likelihood of Success</p>
              </div>
              <div className="px-2">
                <p className="text-2xl font-bold text-red-600 text-center">2%</p>
                <p className="text-sm text-red-600 text-center mb-4">Likelihood of Fail</p>
              </div>
              <div className="pl-2">
                <p className="text-2xl font-bold text-gray-900 text-center">8%</p>
                <p className="text-sm text-gray-600 text-center mb-4">Likelihood of Escalating</p>
              </div>
            </div>
            {/* Factors Affecting Outcome */}
            <div className="mt-2 p-4 bg-gray-100 rounded-lg">
              <h3 className="text-sm font-semibold text-gray-700">Factors Affecting Outcome:</h3>
              <ul className="text-xs text-gray-600 mt-2">
                <li className="mb-2 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-red-500 shrink-0"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2ZM16.293 16.293a1 1 0 0 1-1.414 1.414L12 13.414l-2.879 2.879a1 1 0 0 1-1.414-1.414L10.586 12 7.707 9.121a1 1 0 0 1 1.414-1.414L12 10.586l2.879-2.879a1 1 0 0 1 1.414 1.414L13.414 12l2.879 2.879Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-grey-600 text-sm ml-2">Suspicious phrases detected (-10%)</span>
                </li>
                <li className="mb-2 flex">
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
                  <span className="text-grey-600 text-sm ml-2">Strong evidence provided (+20%)</span>
                </li>
              </ul>
            </div>
            {/* Why It Matters */}
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <h3 className="text-sm font-semibold text-gray-700">Recommended Course of Action</h3>
              <ul className="text-xs text-gray-600 mt-2">
                <li className="mb-2 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-blue-600 shrink-0"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z"
                      clipRule="evenodd"
                    />
                    <path d="M11 17h2v-6h-2v6Z" />
                    <circle cx="12" cy="8" r="1" />
                  </svg>
                  <span className="text-grey-600 text-sm ml-2">Submit the dispute form to receive the goods or a refund</span>
                </li>
                <li className="mb-2 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-blue-600 shrink-0"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z"
                      clipRule="evenodd"
                    />
                    <path d="M11 17h2v-6h-2v6Z" />
                    <circle cx="12" cy="8" r="1" />
                  </svg>
                  <span className="text-grey-600 text-sm ml-2">Avoid further contact with the other party to prevent escalation of the issue</span>
                </li>
              </ul>
            </div>
            {/* Close Button */}
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md w-full text-sm"
              onClick={() => setShowOutcome(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatIfPage;