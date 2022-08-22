// Hooks
import useWindowSize from "@/hooks/useWindowSize"
// Templates
import AboutTemplate from "@/components/templates/About"
import MobileTemplate from "@/components/templates/Mobile"

export default function About() {
  // Hooks
  const windowSize = useWindowSize();
  return (
    <>
      {
        windowSize.width > 900 ?
          <AboutTemplate></AboutTemplate>
          :
          <MobileTemplate></MobileTemplate>
      }
    </>
  )
}