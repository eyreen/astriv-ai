import Sidebar from "@/components/side-bar";
import React, { useState } from "react";

const WhatIfPage: React.FC = () => {
  const [showOutcome, setShowOutcome] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

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
    setShowOutcome(true);
  };

  return (
    <div className="flex h-screen font-montserrat">
      <Sidebar />
      <div className="pl-72 bg-gray-100 w-full p-6 overflow-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800">What-If Scenario Simulator</h2>
        </div>

        <div>
          <p className="mb-8 text-xs text-gray-600 mb-3">
            Explore potential outcomes and improve your chances of success.
            Upload evidence and adjust parameters to see how they impact your dispute.
          </p>

          {/* Upload Evidence */}
          <div className="bg-white p-6 rounded-lg border border-gray-300 mb-3">
            <h3 className="mt-3 mb-6 text-md font-semibold text-gray-700 mb-2">Upload Evidence</h3>

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
              <option>Polite</option>
              <option>Assertive</option>
              <option>Neutral</option>
            </select>

            <label className="text-sm font-semibold text-gray-700 block mb-2">Dispute Category</label>
            <select className="w-full text-sm p-2 border border-gray-300 rounded-md mb-2">
              <option>Buyer Not Paid</option>
              <option>Item Not Received</option>
              <option>Fraudulent Charge</option>
            </select>

            <label className="text-sm font-semibold text-gray-700 block mb-2">Additional Details</label>
            <textarea className="w-full text-sm p-2 border border-gray-300 rounded-md"></textarea>
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

      {/* Modal for Potential Outcome */}
      {showOutcome && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-100">
            <h2 className="text-lg font-semibold text-gray-800">Potential Outcomes</h2>

            <p className="text-2xl font-bold text-gray-900 text-center">75%</p>
            <p className="text-sm text-gray-600 text-center mb-4">Likelihood of Success</p>

            {/* Progress Bar */}
            <div className="relative w-full bg-gray-200 rounded-full h-3">
              <div className="absolute top-0 left-0 bg-blue-600 h-3 rounded-full" style={{ width: "75%" }}></div>
            </div>

            {/* Outcome Details */}
            <div className="flex justify-between text-xs text-gray-600 mt-1">
              <span>Win (75%)</span>
              <span>Lose (20%)</span>
              <span>Escalate (5%)</span>
            </div>

            {/* Factors Affecting Outcome */}
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <h3 className="text-sm font-semibold text-gray-700">Factors Affecting Outcome:</h3>
              <ul className="text-xs text-gray-600">
                <li>🔴 Suspicious phrases detected (-10%)</li>
                <li>🟢 Strong evidence provided (+20%)</li>
              </ul>
            </div>

            {/* Why It Matters */}
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <h3 className="text-sm font-semibold text-gray-700">Why Does This Matter?</h3>
              <ul className="text-xs text-gray-600">
                <li>✔ Avoid moving conversations to external platforms</li>
                <li>✔ Use video proof for better reliability</li>
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
