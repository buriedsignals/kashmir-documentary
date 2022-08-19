// Styles
import { InfrastructureStyle } from "./index.style"

export default function Infrastructure({ ...props }) {
  return (
    <InfrastructureStyle { ...props } width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.71997 16.8859H16.2632V7.62449L9.7825 3.08008L3.71997 7.62449V16.8859Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="7.53491" y1="13.2969" x2="12.4483" y2="13.2969" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="7.53491" y1="9.88867" x2="12.4483" y2="9.88867" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </InfrastructureStyle>
  )
}