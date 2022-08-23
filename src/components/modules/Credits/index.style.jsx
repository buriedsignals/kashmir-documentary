import styled from "styled-components";
import { responsiveValue } from "@/components/templates/Interview/index.style";
import { down } from "styled-breakpoints";

export const CreditsStyle = styled.div`
  .button-open-credits, .button-close-credits {
    position: fixed;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    width: 448px;
    height: 90px;
    margin: 0;
    padding: 0 45px;
    color: #FFFFFF;
    font-family: 'KoHo';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    ${down('xxl')} {
      width: ${ responsiveValue(448) };
      height: ${ responsiveValue(90) };
      padding: 0 ${ responsiveValue(45) };
      font-size: ${ responsiveValue(18) };
      line-height: ${ responsiveValue(23) };
    }
    svg {
      margin-right: 15px;
      ${down('xxl')} {
        margin-right: ${ responsiveValue(15) };
      }
    }
  }
  .panel {
    .content-credits {
      position: fixed;
      top: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      width: 448px;
      max-height: calc(100vh - 180px);
      margin: 90px 0;
      padding: 90px 45px;
      // backdrop-filter: blur(15px);
      overflow-y: scroll;
      overflow-x: hidden;
      z-index: -2;
      -ms-overflow-style: none;
      scrollbar-width: none; 
      &::-webkit-scrollbar {
        display: none;
      }
      ${down('xxl')} {
        width: ${ responsiveValue(448) };
        max-height: calc(100vh - ${ responsiveValue(180) });
        margin: ${ responsiveValue(90) } 0;
        padding: ${ responsiveValue(90) } ${ responsiveValue(45) };
      }
      h2 {
        margin-bottom: 50px;
        color: #FFFFFF;
        font-family: 'Kalista Serif';
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 45px;
        letter-spacing: 0.125em;
        text-transform: uppercase;
        ${down('xxl')} {
          margin-bottom: ${ responsiveValue(50) };
          font-size: ${ responsiveValue(28) };
          line-height: ${ responsiveValue(45) };
        }
      }
      ul {
        display: block;
        height: auto;
        li {
          opacity: 1;
          &:not(:last-child) {
            margin-bottom: 40px;
            ${down('xxl')} {
              margin-bottom: ${ responsiveValue(40) };
            }
          }
          p {
            color: #FFFFFF;
            font-family: 'KoHo';
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 23px;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            ${down('xxl')} {
              font-size: ${ responsiveValue(18) };
              line-height: ${ responsiveValue(23) };
            }
            span {
              display: block;
              opacity: 0.5;
            }
          }
        }
      }
  }
`