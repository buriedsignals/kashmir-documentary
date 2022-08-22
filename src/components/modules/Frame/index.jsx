// Styles
import { FrameStyle, LineStyle, BorderStyle } from "./index.style"
// Nodes
import { motion, AnimatePresence } from 'framer-motion';
// Hooks
import useStore from "@/hooks/useStore"
import useLoader from "@/hooks/useLoader"
// Modules
import HeaderModule from "@/components/modules/Header"
import LoaderModule from "@/components/modules/Loader";
import { responsiveValue } from "@/components/templates/Interview/index.style";
import useWindowSize from "@/hooks/useWindowSize";

const transition = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
      delay: 1
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1
    }
  }
};

const variantsFrameLine = (orientation, full, noBottom, w) => {
  const initialTransition = {}
  const animateTransition = {
    transition: {
      duration: 0.5
    }
  }
  const menuOpenTransition = {
    transition: {
      duration: 0.75
    }
  }
  const popupOpenTransition = {
    transition: {
      duration: 0.75
    }
  }
  const exitTransition = {
    transition: {
      duration: 0.75
    }
  }
  switch (orientation) {
    case "top":
      initialTransition.top = "50vh";
      initialTransition.width = "100vw";
      animateTransition.top= `${ w.width > 1440 ? '90px' : responsiveValue(90) }`;
      animateTransition.width = "100vw";
      popupOpenTransition.top= `${ w.width > 1440 ? '90px' : responsiveValue(90) }`;
      popupOpenTransition.width = `calc(100vw - ${ w.width > 1440 ? '548px' : responsiveValue(548) })`;
      exitTransition.top = "50vh";
      break;
    case "right":
      initialTransition.left = "50vw";
      animateTransition.left = full ? `calc(100vw - ${ w.width > 1440 ? '90px' : responsiveValue(90) })` : "calc(100vw + 1px)";
      menuOpenTransition.left = `calc(100vw - ${ w.width > 1440 ? '448px' : responsiveValue(448) })`
      popupOpenTransition.left = `calc(100vw - ${ w.width > 1440 ? '548px' : responsiveValue(548) })`
      exitTransition.left = "50vw";
      break;
    case "bottom":
      initialTransition.top = "50vh";
      initialTransition.width = "100vw";
      animateTransition.top= full && !noBottom ? `calc(100vh - ${ w.width > 1440 ? '90px' : responsiveValue(90) })` : "calc(100vh + 1px)";
      animateTransition.width = "100vw";
      popupOpenTransition.top= full && !noBottom ? `calc(100vh - ${ w.width > 1440 ? '90px' : responsiveValue(90) })` : "calc(100vh + 1px)";
      popupOpenTransition.width = `calc(100vw - ${ w.width > 1440 ? '548px' : responsiveValue(548) })`;
      exitTransition.top = "50vh";
      break;
    case "left":
      initialTransition.left = "50vw";
      animateTransition.left= full ? `${ w.width > 1440 ? '90px' : responsiveValue(90) }` : "-1px";
      exitTransition.left = "50vw";
      break;
  }
  return {
    initial: initialTransition,
    animate: animateTransition,
    exit: exitTransition,
    menuOpen: menuOpenTransition,
    popupOpen: popupOpenTransition
  }
}
const variantsFrameBorder = (orientation, full, noBottom, w) => {
  const initialTransition = {}
  const animateTransition = {
    transition: {
      duration: 0.5
    }
  }
  const menuOpenTransition = {
    transition: {
      duration: 0.75
    }
  }
  const popupOpenTransition = {
    transition: {
      duration: 0.75
    }
  }
  const exitTransition = {
    transition: {
      duration: 0.75
    }
  }
  switch (orientation) {
    case "top":
      initialTransition.height = "50vh";
      initialTransition.width = "100vw";
      animateTransition.height= `${ w.width > 1440 ? '90px' : responsiveValue(90) }`;
      animateTransition.width = "100vw";
      popupOpenTransition.height= `${ w.width > 1440 ? '90px' : responsiveValue(90) }`;
      popupOpenTransition.width = `calc(100vw - ${ w.width > 1440 ? '548px' : responsiveValue(548) })`;
      exitTransition.height = "50vh";
      break;
    case "right":
      initialTransition.width = "50vw";
      animateTransition.width = full ? `${ w.width > 1440 ? '90px' : responsiveValue(90) }` : "0px";
      menuOpenTransition.width = `${ w.width > 1440 ? '448px' : responsiveValue(448) }`
      popupOpenTransition.width = `${ w.width > 1440 ? '548px' : responsiveValue(548) }`
      exitTransition.width = "50vw";
      break;
    case "bottom":
      initialTransition.height = "50vh";
      initialTransition.width = "100vw";
      animateTransition.height= full && !noBottom ? `${ w.width > 1440 ? '90px' : responsiveValue(90) }` : "0px";
      animateTransition.width = "100vw";
      popupOpenTransition.height= full && !noBottom ? `${ w.width > 1440 ? '90px' : responsiveValue(90) }` : "0px";
      popupOpenTransition.width = `calc(100vw - ${ w.width > 1440 ? '548px' : responsiveValue(548) })`;
      exitTransition.height = "50vh";
      break;
    case "left":
      initialTransition.width = "50vw";
      animateTransition.width= full ? `${ w.width > 1440 ? '90px' : responsiveValue(90) }` : "0px";
      exitTransition.width = "50vw";
      break;
  }
  return {
    initial: initialTransition,
    animate: animateTransition,
    exit: exitTransition,
    menuOpen: menuOpenTransition,
    popupOpen: popupOpenTransition
  }
}


export function Line({ orientation, full, noBottom = false, menuOpen, popupOpen, ...props }) {
  const w = useWindowSize();
  return (
    <LineStyle variants={variantsFrameLine(orientation, full, noBottom, w)} initial={ 'initial' } animate={ menuOpen ? 'menuOpen' : popupOpen ? 'popupOpen' : 'animate' } exit={ 'exit' } orientation={ orientation } { ...props } />
  )
}

export function Border({ orientation, full, noBottom = false, menuOpen, popupOpen, ...props }) {
  const w = useWindowSize();
  return (
    <BorderStyle variants={variantsFrameBorder(orientation, full, noBottom, w)} initial={ 'initial' } animate={ menuOpen ? 'menuOpen' : popupOpen ? 'popupOpen' : 'animate' } exit={ 'exit' } orientation={ orientation } { ...props } />
  )
}

export default function Frame({ full = true, noBottom = false, progress = 0, backgroundImage, children, ...props }) {
  // Store
  const [menuOpen, popupOpen, loaderFinished] = useStore((s) => [s.menuOpen, s.popupOpen, s.loaderFinished])
  return (
    <>
      {
        loaderFinished ?
        <FrameStyle backgroundImage={ backgroundImage } { ...props }>
          <div className="background-lines">
            <Line orientation="top" full={ full } popupOpen={ popupOpen } />
            <Line orientation="right" full={ full } menuOpen={ menuOpen } popupOpen={ popupOpen } />
            <Line orientation="bottom" full={ full } noBottom={ noBottom } popupOpen={ popupOpen } />
            <Line orientation="left" full={ full } />
          </div>
          <div className="background-borders">
            <Border orientation="top" full={ full } popupOpen={ popupOpen } />
            <Border orientation="right" full={ full } menuOpen={ menuOpen } popupOpen={ popupOpen } />
            <Border orientation="bottom" full={ full } noBottom={ noBottom } popupOpen={ popupOpen } />
            <Border orientation="left" full={ full } />
          </div>
          <div className="background-original">
            <div className="background-container" />
            <div className="content-frame">
              {/* { loaderFinished &&  */}
              <>
                <HeaderModule />
                <motion.div variants={transition}>
                  { children }
                </motion.div>
              </>
              {/* } */}
            </div>
          </div>
        </FrameStyle>
        :
        <LoaderModule />
      }
      <p>{ loaderFinished }</p>
    </>
  )
}