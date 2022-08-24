// Styles
import { VimeoVideoStyle } from "./index.style"
// React
import { useEffect, useRef, useState } from "react";
// Nodes
import Vimeo from "@u-wave/react-vimeo"; 

export default function VimeoVideo({ startVideo, onEndVideo, ...props }) {
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
      refPlayer.current.player.play()
    }
  }, [startVideo]);
  // Handler
  const onEnd = () => {
    onEndVideo()
    setIsEnd(true)
  }
  return (
    <VimeoVideoStyle startVideo={ startVideo } isEnd={ isEnd } { ...props }>
      <div className="vimeo-video-container">
      <Vimeo ref={ refPlayer } video="4724508b3e" onEnd={ onEnd } />
      </div>
    </VimeoVideoStyle>
  )
}