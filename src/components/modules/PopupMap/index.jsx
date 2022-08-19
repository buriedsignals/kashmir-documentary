// Styles
import { PopupMapStyle } from "./index.style"
// Nodes
import { motion } from 'framer-motion';
// Hooks
import useStore from "@/hooks/useStore"
// Buttons
import StartButton from "@/components/buttons/Start"
// Icons
import MilitarisationIcon from '@/components/icons/Militarisation'
import ColonisationIcon from '@/components/icons/Colonisation'
import InfrastructureIcon from '@/components/icons/Infrastructure'
import EventIcon from '@/components/icons/Event'
import CloseIcon from "@/components/icons/Close"
import LinkIcon from "@/components/icons/Link"

const fadeInRight = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
      delay: .85
    }
  },
};

const scaleIn = {
  initial: {
    x: "-50%",
    y: "-50%",
    scaleY: 0
  },
  animate: {
    x: "-50%",
    y: "-50%",
    scaleY: 1,
    transition: {
      duration: 0.55,
      delay: 1.3
    }
  },
};

const fadeIn = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.25,
      delay: 1.9
    }
  },
};

export default function PopupMap({ ...props }) {
  // Store
  const [popupOpen, popupProperties] = useStore((s) => [s.popupOpen, s.popupProperties]);
  // Handlers
  const onClickButton = () => {
    useStore.setState({ popupOpen: !popupOpen, popupProperties: {}, menuOpen: false });
  }
  // Conditions
  const checkCategory = (category) => {
    switch (category) {
      case "Militarisation":
        return <MilitarisationIcon />;
      case "Colonisation":
        return <ColonisationIcon />;
      case "Infrastructure":
        return <InfrastructureIcon />;
      case "Events":
        return <EventIcon />;
    }
  }
  return (
    <PopupMapStyle { ...props }>
      { popupOpen &&
        <motion.div className="panel" initial="initial" animate="animate">
          <motion.button className="button-close-popup" onClick={ onClickButton } variants={scaleIn}>
            <motion.div initial="initial" animate="animate" variants={fadeIn}>
              <CloseIcon />
            </motion.div>
          </motion.button>
          <div className="panel-container">
            <motion.div className="content-popup" variants={fadeInRight}>
              <div className="header">
                <div className="category">
                  { checkCategory(popupProperties.category) }
                </div>
                <div className="date" dangerouslySetInnerHTML={{ __html: popupProperties.date }} />
              </div>
              <h1 className="title" dangerouslySetInnerHTML={{ __html: popupProperties.title }} />
              {
                popupProperties["image-url"] && 
                  <div className="image-container">
                    <img src={ popupProperties["image-url"] } alt="Media Kashmir documentary" />
                  </div>
              }
              {
                popupProperties["video-id"] &&               
                  <iframe className='video-container' src={ `https://www.youtube.com/embed/${ popupProperties["video-id"] }` } title="Media Kashmir documentary" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              }
              <p className="description" dangerouslySetInnerHTML={{ __html: popupProperties.description }} />
              <a className="source" href={ popupProperties["source-url"] } target="_blank" rel="noreferrer">
                <StartButton className="button-start-card-interview">
                  <LinkIcon /> Source
                </StartButton>
              </a>
            </motion.div>
          </div>
        </motion.div>
      }
    </PopupMapStyle>
  )
}