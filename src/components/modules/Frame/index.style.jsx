import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const FrameStyle = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  z-index: -1;
  -ms-overflow-style: none;
  scrollbar-width: none; 
  &::-webkit-scrollbar {
    display: none;
  }
  .background-lines, .background-borders, .background-original .background-container {
    pointer-events: none;
  }
  .background-original {
    min-height: 100vh;
    .background-container {
      position: fixed;
      top: 0; 
      left: 0;
      display: block;
      width: 100vw;
      height: 100vh;
      background-image: url("${(props) => props.backgroundImage }");
      background-size: cover;
      transition: background-image ${(props) => 0 + (0.5 - 0) * (props.progress - 100) / (0 - 100) }s ease-in-out;
      overflow: hidden;
    }
    .content-frame {
      position: relative;
      min-height: 100vh;
    }
  }
`

export const LineStyle = styled(motion.div)`
  position: fixed;
  z-index: 10;
  margin: 0;
  background-color: #ffffff;
  opacity: 0.5;
  ${(props) => {
    switch (props.orientation) {
      case 'top':
        return css`
          left: 0;
          width: 100%;
          height: 1px;
        `
      case 'right':
        return css`
          top: 0;
          width: 1px;
          height: 100%;
        `
      case 'bottom':
        return css`
          left: 0;
          width: 100%;
          height: 1px;
        `
      case 'left':
        return css`
          top: 0;
          width: 1px;
          height: 100%;
        `
    }
  }}
`

export const BorderStyle = styled(motion.div)`
  position: fixed;
  margin: 0;      
  backdrop-filter: blur(15px);
  ${(props) => {
    switch (props.orientation) {
      case 'top':
        return css`
          top: 0;
          left: 0;
          width: 100%;
          z-index: 2;
        `
      case 'right':
        return css`
          top: 0;
          right: 0;
          height: 100%;
          z-index: 3;
        `
      case 'bottom':
        return css`
          bottom: 0;
          left: 0;
          width: 100%;
          z-index: 3;
        `
      case 'left':
        return css`
          top: 0;
          left: 0;
          height: 100%;
          z-index: 3;
        `
    }
  }}
`