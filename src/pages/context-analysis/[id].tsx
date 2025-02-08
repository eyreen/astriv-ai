import Sidebar from '@/components/side-bar';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const DisputeDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [activeTab, setActiveTab] = useState('Chat Logs');
  const [isLoading, setIsLoading] = useState(true); // State to track loading
  const [showConfidence, setShowConfidence] = useState(false); // State to show confidence after loading
  const [progress, setProgress] = useState(0);
  const [visiblePoints, setVisiblePoints] = useState(0); // Track visible points

  const dispute = {
    id: '12345',
    status: 'In Progress',
    created: 'Jan 15, 2025',
    buyer: {
      name: 'John Smith',
      image: 'https://play-lh.googleusercontent.com/hJGHtbYSQ0nCnoEsK6AGojonjELeAh_Huxg361mVrPmzdwm8Ots-JzEH5488IS2nojI',
      since: '2024',
    },
    seller: {
      name: 'Tech Solutions Ltd',
      image: 'https://play-lh.googleusercontent.com/7Ak4Ye7wNUtheIvSKnVgGL_OIZWjGPZNV6TP_3XLxHC-sDHLSE45aDg41dFNmL5COA=w240-h480-rw',
      type: 'Verified Business',
    },
    transactionDetails: {
      amount: '$599.99',
      orderNumber: '#987654',
      orderDate: 'Jan 10, 2025',
    },
    issue: 'Product hasn’t arrived after 2 weeks of ordering',
    flagged: 'Delivery Delay',
    chatLogs: [
      {
        user: 'Buyer',
        message: 'Where is my order? It’s been 2 weeks!',
        timestamp: 'Jan 24, 2025 10:30 AM',
      },
      {
        user: 'Seller',
        message: 'We apologize for the delay. There’s been a backlog...',
        timestamp: 'Jan 24, 2025 11:15 AM',
      },
    ],
    documentUploaded: [
      {
        date: 'Jan 10, 2025',
        description: 'Order Placed',
        amount: '$599.99',
      },
      {
        date: 'Jan 12, 2025',
        description: 'Payment Processed',
        amount: '$599.99',
      },
    ],
    aiAnalysis: {
      confidence: '85%',
      points: [
        { text: 'Chat analysis indicates buyer dissatisfaction due to delayed delivery', checked: true },
        { text: 'Seller has acknowledged the delay in responses', checked: true },
        { text: 'Document Uploaded shows payment processed successfully', checked: true },
      ],
    },
  };

  useEffect(() => {
    // Simulate loading for 5 seconds
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
      setShowConfidence(true);
  
      // Animate progress bar
      let currentProgress = 0;
      const targetProgress = parseInt(dispute.aiAnalysis.confidence, 10); // Extract numeric value from confidence
      const interval = setInterval(() => {
        if (currentProgress >= targetProgress) {
          clearInterval(interval);
          
          // Show points one by one after progress bar finishes
          const pointsInterval = setInterval(() => {
            console.log("length", dispute.aiAnalysis.points.length);
            setVisiblePoints((prev) => {
              if (prev < dispute.aiAnalysis.points.length + 1) {
                console.log("prev", prev);
                return prev + 1; // Increment visible points
              } else {
                clearInterval(pointsInterval); // Stop the interval when all points are shown
                return prev; // Ensure no further updates to visiblePoints
              }
            });
          }, 2000); // Delay of 2 seconds between points

        } else {
          currentProgress += 5; // Increment progress
          setProgress(currentProgress);
        }
      }, 50); // Update every 50ms
    }, 5000); // 5-second loading
  
    return () => clearTimeout(loadingTimeout); // Cleanup timeout
  }, []);

  return (
    <div className="flex h-screen font-montserrat select-none">
      <Sidebar />
      <div className="pl-72 bg-gray-100 w-full p-6 overflow-auto">
        {/* Header */}
        <div className="flex max-w-5xl mx-auto justify-between">
          <h1 className="text-xl font-bold text-gray-800 mb-4">Dispute #{dispute.id}</h1>
          <div className="text-l text-gray-600 mb-6">
            <span className="font-medium">Status:</span>{' '}
            <span
              className={`${
                dispute.status === 'Complete'
                  ? 'text-green-500'
                  : dispute.status === 'In Progress'
                  ? 'text-yellow-500'
                  : dispute.status === 'Not Started'
                  ? 'text-red-500'
                  : 'text-gray-600'
              } font-bold`}
            >
              {dispute.status}
            </span>
            <span className="font-medium"> | Created:</span> {dispute.created}
          </div>
        </div>

        {/* Buyer, Seller, and Transaction Details */}
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8 my-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Buyer Section */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700">Buyer</h2>
              <div className="flex items-center space-x-4">
                <img
                  src={dispute.buyer.image}
                  alt={dispute.buyer.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="text-gray-600">{dispute.buyer.name}</p>
                  <p className="text-sm text-gray-500">Member since {dispute.buyer.since}</p>
                </div>
              </div>
            </div>

            {/* Seller Section */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700">Seller</h2>
              <div className="flex items-center space-x-4">
                <img
                  src={dispute.seller.image}
                  alt={dispute.seller.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="text-gray-600">{dispute.seller.name}</p>
                  <p className="text-sm text-gray-500">{dispute.seller.type}</p>
                </div>
              </div>
            </div>

            {/* Transaction Details */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700">Transaction Details</h2>
              <p className="text-gray-600">{dispute.transactionDetails.amount}</p>
              <p className="text-sm text-gray-500">
                Order {dispute.transactionDetails.orderNumber} - {dispute.transactionDetails.orderDate}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex max-w-5xl mx-auto">
          {/* Left Section */}
          <div className="flex-grow basis-3/4 bg-white shadow-lg rounded-lg p-8">
            {/* Tabs */}
            <div className="flex space-x-10 mb-8 border-b border-gray-200">
              <button
                onClick={() => setActiveTab('Chat Logs')}
                className={`pb-2 font-medium ${
                  activeTab === 'Chat Logs' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Chat Logs
              </button>
              <button
                onClick={() => setActiveTab('Document Uploaded')}
                className={`pb-2 font-medium ${
                  activeTab === 'Document Uploaded' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Document Uploaded
              </button>
            </div>

            {/* Tab Content */}
            <div>
              {activeTab === 'Chat Logs' && (
                <div>
                  <h2 className="text-lg font-semibold text-gray-700 mb-2">Chat Logs</h2>
                  {dispute.chatLogs.map((log, index) => (
                    <div key={index} className="mb-4">
                      <p className="text-gray-600"><span className="font-medium">{log.user}:</span> {log.message}</p>
                      <p className="text-sm text-gray-500">{log.timestamp}</p>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === 'Document Uploaded' && (
                <div>
                  <h2 className="text-lg font-semibold text-gray-700 mb-2">Document Uploaded</h2>
                  {dispute.documentUploaded.map((item, index) => (
                    <div key={index} className="mb-4">
                      <p className="text-gray-600"><span className="font-medium">{item.date}:</span> {item.description}</p>
                      <p className="text-sm text-gray-500">{item.amount}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <Link href="/fact-gathering/page">
            {/* Right Section - AI Analysis */}
            <div className="basis-2/4 bg-white shadow-lg rounded-lg p-8 ml-2">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">AI Analysis</h2>
              <div className="pt-2 rounded-lg">
                {/* Loading State */}
                {isLoading && (
                  <div className="text-center py-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="animate-spin h-8 w-8 mx-auto text-blue-500"
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
                    <p className="mt-4 text-grey-600">AI is analyzing...</p>
                  </div>
                )}

                {/* Confidence and Progress Bar */}
                {showConfidence && (
                  <div>
                    <p className="text-gray-600">
                      <span className="font-medium">Resolution Confidence:</span> {dispute.aiAnalysis.confidence}
                    </p>
                    <div className="mt-2 bg-gray-200 rounded-full h-2.5 overflow-hidden mb-4">
                      <div
                        className="bg-green-500 h-2.5 transition-all duration-500 ease-in-out"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Points List */}
                {dispute.aiAnalysis.points.map((point, index) => {
                  const isCurrentPoint = visiblePoints === index + 1; // Check if this point is currently being processed
                  const isProcessed = visiblePoints > index + 1; // Check if this point has already been processed

                  return (
                    <li key={index} className="flex items-center space-x-2 text-gray-600 text-sm mb-2">
                      {/* Loading Animation or SVG */}
                      {isProcessed || isCurrentPoint ? (
                        isProcessed ? (
                          // Show SVG after processing
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
                        ) : (
                          // Show loading spinner while processing
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
                        )
                      ) : null}

                      {/* Text */}
                      {isProcessed ? (
                        // Show the actual text after processing
                        <span>{point.text}</span>
                      ) : isCurrentPoint ? (
                        // Flickering "Analyzing..." text while processing
                        <span className="animate-pulse">Analyzing...</span>
                      ) : null}
                    </li>
                  );
                })}

                {/* Action Buttons */}
                {visiblePoints === dispute.aiAnalysis.points.length + 1 && (
                  <div className="mt-6 flex flex-col space-y-4">
                    <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 w-full">
                      Accept Recommendation
                    </button>
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full">
                      Request Human Review
                    </button>
                  </div>
                )}
                
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DisputeDetails;