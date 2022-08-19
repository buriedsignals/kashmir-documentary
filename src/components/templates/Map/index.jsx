// Styles
import { MapTemplateStyle } from "./index.style"
// Hooks
import useStore from "@/hooks/useStore"
// Modules
import HeaderModule from "@/components/modules/Header"
import FrameModule from "@/components/modules/Frame"
import MapboxModule from "@/components/modules/Mapbox"
import FiltersMapModule from "@/components/modules/FiltersMap"
import PopupMapModule from "@/components/modules/PopupMap"

export default function AboutTemplate() {
  // Store
  const backgroundImage = useStore((s) => s.backgroundImage)
  return (
    <MapTemplateStyle>
      <FrameModule backgroundImage={ `./images/${ backgroundImage }` }>
        <div className="content-map">
          <div className="content-map-container">
            <FiltersMapModule />
            <PopupMapModule />
            <MapboxModule />
          </div>
        </div>
      </FrameModule>
    </MapTemplateStyle>
  )
}