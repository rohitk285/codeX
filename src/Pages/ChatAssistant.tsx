import { useState } from "react";
import { Send, Mic, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ChatAssistant() {
  const navigate = useNavigate();
  const [messages] = useState([
    { id: 1, text: "नमस्ते! मैं आपकी बस ट्रैकिंग में मदद करूंगा। आप क्या जानना चाहते हैं?", lang: "हिंदी", time: "12:09 pm" },
    { id: 2, text: "Hello! I can help you with bus tracking. What would you like to know?", lang: "English", time: "12:09 pm" }
  ]);

  return (
    <div className="flex flex-col h-screen bg-slate-900">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-slate-800 shadow-md rounded-b-2xl">
        <div className="flex items-center space-x-3">
          <ChevronLeft className="w-6 h-6 text-gray-200 cursor-pointer hover:text-white transition-colors" 
          onClick={() => navigate("/")}/>
          <div>
            <h2 className="font-semibold text-lg text-gray-100">AI Assistant</h2>
            <p className="text-sm text-gray-400">Multilingual support</p>
          </div>
        </div>
        <div className="text-sm bg-slate-700 px-3 py-1 rounded-full text-gray-200">English</div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className="flex flex-col max-w-xl mx-auto">
            <div className="bg-slate-800 rounded-2xl px-4 py-3 text-sm text-gray-100 shadow-sm">
              {msg.text}
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-1 px-2">
              <span>{msg.time}</span>
              <span>{msg.lang}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="flex items-center p-4 bg-slate-800 shadow-inner border-t border-slate-700 rounded-t-2xl">
        <input
          type="text"
          placeholder="Ask your question..."
          className="flex-1 border border-slate-700 bg-slate-900 text-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder-gray-400"
        />
        <button className="ml-2 p-3 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition-all">
          <Send size={20} />
        </button>
        <button className="ml-2 p-3 bg-slate-700 text-gray-200 rounded-full hover:bg-slate-600 transition-all">
          <Mic size={20} />
        </button>
      </div>
    </div>
  );
}
