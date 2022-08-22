// Styles
import { InterviewTemplateStyle } from "./index.style"
// Next
import { useRouter } from "next/router";
// Hooks
import useStore from "@/hooks/useStore";
// Modules
import HeaderModule from "@/components/modules/Header"
import FrameModule from "@/components/modules/Frame"
// Nodes
import { EkoVideo } from '@ekolabs/eko-react-sdk';
import { useRef } from "react";

export default function InterviewTemplate() {
  // Datas
    const ekoPlayer = useRef();
    const onPlayerInit = player => {
      ekoPlayer.current = player;
    };
  let playerEventHandlers = {
    loadeddata: (e) => { console.log(e) },
    ended: () => onPlayerEnded(),
  };
  // Store
  const interviewFinished = useStore((s) => s.interviewFinished)
  // Router
  const router = useRouter();
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
        id = "MQXyJN"
        break;
    }
    return id;
  }
  return (
    <InterviewTemplateStyle>
      <FrameModule>
        <div className="content-interview">
          <div className="content-interview-container">
            { router.query.slug && <EkoVideo id={ getIdEkoBySlug() } params={ { hidePauseOverlay: true } } onPlayerInit={onPlayerInit} events={playerEventHandlers}/> }
          </div>
        </div>
      </FrameModule>
    </InterviewTemplateStyle>
  )
}