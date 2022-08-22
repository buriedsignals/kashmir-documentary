// Styles
import { CardInterviewStyle } from "./index.style"
// Next
import Link from "next/link"
// Store
import useStore from "@/hooks/useStore"
// Buttons
import StartButton from "@/components/buttons/Start"

export default function CardInterview({ title, slug, description, nameHover, descriptionHover, ...props }) {
  // Store
  const [interviewFinished, allInterviewsFinished] = useStore((s) => [s.interviewFinished, s.allInterviewsFinished]);
  return (
    <CardInterviewStyle slug={ slug } interviewFinished={ interviewFinished[slug] } allInterviewsFinished={ allInterviewsFinished } { ...props }>
      <div className="content-card-interview">
        <div className="content-card-interview-container">
          <h2 className="title">{ title }</h2>
          <div className="content-card-interview-description">
            <p className="description">{ description }</p>
          </div>
        </div>
        <div className="content-card-interview-container-hover">
          <h2 className="title">{ title }</h2>
          <div className="content-card-interview-description">
            <p className="name">{ nameHover }</p>
            <p className="description">{ descriptionHover }</p>
          </div>
        </div>
        {/* <div className="content-card-interview-container">
          <h2 className="title">{ title }</h2>
          <div className="content-card-interview-description-container">
            <div className="content-card-interview-description-hover">
              <p className="name">{ nameHover }</p>
              <p className="description">{ descriptionHover }</p>
            </div>
            <div className="content-card-interview-description">
              <p className="description">{ description }</p>
            </div>
          </div>
        </div>           */}
        <Link href={ `/interviews/${ slug }` }>
          <a>
            <StartButton className="button-start-card-interview">Start interview</StartButton>
          </a>
        </Link>
      </div>
    </CardInterviewStyle>
  )
}