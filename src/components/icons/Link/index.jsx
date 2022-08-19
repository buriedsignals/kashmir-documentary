// Styles
import { LinkStyle } from "./index.style"

export default function Link({ ...props }) {
  return (
    <LinkStyle { ...props } width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.45532 9.71094H13.5346" stroke="white" strokeWidth="1.17987" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.22514 13.2492H5.27546C4.33669 13.2492 3.43638 12.8762 2.77257 12.2124C2.10876 11.5486 1.73584 10.6483 1.73584 9.70954C1.73584 8.77077 2.10876 7.87046 2.77257 7.20665C3.43638 6.54284 4.33669 6.16992 5.27546 6.16992H8.22514" stroke="white" strokeWidth="1.17987" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.7646 13.2492H14.7143C15.6531 13.2492 16.5534 12.8762 17.2172 12.2124C17.881 11.5486 18.2539 10.6483 18.2539 9.70954C18.2539 8.77077 17.881 7.87046 17.2172 7.20665C16.5534 6.54284 15.6531 6.16992 14.7143 6.16992H11.7646" stroke="white" strokeWidth="1.17987" strokeLinecap="round" strokeLinejoin="round"/>
    </LinkStyle>
  )
}