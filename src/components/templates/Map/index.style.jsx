import styled from "styled-components";
import { responsiveValue } from "@/components/templates/Interview/index.style";
import { down } from "styled-breakpoints";

export const MapTemplateStyle = styled.div`
  .content-map {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    overflow: hidden;
    .content-map-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100vw;
      height: 100vh;
    }
    .instructions {    
      position: absolute;
      top: 765px;
      left: 50%;
      color: #FFFFFF;
      font-family: 'KoHo';
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 23px;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      text-align: center;
      transform: translate3d(-50%, -50%, 0);
      z-index: 999;
      ${down('xxl')} {
        top: ${ responsiveValue(765) };
        font-size: ${ responsiveValue(12) };
        line-height: ${ responsiveValue(23) };
      }
    }
  }
`