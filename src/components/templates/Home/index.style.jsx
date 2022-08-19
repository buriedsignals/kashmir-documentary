import styled from "styled-components";
import { responsiveValue } from "@/components/templates/Interview/index.style";
import { down } from "styled-breakpoints";

export const HomeTemplateStyle = styled.div`
  .content-home {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    padding: 19px;
    align-items: center;
    ${down('xxl')} {
      padding: ${ responsiveValue(90) };
    }
    .content-home-container {
      max-width: 275px;
      display: flex;
      flex-direction: column;
      align-items: center;
      ${down('xxl')} {
        max-width: ${ responsiveValue(275) };
      }
      .introduction {
        position: relative;
        margin-bottom: 45px;
        color: #FFFFFF;
        font-family: 'Kalista Serif';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 173.5%;
        text-align: center;
        ${down('xxl')} {
          margin-bottom: ${ responsiveValue(45) };
          font-size: ${ responsiveValue(16) };
        }
        &::before, &::after {
          content: '';
          position: absolute;
          top: 50%;
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
          left: 0;
          margin-left: -45px;
          ${down('xxl')} {
            margin-left: -${ responsiveValue(45) };
          }
        }
        &::after {
          right: 0;
          margin-right: -45px;
          ${down('xxl')} {
            margin-right: -${ responsiveValue(45) };
          }
        }
      }
      .button-start-home {
        margin: 0 auto;
      }
    }
  }
`