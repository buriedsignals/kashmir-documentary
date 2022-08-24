// Styles
import { LoaderStyle, LineStyle, BorderStyle } from "./index.style"
// React
import { useRef, useState } from "react"
// Next
import Head from 'next/head'
// Store
import useStore from "@/hooks/useStore"
// Nodes
import { animate, motion } from "framer-motion"
import { useRouter } from "next/router"
import { responsiveValue } from "@/components/templates/Interview/index.style";
import useWindowSize from "@/hooks/useWindowSize"

const transitionLayout = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const transition = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
      delay: 0.5
    }
  },
  hide: {
    opacity: 0,
    transition: {
      duration: 1
    }
  }
};

const variantsLoaderImage = (index) => {
  const initialTransition = {
    opacity: 1,
    x: "-50%",
    y: "-50%",
    scale: 1.1,
  }
  const animateTransition = {
    opacity: 0,
    x: "-50%",
    y: "-50%",
    scale: 1,
    transition: { 
      type: "spring",
      stiffness: 600,
      damping: 100,
      duration: 0.5 
    }
  }
  return {
    initial: initialTransition,
    animate: animateTransition
  }
}

const variantsFrameLine = (orientation, indexLine, w) => {
  const initialTransition = {}
  switch (orientation) {
    case "top":
      initialTransition.top = `${ w.width > 1440 ? '90px' : responsiveValue(90) }`
      break;
    case "right":
      initialTransition.left = `calc(100vw - ${ w.width > 1440 ? '90px' : responsiveValue(90) })`
      break;
    case "bottom":
      initialTransition.top = `calc(100vh - ${ w.width > 1440 ? '90px' : responsiveValue(90) })`
      break;
    case "left":
      initialTransition.left = `${ w.width > 1440 ? '90px' : responsiveValue(90) }`
      break;
  }
  const transition = {
    initial: initialTransition,
    animate: {
      transition: {
        duration: 3.9,
        ease: [0.64, 0, 0.9, 0]
      }
    }
  }
  switch (orientation) { 
    case "top":
      transition.animate.top= "50vh"
      break;
    case "right":
      transition.animate.left = "50vw"
      break;
    case "bottom":
      transition.animate.top= "50vh"
      break;
    case "left":
      transition.animate.left= "50vw"
      break;
  }
  return transition
}
const variantsFrameBorder = (orientation, indexLine, w) => {
  const initialTransition = {}
  switch (orientation) {
    case "top":
      initialTransition.height = `${ w.width > 1440 ? '90px' : responsiveValue(90) }`
      break;
    case "right":
      initialTransition.width = `${ w.width > 1440 ? '90px' : responsiveValue(90) }`
      break;
    case "bottom":
      initialTransition.height = `${ w.width > 1440 ? '90px' : responsiveValue(90) }`
      break;
    case "left":
      initialTransition.width = `${ w.width > 1440 ? '90px' : responsiveValue(90) }`
      break;
  }
  const transition = {
    initial: initialTransition,
    animate: {
      transition: {
        duration: 3.9,
        ease: [0.64, 0, 0.9, 0]
      }
    }
  }
  switch (orientation) { 
    case "top":
      transition.animate.height= "50vh"
      break;
    case "right":
      transition.animate.width = "50vw"
      break;
    case "bottom":
      transition.animate.height= "50vh"
      break;
    case "left":
      transition.animate.width= "50vw"
      break;
  }
  return transition
}

export function Line({ orientation, startLoading, indexLine, ...props }) {
  const w = useWindowSize();
  return (
    <LineStyle variants={ variantsFrameLine(orientation, indexLine, w) } initial="initial" animate={ startLoading ? 'animate' : "" } orientation={ orientation } { ...props } />
  )
}

export function Border({ orientation, startLoading, indexLine, ...props }) {
  const w = useWindowSize();
  // Router
  const router = useRouter()
  // Handlers
  const onAnimationCompleteBackground = () => {
    setTimeout(() => {
      switch (router.pathname) {
        case "/":
          useStore.setState({ backgroundImage: 'bg-home.jpg' })
          break;
        case "/about":
          useStore.setState({ backgroundImage: 'bg-about.jpg' })
          break;
        case "/map":
          useStore.setState({ backgroundImage: 'bg-map.jpg' })
          break;
        default:
          useStore.setState({ backgroundImage: null })
          break;
      }
      useStore.setState({ loaderFinished: true })
    }, 350)
  }
  return (
    <BorderStyle variants={ variantsFrameBorder(orientation, indexLine, w) } initial="initial" animate={ startLoading ? 'animate' : "" } onAnimationComplete={ orientation == 'right' && onAnimationCompleteBackground } orientation={ orientation } { ...props } />
  )
}

export default function Loader({ ...props }) {
  // References
  const videoRef = useRef()
  // Datas
  const backgroudsImageLoaderLength = 9;
  // States
  const [hideIntro, setHideIntro] = useState(false);
  const [startLoading, setStartLoading] = useState(false);
  const [startBackground, setStartBackground] = useState(true);
  const [indexLine, setIndexLine] = useState(0);
  // Handlers
  const onAnimationCompleteContent = (e) => {
    if (e == "animate") {
      setHideIntro(true)
    } else if (e == "hide") {
      setTimeout(() => {
        setStartLoading(true)
        setStartBackground(true)
      }, 0)
    }
  }
  const onCompleteBackground = (e) => {
    setStartBackground(true)
  }
  const onStartBackground = (e) => {
    if (startBackground) {
      setStartBackground(false)
      setIndexLine(indexLine+1)
    }
  }
  return (
    <>
      <Head>
        <link rel="preload" href="/videos/loader.mp4" as="video" />
      </Head>
      <LoaderStyle { ...props } variants={transitionLayout} initial="initial" animate="animate">
        <div className="background-lines">
          <Line orientation="top" startLoading={ startLoading } indexLine={ indexLine } />
          <Line orientation="right" startLoading={ startLoading } indexLine={ indexLine } />
          <Line orientation="bottom" startLoading={ startLoading } indexLine={ indexLine } />
          <Line orientation="left" startLoading={ startLoading } indexLine={ indexLine } />
        </div>
        <div className="background-borders">
          <Border orientation="top" startLoading={ startLoading } indexLine={ indexLine } />
          <Border orientation="right" startLoading={ startLoading } indexLine={ indexLine } />
          <Border orientation="bottom" startLoading={ startLoading } indexLine={ indexLine } />
          <Border orientation="left" startLoading={ startLoading } indexLine={ indexLine } />
        </div>
        <motion.div variants={transition} className="content" initial="initial" animate={ hideIntro ? "hide" : "animate" } onAnimationComplete={ onAnimationCompleteContent }>
          <div className="content-container">
            <h1 className="title">Lines of Control</h1>
            <p className="description">An interactive web documentary about Kashmir.</p>
          </div>
        </motion.div>
        <motion.div className="background-video-container">
          <img ref={ videoRef } src={ startLoading ? "/images/loader-01.gif" : "/images/loader-00.jpg" } alt="" />
        </motion.div>
      </LoaderStyle>
    </>
  )
}