// Styles
import { MenuStyle } from "./index.style"
// React
import { useEffect } from "react";
// Next
import Link from "next/link"
import { useRouter } from "next/router"
// Nodes
import { motion } from 'framer-motion';
// Hooks
import useStore from "@/hooks/useStore"
// Icons
import BurgerIcon from "@/components/icons/Burger"
import CloseIcon from "@/components/icons/Close"
import Credits from "@/components/modules/Credits"

const fadeInRight = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.65,
      delay: 0.65
    }
  },
};

export default function Menu({ ...props }) {
  // Router
  const router = useRouter();
  // Store
  const [menuOpen, creditsOpen] = useStore((s) => [s.menuOpen, s.creditsOpen]);
  // Effect
  useEffect(() => {
    router.events.on('routeChangeComplete', onRouteChange)
    return () => {
      router.events.off('routeChangeComplete', onRouteChange)
    };
  }, [router.events]);
  // Handlers
  const onClickButton = () => {
    useStore.setState({ menuOpen: !menuOpen, creditsOpen: false, popupOpen: false });
  }
  const onRouteChange = () => {
    useStore.setState({ menuOpen: false, creditsOpen: false, popupOpen: false });
  }
  // Conditions
  const isActiveRoute = (pathname) => {
    return router.pathname == pathname ? 'is-active' : '';
  }
  return (
    <MenuStyle { ...props } className="menu">
      { menuOpen ?
        <motion.div className="panel" initial="initial" animate="animate">
          <button className="button-close-menu" onClick={ onClickButton }>
            <CloseIcon />
          </button>
          { !creditsOpen &&
          <motion.div className="content-menu" variants={fadeInRight}>
            <ul>
              <li className={ isActiveRoute('/map') }>
                <Link href="/map">
                  <a  onClick={ onClickButton }>
                    <span>01</span>Map
                  </a>
                </Link>
              </li>
              <li className={ isActiveRoute('/interviews') }>
                <Link href="/interviews">
                  <a onClick={ onClickButton }>
                    <span>02</span>Interviews
                  </a>
                </Link>
              </li>
              <li className={ isActiveRoute('/stories') }>
                <a href='https://www.google.fr' target="_blank" rel="noreferrer" onClick={ onClickButton }>
                  <span>03</span>Stories
                </a>
              </li>
              <li className={ isActiveRoute('/about') }>
                <Link href="/about">
                  <a onClick={ onClickButton }>
                    <span>04</span>About
                  </a>
                </Link>
              </li>
            </ul>
          </motion.div>
          }
          <Credits />
        </motion.div>
        :
        <button className="button-open-menu" onClick={ onClickButton }>
          <BurgerIcon />
        </button>
      }
    </MenuStyle>
  )
}