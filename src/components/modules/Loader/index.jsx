// Styles
import { LoaderStyle, LineStyle, BorderStyle } from "./index.style"
// React
import { useState } from "react"
// Next
import Head from 'next/head'
// Store
import useStore from "@/hooks/useStore"
// Nodes
import { motion } from "framer-motion"
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

const stagger = {
  animate: {
    transition: {
      staggerChildren: 1,
      staggerDirection: -1
    }
  }
};

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
    initial: initialTransition
  }
  for (let i = 0; i < 9; i++) {
    const animateTransition = {
      transition: { 
        type: "spring",
        stiffness: 600,
        damping: 30,
        duration: 0.25 
      }
    }
    switch (orientation) {
      case "top":
        animateTransition.top= `calc(${ (i + 1) * 4.3222222222 }vh + ${ w.width > 1440 ? '90px' : responsiveValue(90) })`
        break;
      case "right":
        animateTransition.left = `calc(100vw - (${ (i + 1) * 4.861 }vw + ${ w.width > 1440 ? '90px' : responsiveValue(90) }))`
        break;
      case "bottom":
        animateTransition.top= `calc(100vh - (${ (i + 1) * 4.3222222222 }vh + ${ w.width > 1440 ? '90px' : responsiveValue(90) }))`
        break;
      case "left":
        animateTransition.left= `calc(${ (i + 1) * 4.861 }vw + ${ w.width > 1440 ? '90px' : responsiveValue(90) })`
        break;
    }
    transition[`animate${i}`] = animateTransition
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
    initial: initialTransition
  }
  for (let i = 0; i < 9; i++) {
    const animateTransition = {
      transition: { 
        type: "spring",
        stiffness: 600,
        damping: 30,
        duration: 0.25 
      }
    }
    switch (orientation) { 
      case "top":
        animateTransition.height= `calc(${ (i + 1) * 4.3222222222 }vh + ${ w.width > 1440 ? '90px' : responsiveValue(90) })`
        break;
      case "right":
        animateTransition.width = `calc(${ (i + 1) * 4.861 }vw + ${ w.width > 1440 ? '90px' : responsiveValue(90) })`
        break;
      case "bottom":
        animateTransition.height= `calc(${ (i + 1) * 4.3222222222 }vh + ${ w.width > 1440 ? '90px' : responsiveValue(90) })`
        break;
      case "left":
        animateTransition.width= `calc(${ (i + 1) * 4.861 }vw + ${ w.width > 1440 ? '90px' : responsiveValue(90) })`
        break;
    }
    transition[`animate${i}`] = animateTransition
  }
  return transition
}

export function Line({ orientation, startLoading, indexLine, ...props }) {
  const w = useWindowSize();
  return (
    <LineStyle variants={ variantsFrameLine(orientation, indexLine, w) } initial="initial" animate={ startLoading ? `animate${indexLine}` : "" } orientation={ orientation } { ...props } />
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
    <BorderStyle variants={ variantsFrameBorder(orientation, indexLine, w) } initial="initial" animate={ startLoading ? `animate${indexLine}` : "" } onAnimationComplete={ orientation == 'right' && indexLine == 8 && onAnimationCompleteBackground() } orientation={ orientation } { ...props } />
  )
}

export default function Loader({ ...props }) {
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
        {
          [...Array(backgroudsImageLoaderLength)].map((el, i) => { 
            return <link key={i} rel="preload" href={ `/images/loader-${ i < 10 ? `0${ i }` : i }.jpg` } as="image" />
          })
        }
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
            <h1 className="title">Lines of control</h1>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
        </motion.div>
        <motion.div className="background-image-container" variants={ stagger } initial="initial" animate={ startLoading ? "animate" : "" }>
        {/* <div className="background-image-container"> */}
          {
            [...Array(backgroudsImageLoaderLength)].map((el, i) => { 
              const index = backgroudsImageLoaderLength - 1 - i;
              return <motion.img onAnimationComplete={ onCompleteBackground } onUpdate={ onStartBackground } variants={ variantsLoaderImage(index) } key={ `image-${ i }` } src={ `/images/loader-${ index < 10 ? `0${ index }` : index }.jpg` } alt="Image loader" />
            })
          }
        </motion.div>
      </LoaderStyle>
    </>
  )
}