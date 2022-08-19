// Styles
import { ActStyle } from "./index.style"

export default function Act({ children, ...props }) {
  return (
    <ActStyle { ...props }>
      <div className="border-left"></div>
      <div className="border-right"></div>
      { children }
    </ActStyle>
  )
}