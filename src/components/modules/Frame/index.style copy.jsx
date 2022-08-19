import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const FrameStyle = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: -1;
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
  ${(props) => {
    switch (props.orientation) {
      case 'top':
        return css`
          left: 0;
          width: 100%;
          height: 1px;
        `
      case 'right':
        if (props.menuOpen) {
          return css`
            top: 0;
            width: 1px;
            height: 100%;
          `
        } else if (props.popupOpen) {
          return css`
            top: 0;
            width: 1px;
            height: 100%;
          `
        } else {
          if (props.full) {
            return css`
              top: 0;
              width: 1px;
              height: 100%;
            `
          } else {
            return css`
              opacity: 0;
              top: 0;
              width: 0px;
              height: 100%;
            `
          }
        }
      case 'bottom':
        if (props.full) {
          return css`
            left: 0;
            width: 100%;
            height: 1px;
          `
        } else {
          return css`
            opacity: 0;
            left: 0;
            width: 100%;
            height: 1px;
          `
        }
      case 'left':
        if (props.full) {
          return css`
            opacity: 1;
            top: 0;
            width: 1px;
            height: 100%;
          `
        } else {
          return css`
            opacity: 0;
            top: 0;
            width: 1px;
            height: 100%;
          `
        }
    }
  }}
  // transition: all ${(props) => props.loaderFinished ? '0.25s' : '0.5s' } ease-in-out;
`

export const BorderStyle = styled(motion.div)`
  position: fixed;
  z-index: 2;
  margin: 0;      
  backdrop-filter: blur(15px);
  ${(props) => {
    switch (props.orientation) {
      case 'top':
        if (props.full) {
          return css`
            top: 0;
            left: 0;
            width: 100%;
          `
        } else {
          return css`
            display: none;
          `
        }
      case 'right':
        if (props.menuOpen) {
          return css`
            top: 0;
            right: 0;
            height: 100%;
          `
        } else if (props.popupOpen) {
          return css`
            top: 0;
            right: 0;
            height: 100%;
          `
        } else {
          if (props.full) {
            return css`
              top: 0;
              right: 0;
              height: 100%;
            `
          } else {
            return css`
              top: 0;
              right: 0;
              width: 0;
              height: 100%;
            `
          }
        }
      case 'bottom':
        if (props.full) {
          return css`
            bottom: 0;
            left: 0;
            width: 100%;
          `
        }
      case 'left':
        if (props.full) {
          return css`
            top: 0;
            left: 0;
            height: 100%;
          `
        }
    }
  }}
  // transition: all ${(props) => props.loaderFinished ? '0.25s' : '0.5s' } ease-in-out;
`