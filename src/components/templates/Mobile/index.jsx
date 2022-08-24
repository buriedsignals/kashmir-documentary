// Styles
import { MobileTemplateStyle } from "./index.style"
// Modules
import HeaderMobule from "@/components/modules/Header"
import Vimeo from "@u-wave/react-vimeo"

export default function MobileTemplate() {
  return (
    <MobileTemplateStyle>
      <HeaderMobule />
      <div className="background" />
      <main className="main">
        <div className="title-container">
          <h2 className="title">Please use a desktop to watch the full interactive documentary and map.</h2>
        </div>
        <Vimeo video="742564590" />
        <div className="description-container">
          <p className="description">This is an interactive web documentary about Kashmir.</p>
        </div>
      </main>
    </MobileTemplateStyle>
  )
}