import styled, { css } from "styled-components";
import { responsiveValue } from "@/components/templates/Interview/index.style";
import { down } from "styled-breakpoints";

export const VimeoVideoStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: black;
  ${(props) => {
    if (props.startVideo) {
      if (props.isEnd) {
        return css`
          opacity: 0;
        `
      } else {
        return css`
          opacity: 1;
        `
      }
    } else {
      return css`
        opacity: 0;
        pointer-events: none;
      `
    }
  }}
  .vimeo-video-container {
    position: absolute;
    top: 90px;
    left: 90px;
    width: calc(100vw - 180px);
    height: calc(100vh - 180px);
    ${down('xxl')} {
      top: ${ responsiveValue(90) };
      left: ${ responsiveValue(90) };
      width: calc(100vw - ${ responsiveValue(180) });
      height: calc(100vh - ${ responsiveValue(180) });
    }
    & > div {
      width: 100%;
      height: 100%;
      & > iframe {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        transform: translate3D(-50%, -50%, 0);
      }
  }
  }
`