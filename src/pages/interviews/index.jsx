// Hooks
import useWindowSize from "@/hooks/useWindowSize"
// Templates
import InterviewsTemplate from "@/components/templates/Interviews"
import MobileTemplate from "@/components/templates/Mobile"

export default function Interviews() {
  // Hooks
  const windowSize = useWindowSize();
  return (
    <>
      {
        windowSize.width > 900 ?
          <InterviewsTemplate></InterviewsTemplate>
          :
          <MobileTemplate></MobileTemplate>
      }
    </>
  )
}