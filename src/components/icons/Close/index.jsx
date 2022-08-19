// Styles
import { CloseStyle } from "./index.style"

export default function Close({ ...props }) {
  return (
    <CloseStyle { ...props } width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.8967 14.5762C13.8967 14.5762 10.23 10.4059 10.0396 10.2519C9.8684 10.0911 9.6644 10.0549 9.47133 10.2519C9.27826 10.4489 5.70017 14.5762 5.70017 14.5762" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.69995 5.6582C5.69995 5.6582 9.36666 9.82848 9.55711 9.98243C9.72828 10.1432 9.93228 10.1794 10.1254 9.98243C10.3184 9.78544 13.8965 5.6582 13.8965 5.6582" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </CloseStyle>
  )
}