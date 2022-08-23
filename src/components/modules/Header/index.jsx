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
import FacebookIcon from "@/components/icons/Facebook"
import TwitterIcon from "@/components/icons/Twitter"

export default function Header({ ...props }) {
  const router = useRouter()
  const textSocialShare = 'Lines of Control'
  const hashtagSocialShare = 'KashmirConflict'
  const urlSocialShare = 'https://yementribute.com'
  
  return (
    <HeaderStyle { ...props }>
      <Link href='/'><a className="logo">
        <LogoIcon />
      </a></Link>
      <div className="navigation">
        <div className="items">
          <a className="act" href='https://standwithkashmir.org/kashmir-for-kashmiris/' target="_blank" rel="noreferrer">
            <ActButton>Act now</ActButton>
          </a>
          <a className="socialItem" href={`https://www.facebook.com/sharer/sharer.php?p[url]=${urlSocialShare}`} target="_blank" rel="noreferrer">
              <FacebookIcon />
          </a>
          <a className="socialItem" href={`https://twitter.com/intent/tweet?text=${textSocialShare}&hashtags=${hashtagSocialShare}&url=${urlSocialShare}`} target="_blank" rel="noreferrer">
              <TwitterIcon />
          </a>
        </div>
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