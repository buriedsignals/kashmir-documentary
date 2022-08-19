// Styles
import { YoutubeVideoStyle } from "./index.style"
// React
import { useEffect, useRef } from "react";
// Nodes
import YouTube from "react-youtube";

export default function YoutubeVideo({ startVideo, onEndVideo, ...props }) {
  // Datas
  const opts = {
    playerVars: {
      controls: 0,
      showinfo: 0,
      rel: 0,
      modestbranding: 1,
    }
  };
  // References
  const refPlayer = useRef();
  // Effects
  useEffect(() => {
    if (startVideo) {
      refPlayer.current.internalPlayer.playVideo()
    }
  }, [startVideo]);
  return (
    <YoutubeVideoStyle startVideo={ startVideo } { ...props }>
      <div className="youtube-video-container">
      <YouTube ref={ refPlayer } videoId="icPHcK_cCF4" opts={ opts } onEnd={ onEndVideo } />
      </div>
    </YoutubeVideoStyle>
  )
}