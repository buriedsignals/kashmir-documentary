// Styles
import { ColonisationStyle } from "./index.style"

export default function Colonisation({ ...props }) {
  return (
    <ColonisationStyle { ...props } width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_974_4)">
        <path d="M0.878407 3.31465L4.51401 1.21563L8.14962 3.31465V7.51269L4.51401 9.61171L0.878407 7.51269V3.31465Z" stroke="white" strokeWidth="1.5"/>
        <path d="M11.875 3.31465L15.5106 1.21563L19.1462 3.31465V7.51269L15.5106 9.61171L11.875 7.51269V3.31465Z" stroke="white" strokeWidth="1.5"/>
        <path d="M6.52538 12.4768L10.161 10.3777L13.7966 12.4768V16.6748L10.161 18.7738L6.52538 16.6748V12.4768Z" stroke="white" strokeWidth="1.5"/>
      </g>
      <defs>
        <clipPath id="clip0_974_4">
          <rect width="20" height="20" fill="white"/>
        </clipPath>
      </defs>
    </ColonisationStyle>
  )
}