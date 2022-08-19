// Styles
import { InterviewsTemplateStyle } from "./index.style"
// React
import { useEffect } from "react"
// Next
import Link from "next/link"
// Hooks
import useStore from "@/hooks/useStore"
// Modules
import HeaderModule from "@/components/modules/Header"
import FrameModule from "@/components/modules/Frame"
import CardInterview from "@/components/modules/CardInterview"
// Buttons
import StartButton from "@/components/buttons/Start"

export default function InterviewsTemplate() {
  // Datas
  const interviews = [
    {
      title: "Humanitarian",
      slug: "humanitarian",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      nameHover: "Mona Bhan",
      descriptionHover: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Geopolitics",
      slug: "geopolitics",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      nameHover: "Mona Bhan",
      descriptionHover: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "History",
      slug: "history",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      nameHover: "Mona Bhan",
      descriptionHover: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    }
  ]
  // Store
  const allInterviewsFinished = useStore((s) => s.allInterviewsFinished);
  // Handlers
  const onClickButtonReset = () => {
    const newInterviewFinished = {}
    interviews.forEach(interview => {
      newInterviewFinished[interview.slug] = false;
    });
    useStore.setState({ 
      interviewFinished: newInterviewFinished, 
      allInterviewsFinished: false
    })
  }
  return (
    <InterviewsTemplateStyle>
      <FrameModule full={ false }>
        <div className="content-interviews">
          <div className="content-interviews-container">
            {
              interviews.map(interview => {
                return <CardInterview key={ interview.slug } title={ interview.title } slug={ interview.slug } description={ interview.description } nameHover={ interview.nameHover } descriptionHover={ interview.descriptionHover } />;
              })
            }
            {
              allInterviewsFinished && 
                <div className="interviews-finished-container">
                  <h1 className="title">You have watch all the interviews</h1>
                  <div className="buttons">       
                    <Link href="/map">
                      <a>
                        <StartButton className="button-start-map">Go to the map</StartButton>
                      </a>
                    </Link>
                    <StartButton className="button-start-reset" onClick={ onClickButtonReset }>Reset your progress</StartButton>
                  </div>
                </div>
            }
          </div>
        </div>
      </FrameModule>
    </InterviewsTemplateStyle>
  )
}