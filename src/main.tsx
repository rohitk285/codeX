import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import ChatAssistant from "./Pages/ChatAssistant";
import HomePage from "./Pages/HomePage";
import NearbyStopsPage from "./Pages/NearbyStops";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nearby-stops" element={<NearbyStopsPage />} />
        <Route path="/chat-assistant" element={<ChatAssistant />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
