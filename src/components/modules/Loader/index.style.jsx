import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { responsiveValue } from "@/components/templates/Interview/index.style";
import { down } from "styled-breakpoints";

export const LoaderStyle = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  .content {
    position: absolute;
    top: 0; left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    z-index: 5;
    .content-container {
      position: relative;
      width: 670px;
      ${down('xxl')} {
        width: ${ responsiveValue(670) };
      }
      &::before, &::after {
        content: '';
        position: absolute;
        left: 50%;
        display: block;
        width: 10px;
        height: 10px;
        background: #FFFFFF;
        transform: translate3D(-50%, -50%, 0) rotate3D(0, 0, 1, 45deg);
        ${down('xxl')} {
          width: ${ responsiveValue(10) };
          height: ${ responsiveValue(10) };
        }
      }
      &::before {
        top: 0;
        margin-top: -80px;
        ${down('xxl')} {
          margin-top: -${ responsiveValue(80) };
        }
      }
      &::after {
        bottom: 0;
        margin-bottom: -90px;
        ${down('xxl')} {
          margin-bottom: -${ responsiveValue(90) };
        }
      }
      .title {
        margin-bottom: 40px;
        color: #FFFFFF;
        font-family: 'Kalista Serif';
        font-style: normal;
        font-weight: 400;
        font-size: 64px;
        line-height: 134.5%;
        text-align: center;
        letter-spacing: 0.4em;
        text-transform: uppercase;
        ${down('xxl')} {
          margin-bottom: ${ responsiveValue(40) };
          font-size: ${ responsiveValue(64) };
        }
      }
      .description {
        color: #FFFFFF;
        font-family: 'KoHo';
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        line-height: 118.5%;
        text-align: center;
        ${down('xxl')} {
          font-size: ${ responsiveValue(25) };
        }
      }
    }
  }
  .background-video-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    video, img {
      position: absolute;
      top: 50%;
      left: 50%;
      min-width: 1440px;
      height: 100vh;
      transform: translate3D(-50%, -50%, 0);
      // &:first-child {
      //   transform: translate3D(-50%, -50%, 0) scale3D(1,1,1) !important;
      // }
    }
  }
  .background-image-container {
    position: relative;
    width: 100%;
    height: 100%;
    // background-image: url('/images/bg-home.jpg');
    overflow: hidden;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      min-width: 1440px;
      height: 100vh;
      transform: translate3D(-50%, -50%, 0);
      &:first-child {
        // opacity: 1 !important;
        transform: translate3D(-50%, -50%, 0) scale3D(1,1,1) !important;
      }
    }
  }
  .background-lines, .background-borders {
    position: absolute;
    top: 0; left: 0;
    width: 100vw;
    height: 100vh;
  }
  .background-lines {
    z-index: 10;
  }
  .background-borders {
    z-index: 7;
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
  z-index: 2;
  margin: 0;      
  backdrop-filter: blur(15px);
  transform: translate3d(0, 0, 0);
  ${(props) => {
    switch (props.orientation) {
      case 'top':
        return css`
          top: 0;
          left: 0;
          width: 100%;
        `
      case 'right':
        return css`
          top: 0;
          right: 0;
          height: 100%;
        `
      case 'bottom':
        return css`
          bottom: 0;
          left: 0;
          width: 100%;
        `
      case 'left':
        return css`
          top: 0;
          left: 0;
          height: 100%;
        `
    }
  }}
`