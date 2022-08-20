// Styles
import { HomeTemplateStyle } from "./index.style"
// React
import { useEffect, useState } from "react"
// Next
import { useRouter } from "next/router"
// Hooks
import useStore from "@/hooks/useStore"
// Modules
import FrameModule from "@/components/modules/Frame"
import YoutubeVideo from "@/components/modules/YoutubeVideo"
// Buttons
import StartButton from "@/components/buttons/Start"

export default function HomeTemplate() {
  // Router
  const router = useRouter();
  // Store
  const backgroundImage = useStore((s) => s.backgroundImage)
  // States
  const [startVideo, setStartVideo] = useState(false);
  // useEffect(() => {
  //   router.events.on('routeChangeComplete', onRouteChange)
  //   return () => {
  //     router.events.off('routeChangeComplete', onRouteChange)
  //   };
  // }, [router.events]);
  // Handlers
  const onClickButton = () => {
    setStartVideo(true);
  }
  const onEndVideo = (e) => {
    router.push('/interviews');
  }
  // const onRouteChange = () => {
  //   setStartVideo(false);
  // }
  return (
    <HomeTemplateStyle>
      <FrameModule backgroundImage={ `./images/${ backgroundImage }` }>
        <div className="content-home">
          <div className="content-home-container">
            <p className="introduction">This is a 20 minute interactive documentary.</p>
            <StartButton className="button-start-home" onClick={ onClickButton } >Start watching</StartButton>
          </div>
        </div>
        <YoutubeVideo startVideo={ startVideo } onEndVideo={ onEndVideo } />
      </FrameModule>
    </HomeTemplateStyle>
  )
}