// Styles
import { BurgerStyle } from "./index.style"

export default function Burger({ ...props }) {
  return (
    <BurgerStyle { ...props } width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 13H33.4394C35.0962 13 36.4394 14.3431 36.4394 16V16.4827H12C10.3431 16.4827 9 15.1395 9 13.4827V13Z" fill="white"/>
      <path d="M9 21.0176H33.4394C35.0962 21.0176 36.4394 22.3607 36.4394 24.0176V24.4647H12C10.3431 24.4647 9 23.1216 9 21.4647V21.0176Z" fill="white"/>
      <path d="M9 29.0254H33.4394C35.0962 29.0254 36.4394 30.3685 36.4394 32.0254V32.4557H12C10.3431 32.4557 9 31.1126 9 29.4557V29.0254Z" fill="white"/>
    </BurgerStyle>
  )
}