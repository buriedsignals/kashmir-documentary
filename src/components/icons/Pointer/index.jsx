// Styles
import { PointerStyle } from "./index.style"

export default function Pointer({ ...props }) {
  return (
    <PointerStyle { ...props } width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 7C4 7 9.51446 13.2718 9.80089 13.5033C10.0583 13.7452 10.3651 13.7996 10.6555 13.5033C10.9459 13.2071 16.327 7 16.327 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </PointerStyle>
  )
}