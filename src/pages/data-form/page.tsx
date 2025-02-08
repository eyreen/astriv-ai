import Sidebar from '@/components/side-bar';
import Link from 'next/link';
import { useState } from 'react';

const SubmitDispute = () => {
  const [chatLogs, setChatLogs] = useState<File | null>(null);
  const [transactionId, setTransactionId] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [issueDescription, setIssueDescription] = useState('');
  const [supportingDocuments, setSupportingDocuments] = useState<File[]>([]);
  const [chatLogFileName, setChatLogFileName] = useState<string>(''); // State for chat log file name
  const [documentFileNames, setDocumentFileNames] = useState<string[]>([]); // State for supporting document file names
  const [currency, setCurrency] = useState("RM"); // Default currency

  const handleSubmit = (e: React.FormEvent) => {
    // e.preventDefault();
  };

  const currencies = [
    { value: "RM", label: "RM" },
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
    { value: "GBP", label: "GBP" },
    { value: "JPY", label: "JPY" },
    { value: "INR", label: "INR" },
  ];

  function setIssue (): void {
    setIssueDescription("The seller wanted to increase price from the original agreement");
  }

  return (
    <div className="flex h-screen font-montserrat">
        <Sidebar/>
        <div className="pl-72 bg-gray-100 w-full p-6 overflow-auto">
        <div>
            <h1 className="text-xl font-bold text-gray-800">Submit a Dispute</h1>
            <p className="text-gray-600 mb-4">Provide details about the issue, and we'll help you resolve it quickly.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8 mt-2 mb-2">
            <form onSubmit={handleSubmit}>
            {/* Transaction Details */}
            <div className="mb-8">
                <label className="block text-sm font-bold text-gray-700 mb-2 select-none">Transaction Information</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    type="text"
                    placeholder="Transaction ID"
                    value="DERIV234"
                    onChange={(e) => setTransactionId(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <div className="flex space-x-2">
                    {/* Currency Dropdown */}
                    <select
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        className="w-48 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                        {currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                        ))}
                    </select>
                    {/* Amount Input */}
                    <input
                        type="number"
                        placeholder="Amount"
                        value="1000"
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                </div>
                <input
                    type="date"
                    value="2025-02-09"
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <select
                    value="Bank Transfer"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                    <option value="">Select Payment Method</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                    <option value="Crypto Wallet">Crypto Wallet</option>
                    <option value="PayPal">PayPal</option>
                </select>
                </div>
                <div className="flex items-center mt-2 text-sm text-gray-500 select-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                <span>Ensure the transaction ID matches the disputed trade.</span>
                </div>
            </div>

            {/* Issue Description */}
            <div className="mb-8">
                <label className="block text-sm font-bold text-gray-700 mb-2 select-none" onClick={() => setIssue()}>Describe the Issue</label>
                <textarea
                    placeholder="The seller did not confirm receipt of payment after I sent the funds..."
                    value={issueDescription}
                    onChange={(e) => setIssueDescription(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    rows={4}
                ></textarea>
                <div className="flex items-center mt-2 text-sm text-gray-500 select-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                <span>Provide as much detail as possible to help us resolve your issue faster.</span>
                </div>
            </div>

            {/* Chat Log Input */}
            <div className="mb-8">
                <label className="block text-sm font-bold text-gray-700 mb-2 select-none">Upload or Paste Chat Logs</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <input
                    type="file"
                    onChange={(e) => {
                    const file = e.target.files ? e.target.files[0] : null;
                    setChatLogs(file);
                    setChatLogFileName(file ? file.name : ''); // Update file name
                    }}
                    className="hidden"
                    id="chatLogs"
                />
                <label htmlFor="chatLogs" className="cursor-pointer text-blue-600 hover:text-blue-500">
                    Drag and drop files here or click to browse
                </label>
                <textarea
                    placeholder="Or paste your chat logs here..."
                    className="w-full mt-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    rows={4}
                ></textarea>
                {chatLogFileName && (
                    <p className="mt-2 text-sm text-gray-500">Selected file: {chatLogFileName}</p>
                )}
                </div>
                <div className="flex items-center mt-2 text-sm text-gray-500 select-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                <span>Include all relevant messages between you and the other party.</span>
                </div>
            </div>

            {/* Supporting Documents */}
            <div className="mb-8">
                <label className="block text-sm font-bold text-gray-700 mb-2 select-none">Attach Supporting Documents</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <input
                    type="file"
                    multiple
                    onChange={(e) => {
                    const files = e.target.files ? Array.from(e.target.files) : [];
                    setSupportingDocuments(files);
                    setDocumentFileNames(files.map((file) => file.name)); // Update file names
                    }}
                    className="hidden"
                    id="supportingDocuments"
                />
                <label htmlFor="supportingDocuments" className="cursor-pointer text-blue-600 hover:text-blue-500">
                    Drag and drop files here or click to browse
                </label>
                <p className="text-sm text-gray-500 mt-2 select-none">Maximum file size: 10MB (JPEG, PNG, PDF)</p>
                {documentFileNames.length > 0 && (
                    <ul className="mt-2 text-sm text-gray-500">
                    {documentFileNames.map((fileName, index) => (
                        <li key={index}>{fileName}</li>
                    ))}
                    </ul>
                )}
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between">
                <button
                type="button"
                className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                Preview Submission
                </button>
                <Link href="/context-analysis/12345">
                    <button
                    type="submit"
                    onClick={handleSubmit}
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                        Submit Dispute
                    </button>
                </Link>
            </div>
            </form>
        </div>
        </div>
    </div>
  );
};

export default SubmitDispute;