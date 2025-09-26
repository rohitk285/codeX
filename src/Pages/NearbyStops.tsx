import { useState } from "react";
import { useNavigate } from "react-router-dom";

const stopsData = [
  { id: "S1", name: "Pine Street & 5th Avenue", dist: "0.5 mi away", buses: "45, 101", color: "bg-sky-600" },
  { id: "S2", name: "Oak Street & Main Street", dist: "0.8 mi away", buses: "22A, 78B", color: "bg-lime-600" },
  { id: "S3", name: "Central Plaza", dist: "1.2 mi away", buses: "45, 88", color: "bg-violet-600" },
  { id: "S4", name: "Parkside Drive", dist: "1.5 mi away", buses: "101, 34C", color: "bg-rose-600" },
  { id: "S5", name: "Riverdale Bridge", dist: "0.9 mi away", buses: "12, 55", color: "bg-emerald-600" },
  { id: "S6", name: "Eastwood Station", dist: "1.8 mi away", buses: "22A, 101", color: "bg-amber-600" },
  { id: "S7", name: "City Hall", dist: "0.3 mi away", buses: "45, 78B", color: "bg-cyan-600" },
  { id: "S8", name: "Greenwood Park", dist: "2.1 mi away", buses: "88, 34C", color: "bg-fuchsia-600" },
  { id: "S9", name: "Old Town Square", dist: "0.7 mi away", buses: "12, 101", color: "bg-orange-600" },
  { id: "S10", name: "Harbor View", dist: "1.4 mi away", buses: "55, 78B", color: "bg-teal-600" },
  { id: "S11", name: "Sunset Boulevard", dist: "2.5 mi away", buses: "45, 22A", color: "bg-red-600" },
  { id: "S12", name: "Northwood Mall", dist: "1.1 mi away", buses: "88, 34C", color: "bg-blue-600" },
];

const NearbyStopsPage: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  // Filter stops based on search
  const filteredStops = stopsData.filter(
    (stop) =>
      stop.name.toLowerCase().includes(search.toLowerCase()) ||
      stop.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 p-4">
      <div className="w-full max-w-3xl lg:max-w-5xl bg-slate-900 rounded-3xl shadow-lg p-6 space-y-6">
        {/* Header */}
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0 mb-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate("/")}
              className="p-2 rounded-full bg-slate-800 text-gray-300 hover:bg-slate-700 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </button>
            <h1 className="text-2xl font-bold text-gray-100">Nearby Stops</h1>
          </div>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search stops..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-64 p-2 rounded-lg bg-slate-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </header>

        {/* Nearby Stops List */}
        <div className="space-y-4">
          {filteredStops.length > 0 ? (
            filteredStops.map((stop) => (
              <div
                key={stop.id}
                className="bg-slate-800 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between shadow-sm transition-transform transform hover:scale-105"
              >
                <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                  <div className={`${stop.color} text-white font-bold p-2 px-3 rounded-lg text-lg`}>
                    {stop.id}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-100">{stop.name}</p>
                    <p className="text-sm text-gray-400">{stop.dist}</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-300">Buses: {stop.buses}</span>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center">No stops found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NearbyStopsPage;
