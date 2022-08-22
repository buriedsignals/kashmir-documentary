// Hooks
import useWindowSize from "@/hooks/useWindowSize"
// Templates
import InterviewTemplate from "@/components/templates/Interview"
import MobileTemplate from "@/components/templates/Mobile"

export default function Interview() {
  // Hooks
  const windowSize = useWindowSize();
  return (
    <>
      {
        windowSize.width > 900 ?
          <InterviewTemplate></InterviewTemplate>
          :
          <MobileTemplate></MobileTemplate>
      }
    </>
  )
}