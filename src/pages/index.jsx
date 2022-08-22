// Hooks
import useWindowSize from "@/hooks/useWindowSize"
// Templates
import HomeTemplate from "@/components/templates/Home"
import MobileTemplate from "@/components/templates/Mobile"

export default function Home() {
  // Hooks
  const windowSize = useWindowSize();
  return (
    <>
      {
        windowSize.width > 900 ?
          <HomeTemplate></HomeTemplate>
          :
          <MobileTemplate></MobileTemplate>
      }
    </>
  )
}