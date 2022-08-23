// Styles
import { HeaderStyle } from "./index.style"
// Next
import Link from "next/link"
// Modules
import MenuModule from "@/components/modules/Menu"
// Icons
import LogoIcon from "@/components/icons/Logo"
// Buttons
import ActButton from "@/components/buttons/Act"
import BuriedSignalsLogoIcon from "@/components/icons/BuriedSignalsLogo"
import StandKashmirLogoIcon from "@/components/icons/StandKashmirLogo"
import { useRouter } from "next/router"

export default function Header({ ...props }) {
  const router = useRouter()
  return (
    <HeaderStyle { ...props }>
      <Link href='/'><a className="logo">
        <LogoIcon />
      </a></Link>
      <div className="navigation">
        <a className="act" href='https://standwithkashmir.org/kashmir-for-kashmiris/' target="_blank" rel="noreferrer">
          <ActButton>Act now</ActButton>
        </a>
        <MenuModule />
      </div>
      <a className="bs-logo" style={ router.pathname == "/interviews" ? { opacity: 0 } : {} } href="https://www.buriedsignals.com" target="_blank" rel="noreferrer">
        <BuriedSignalsLogoIcon />
      </a>
      <a className="sk-logo" style={ router.pathname == "/interviews" ? { opacity: 0 } : {} } href="https://standwithkashmir.org" target="_blank" rel="noreferrer">
        <StandKashmirLogoIcon />
      </a>
    </HeaderStyle>
  )
}