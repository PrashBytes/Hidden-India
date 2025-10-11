const SensorCard = ({ title, value, unit, status, icon, color, bgColor }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'safe':
      case 'normal':
      case 'ok':
        return 'text-green-600 dark:text-green-400';
      case 'alert':
      case 'danger':
      case 'loud':
        return 'text-red-600 dark:text-red-400';
      case 'warning':
        return 'text-yellow-600 dark:text-yellow-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  };

  const getStatusBgColor = (status) => {
    switch (status.toLowerCase()) {
      case 'safe':
      case 'normal':
      case 'ok':
        return 'bg-green-100 dark:bg-green-900/30';
      case 'alert':
      case 'danger':
      case 'loud':
        return 'bg-red-100 dark:bg-red-900/30';
      case 'warning':
        return 'bg-yellow-100 dark:bg-yellow-900/30';
      default:
        return 'bg-gray-100 dark:bg-gray-800';
    }
  };

  return (
    <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-white/20 dark:border-gray-700/50 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 dark:from-gray-800/50 dark:via-gray-700/50 dark:to-gray-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
      
      <div className="relative z-10 p-8">
        {/* Header with icon and title */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className={`p-4 rounded-2xl ${bgColor} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              {icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                {title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Real-time monitoring</p>
            </div>
          </div>
        </div>

        {/* Value and unit */}
        <div className="mb-6">
          <div className="flex items-baseline space-x-3">
            <span className="text-4xl font-black text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
              {value}
            </span>
            {unit && (
              <span className="text-lg text-gray-500 dark:text-gray-400 font-medium">
                {unit}
              </span>
            )}
          </div>
        </div>

        {/* Status and Live Indicator */}
        <div className="flex items-center justify-between">
          <span className={`px-4 py-2 rounded-full text-sm font-bold ${getStatusBgColor(status)} ${getStatusColor(status)} shadow-lg backdrop-blur-sm`}>
            {status}
          </span>
          <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
            <div className={`w-3 h-3 rounded-full ${color} animate-pulse shadow-lg`}></div>
            <span className="font-medium">LIVE</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
          <div 
            className={`h-2 rounded-full transition-all duration-1000 ${color.replace('bg-', 'bg-gradient-to-r from-').replace('-500', '-400')} to-${color.split('-')[1]}-600`}
            style={{ 
              width: status.toLowerCase().includes('alert') || status.toLowerCase().includes('danger') || status.toLowerCase().includes('loud') ? '85%' : '45%' 
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SensorCard;
