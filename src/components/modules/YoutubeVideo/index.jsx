// Styles
import { YoutubeVideoStyle } from "./index.style"
// React
import { useEffect, useRef, useState } from "react";
// Nodes
import YouTube from "react-youtube";

export default function YoutubeVideo({ startVideo, onEndVideo, ...props }) {
  // Datas
  const opts = {
    playerVars: {
      controls: 1,
      showinfo: 0,
      rel: 0,
      modestbranding: 1,
    }
  };
  // References
  const refPlayer = useRef();
  // States
  const [isEnd, setIsEnd] = useState(false)
  // Effects
  useEffect(() => {
    if (startVideo) {
      refPlayer.current.internalPlayer.playVideo()
    }
  }, [startVideo]);
  // Handler
  const onEnd = () => {
    onEndVideo()
    setIsEnd(true)
  }
  return (
    <YoutubeVideoStyle startVideo={ startVideo } isEnd={ isEnd } { ...props }>
      <div className="youtube-video-container">
      <YouTube ref={ refPlayer } videoId="WuGt39uBfDU" opts={ opts } onEnd={ onEnd } />
      </div>
    </YoutubeVideoStyle>
  )
}