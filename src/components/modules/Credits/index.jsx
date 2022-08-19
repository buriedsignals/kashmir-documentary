// Styles
import { CreditsStyle } from "./index.style"
// Nodes
import { motion } from 'framer-motion';
// Hooks
import useStore from "@/hooks/useStore"
// Icons
import ArrowIcon from "@/components/icons/Arrow"

const fadeInRight = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.65,
      delay: 0.325
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.65
    }
  }
};
const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export default function Credits({ ...props }) {
  // Store
  const creditsOpen = useStore((s) => s.creditsOpen)
  // Handlers
  const onClickButton = () => {
    useStore.setState({ creditsOpen: !creditsOpen });
  }
  return (
    <CreditsStyle { ...props }>
      { creditsOpen ?
        <motion.div initial="initial" animate="animate" className="panel">
          <motion.button initial="initial" animate="animate" exit="exit" variants={fadeInRight} className="button-close-credits" onClick={ onClickButton }>
            <ArrowIcon />
            Go back to menu
          </motion.button>
          <motion.div initial="initial" animate="animate" exit="exit" variants={fadeInRight} className="content-credits">
            <h2>Credits</h2>
            <ul>
              <li>
                <p>
                    <span>Producer: </span>Abel Auboisdormant
                </p>
              </li>
              <li>
                <p>
                <span>Producer: </span>Abel Auboisdormant
                </p>
              </li>
              <li>
                <p>
                <span>Producer: </span>Abel Auboisdormant
                </p>
              </li>
              <li>
                <p>
                <span>Producer: </span>Abel Auboisdormant
                </p>
              </li>
              <li>
                <p>
                <span>Producer: </span>Abel Auboisdormant
                </p>
              </li>
            </ul>
          </motion.div>
        </motion.div>
        : 
        <motion.button initial="initial" animate="animate" exit="exit" variants={fadeInRight} className="button-open-credits" onClick={ onClickButton }>Credits</motion.button>
      }
    </CreditsStyle>
  )
}