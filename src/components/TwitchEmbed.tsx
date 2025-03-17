
import { useState } from "react";
import { Twitch, RefreshCw } from "lucide-react";

const TwitchEmbed = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleRefresh = () => {
    setIsLoading(true);
    // Simulate loading for a brief period
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Twitch className="w-5 h-5 text-purple-500" />
        </div>
        <button 
          onClick={handleRefresh}
          className="p-1 rounded-full hover:bg-gray-800 transition-colors"
          aria-label="Refresh content"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>
      
      <div className="relative flex-1 min-h-32 bg-gray-900 rounded-lg overflow-hidden">
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            {/* Placeholder for image or any content */}
            <div className="text-gray-500 text-sm">Content placeholder</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TwitchEmbed;
