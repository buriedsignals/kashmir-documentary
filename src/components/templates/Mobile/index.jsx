// Styles
import { MobileTemplateStyle } from "./index.style"
// Modules
import HeaderMobule from "@/components/modules/Header"
import YoutubeVideoModule from "@/components/modules/YoutubeVideo"

export default function MobileTemplate() {
  return (
    <MobileTemplateStyle>
      <HeaderMobule />
      <div className="background" />
      <main className="main">
        <div className="title-container">
          <h2 className="title">Please use a desktop device to watch the full interactive documentary.</h2>
        </div>
        <iframe src="https://www.youtube.com/embed/WuGt39uBfDU?controls=0&showinfo=0&rel=0" />
        <div className="description-container">
          <p className="description">This is an interactive web documentary about Kashmir.</p>
        </div>
      </main>
    </MobileTemplateStyle>
  )
}