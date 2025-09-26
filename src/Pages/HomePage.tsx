import React from "react";
import { useNavigate } from "react-router-dom";
import qrImage from "../assets/qr.png";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 flex justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-3xl lg:max-w-5xl bg-slate-900 rounded-3xl shadow-xl p-6 space-y-8 flex flex-col items-center">
        {/* Header */}
        <header className="w-full flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            <div>
              <h1 className="text-xl font-bold text-gray-100">BusTracker</h1>
              <p className="text-sm text-gray-400">Live bus tracking</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-900 text-green-400">
              <span className="w-2 h-2 mr-1 bg-green-500 rounded-full animate-pulse"></span>
              Live
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.564.342 1.256.64 1.986.64zm-.008 1.834a3.5 3.5 0 110 7 3.5 3.5 0 010-7z"
              />
            </svg>
          </div>
        </header>

        {/* QR Code Section */}
        <div className="flex flex-col items-center space-y-3">
          <p className="text-gray-400 font-bold text-center text-md">
            Changes dynamically and updates of ETA of upcoming buses every 30 seconds
          </p>
          <img
            src={qrImage}
            alt="QR Code"
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-contain rounded-xl shadow-lg"
          />
          <p className="text-gray-400 text-center font-bold text-lg">
            Please scan here to get bus timings
          </p>
        </div>

        {/* Feature Buttons */}
        <div className="grid grid-cols-3 gap-4 w-full">
          <button
            onClick={() => navigate("/chat-assistant")}
            className="bg-slate-800 rounded-xl p-4 flex flex-col items-center justify-center space-y-2 shadow hover:scale-105 transform transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm font-medium text-gray-200">
              Ask ChatBot
            </span>
          </button>

          <button
            onClick={() => navigate("/nearby-stops")}
            className="bg-slate-800 rounded-xl p-4 flex flex-col items-center justify-center space-y-2 shadow hover:scale-105 transform transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-sm font-medium text-gray-200">
              Nearby Stops
            </span>
          </button>

          <button
            className="bg-slate-800 rounded-xl p-4 flex flex-col items-center justify-center space-y-2 shadow hover:scale-105 transform transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-sm font-medium text-gray-200">Schedule</span>
          </button>
        </div>

        {/* Live Bus Updates */}
        <div className="w-full mt-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold text-gray-100">
              Live Bus Updates
            </h3>
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-900 text-green-400">
              8 buses live
            </span>
          </div>

          <div className="space-y-3">
            {[
              {
                bus: "45",
                stop: "Central Bus Stop",
                eta: "2 min",
                color: "blue",
              },
              { bus: "78B", stop: "Station Rd", eta: "12 min", color: "red" },
              {
                bus: "22A",
                stop: "Downtown Square",
                eta: "5 min",
                color: "green",
              },
              {
                bus: "101",
                stop: "Parkside Drive",
                eta: "8 min",
                color: "yellow",
              },
              {
                bus: "88",
                stop: "Market Street",
                eta: "15 min",
                color: "purple",
              },
              {
                bus: "34C",
                stop: "University Commons",
                eta: "20 min",
                color: "pink",
              },
              {
                bus: "12",
                stop: "Suburbia Hills",
                eta: "7 min",
                color: "gray",
              },
              {
                bus: "55",
                stop: "Financial District",
                eta: "10 min",
                color: "teal",
              },
            ].map((busInfo, idx) => (
              <div
                key={idx}
                className="bg-slate-900 rounded-xl p-4 flex items-center justify-between shadow border border-slate-800"
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`bg-${busInfo.color}-600 text-white font-bold p-2 px-3 rounded-lg text-lg`}
                  >
                    {busInfo.bus}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-100">
                      {busInfo.stop}
                    </p>
                    <p className="text-sm text-gray-400">{busInfo.eta} away</p>
                  </div>
                </div>
                <span className={`text-${busInfo.color}-400 font-bold text-lg`}>
                  ETA
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
