import { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import SensorCard from "./components/SensorCard";
import ChartSection from "./components/ChartSection";

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [data, setData] = useState([]);

  // Simulate sensor data for now
  useEffect(() => {
    const interval = setInterval(() => {
      const newData = {
        time: new Date().toLocaleTimeString(),
        gas: Math.floor(Math.random() * 1000),
        sound: Math.floor(Math.random() * 200),
        vibration: Math.random() > 0.8 ? 1 : 0
      };
      setData(prev => [...prev.slice(-20), newData]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const latest = data[data.length - 1] || { gas: 0, sound: 0, vibration: 0 };

  // Sensor icons with enhanced styling
  const gasIcon = (
    <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
    </svg>
  );

  const soundIcon = (
    <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.617 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.617l3.766-3.793a1 1 0 011.617.793zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
    </svg>
  );

  const vibrationIcon = (
    <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
    </svg>
  );

  const handleEnterDashboard = () => {
    setCurrentPage('dashboard');
  };

  const handleBackToLanding = () => {
    setCurrentPage('landing');
  };

  if (currentPage === 'landing') {
    return <LandingPage onEnterDashboard={handleEnterDashboard} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-all duration-500">
      <Navbar onBackToLanding={handleBackToLanding} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Enhanced Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl px-6 py-3 shadow-xl border border-white/20 dark:border-gray-700/50 mb-6">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-600 dark:text-green-400 font-semibold">System Online</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 font-heading">
            <span className="bg-gradient-to-r from-orange-500 via-green-500 to-blue-500 bg-clip-text text-transparent">
              Real-time Sensor Monitoring
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Advanced IoT monitoring system tracking environmental conditions across multiple sensors
          </p>
          <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Last updated: {new Date().toLocaleTimeString()}
          </div>
        </div>

        {/* Enhanced Sensor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <SensorCard
            title="Gas Sensor"
            value={latest.gas}
            unit="ppm"
            status={latest.gas > 700 ? "Alert" : "Safe"}
            icon={gasIcon}
            color={latest.gas > 700 ? "bg-red-500" : "bg-green-500"}
            bgColor="bg-red-100 dark:bg-red-900/30"
          />
          
          <SensorCard
            title="Sound Sensor"
            value={latest.sound}
            unit="dB"
            status={latest.sound > 150 ? "Loud" : "Normal"}
            icon={soundIcon}
            color={latest.sound > 150 ? "bg-yellow-500" : "bg-blue-500"}
            bgColor="bg-blue-100 dark:bg-blue-900/30"
          />
          
          <SensorCard
            title="Vibration Sensor"
            value={latest.vibration ? "Detected" : "Stable"}
            unit=""
            status={latest.vibration ? "Alert" : "OK"}
            icon={vibrationIcon}
            color={latest.vibration ? "bg-red-500" : "bg-green-500"}
            bgColor="bg-green-100 dark:bg-green-900/30"
          />
        </div>

        {/* Enhanced Chart Section */}
        <ChartSection data={data} />
      </main>
    </div>
  );
}

export default App;