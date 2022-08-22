// Hooks
import useWindowSize from "@/hooks/useWindowSize"
// Templates
import MapTemplate from "@/components/templates/Map"
import MobileTemplate from "@/components/templates/Mobile"

export default function Map() {
  // Hooks
  const windowSize = useWindowSize();
  return (
    <>
      {
        windowSize.width > 900 ?
          <MapTemplate></MapTemplate>
          :
          <MobileTemplate></MobileTemplate>
      }
    </>
  )
}