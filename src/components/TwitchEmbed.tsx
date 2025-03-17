
import { useState } from "react";
import { Twitch, RefreshCw } from "lucide-react";

interface TwitchEmbedProps {
  defaultChannel?: string;
}

const TwitchEmbed = ({ defaultChannel = "twitch" }: TwitchEmbedProps) => {
  const [channel, setChannel] = useState(defaultChannel);
  const [inputChannel, setInputChannel] = useState(defaultChannel);
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setChannel(inputChannel);
    setIsLoading(true);
  };

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
      
      <form onSubmit={handleSubmit} className="mb-3 flex">
        <input
          type="text"
          value={inputChannel}
          onChange={(e) => setInputChannel(e.target.value)}
          placeholder="Channel name"
          className="flex-1 bg-gray-800 border border-gray-700 rounded-l-lg px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
        />
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white rounded-r-lg px-3 py-1 text-sm transition-colors"
        >
          Watch
        </button>
      </form>
      
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
