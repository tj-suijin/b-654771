
import { useState } from "react";
import { Twitch, RefreshCw } from "lucide-react";

const TwitchEmbed = () => {
  const channel = "wavebrotj";
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleRefresh = () => {
    setIsLoading(true);
    // Force reload by temporarily changing the key
    const iframe = document.getElementById("twitch-embed") as HTMLIFrameElement;
    if (iframe) {
      iframe.src = iframe.src;
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Twitch className="w-5 h-5 mr-2 text-purple-500" />
          <h2 className="text-lg font-bold">Twitch Stream</h2>
        </div>
        <button 
          onClick={handleRefresh}
          className="p-1 rounded-full hover:bg-gray-800 transition-colors"
          aria-label="Refresh stream"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>
      
      <div className="relative flex-1 min-h-32 bg-black rounded-lg overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        )}
        <iframe
          id="twitch-embed"
          src={`https://player.twitch.tv/?channel=${channel}&parent=${window.location.hostname}&muted=true`}
          height="100%"
          width="100%"
          allowFullScreen
          className="rounded-lg"
          onLoad={handleIframeLoad}
        ></iframe>
      </div>
    </div>
  );
};

export default TwitchEmbed;
