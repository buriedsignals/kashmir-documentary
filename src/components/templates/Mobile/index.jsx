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
          <h2 className="title">Please use a desktop device to access the interactive documentary.</h2>
        </div>
        <iframe src="https://www.youtube.com/embed/icPHcK_cCF4?controls=0&showinfo=0&rel=0" />
        <div className="description-container">
          <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget lorem nisi ac, maecenas aliquet tortor, lobortis blandit odio. Arcu posuere non diam porta ornare. Sed nulla suspendisse mauris aliquet egestas. Imperdiet ridiculus molestie amet, elit lacinia tellus morbi.</p>
        </div>
      </main>
    </MobileTemplateStyle>
  )
}