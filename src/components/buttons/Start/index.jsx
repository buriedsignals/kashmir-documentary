// Styles
import { StartStyle } from "./index.style"

export default function Start({ children, ...props }) {
  return (
    <StartStyle { ...props }>
      <div className="border-left"></div>
      <div className="border-right"></div>
      { children }
    </StartStyle>
  )
}