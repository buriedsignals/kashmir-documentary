// Styles
import { InterviewTemplateStyle } from "./index.style"
// React
import { useEffect } from "react";
// Next
import { useRouter } from "next/router";
// Hooks
import useStore from "@/hooks/useStore";
// Modules
import FrameModule from "@/components/modules/Frame"
// Nodes
// import { EkoVideo } from '@ekolabs/eko-react-sdk';

export default function InterviewTemplate() {
  // Datas
  //   const ekoPlayer = useRef();
  //   const onPlayerInit = player => {
  //     ekoPlayer.current = player;
  //   };
  // let playerEventHandlers = {
  //   loadeddata: (e) => { console.log(e) },
  //   ended: () => onPlayerEnded(),
  // };
  // Store
  const interviewFinished = useStore((s) => s.interviewFinished)
  // Router
  const router = useRouter();
  // Effects
  useEffect(() => {
    window.addEventListener('message', ekoEvents);
  }, [])
  // Handlers
  const onPlayerEnded = () => {
    useStore.setState({ 
      interviewFinished: { [router.query.slug]: true }, 
      allInterviewsFinished: Object.values(interviewFinished).every(value => value === true) 
    })
    router.push('/interviews');
  }
  const getIdEkoBySlug = () => {
    let id = undefined;
    switch (router.query.slug) {
      case "humanitarian":
        id = "MQXyJN"
        break;
      case "geopolitics":
        id = "zD64Y6"
        break;
      case "history":
        id = "MbwRO1"
        break;
    }
    return id;
  }
  const ekoEvents = (event) => {
    if (!/https?:\/\/(.*?\.)?eko.com/.test(event.origin)) {
        return;
    }
    let msg = event.data;
    switch (msg.type) {
        case 'eko.ended':
          onPlayerEnded()
            break;
        default:
            break;
    }
  }
  return (
    <InterviewTemplateStyle>
      <FrameModule>
        <div className="content-interview">
          <div className="content-interview-container">
            { router.query.slug && <iframe src={ `https://video.eko.com/v/${ getIdEkoBySlug() }/embed?autoplay=true&hidePauseOverlay=true&embedapi=1.0&embedid=ekoembed-2&events=canplay%2Cplaying%2Cloadeddata%2Cended%2Csubtitles.visibilitychange%2Csubtitles.substart%2Csubtitles.subend%2Csubtitles.effectivelanguagechange%2Cplugininit` }></iframe> }
            {/* { router.query.slug && <EkoVideo id={ getIdEkoBySlug() } params={ { hidePauseOverlay: true } } onPlayerInit={onPlayerInit} events={playerEventHandlers}/> } */}
          </div>
        </div>
      </FrameModule>
    </InterviewTemplateStyle>
  )
}