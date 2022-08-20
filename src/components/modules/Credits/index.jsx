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
            BACK
          </motion.button>
          <motion.div initial="initial" animate="animate" exit="exit" variants={fadeInRight} className="content-credits">
            <h2>Credits</h2>
            <ul>
              <li>
                <p>
                    <span>Director, Producer </span>Tom Vaillant
                </p>
              </li>
              <li>
                <p>
                <span>Co-Director, Expert </span>Mohamad Junaid
                </p>
              </li>
              <li>
                <p>
                <span>Expert </span>Ather Zia
                </p>
              </li>
              <li>
                <p>
                <span>Expert </span>Mona Bhan
                </p>
              </li>
              <li>
                <p>
                <span>Editor </span>Charlie J Bird
                </p>
              </li>
              <li>
                <p>
                <span>Art Director </span>Grégoires Ormieres
                </p>
              </li>
              <li>
                <p>
                <span>Developer </span>Remy Dumas
                </p>
              </li>
              <li>
                <p>
                <span>Colorist </span>Henry Napier-Brown
                </p>
              </li>
              <li>
                <p>
                <span>Composer </span>Scott S Stevens
                </p>
              </li>
              <li>
                <p>
                <span>Sound Design </span>Ben Eggerhorn
                </p>
              </li>
              <li>
                <p>
                <span>Photography </span>Masrat Zahra
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