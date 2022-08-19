// Styles
import { FilterStyle } from "./index.style"

export default function Filter({ ...props }) {
  return (
    <FilterStyle { ...props } width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="4" y1="6" x2="15.6728" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <line x1="6.33374" y1="10.6133" x2="13.3393" y2="10.6133" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <line x1="8.82739" y1="15.3828" x2="10.8455" y2="15.3828" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </FilterStyle>
  )
}