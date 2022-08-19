// Styles
import { EventStyle } from "./index.style"

export default function Event({ ...props }) {
  return (
    <EventStyle { ...props } width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10.0073" cy="10.0061" r="6.70724" stroke="white" strokeWidth="1.5"/>
      <circle cx="10.0074" cy="10.006" r="0.937594" fill="white"/>
      <line x1="13.9348" y1="10.0195" x2="15.817" y2="10.0195" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="4.07251" y1="10.0195" x2="5.95471" y2="10.0195" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="10.0371" y1="6.01562" x2="10.0371" y2="4.13343" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="10.0371" y1="15.8789" x2="10.0371" y2="13.9967" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </EventStyle>
  )
}