// Hooks
import useWindowSize from "@/hooks/useWindowSize"
// Templates
import HistoryTemplate from "@/components/templates/History"
import MobileTemplate from "@/components/templates/Mobile"

export default function History() {
  // Hooks
  const windowSize = useWindowSize();
  return (
    <>
      {
        windowSize.width > 900 ?
          <HistoryTemplate></HistoryTemplate>
          :
          <MobileTemplate></MobileTemplate>
      }
    </>
  )
}