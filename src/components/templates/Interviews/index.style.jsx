import styled from "styled-components";
import { responsiveValue } from "@/components/templates/Interview/index.style";
import { down } from "styled-breakpoints";

export const InterviewsTemplateStyle = styled.div`
  .content-interviews {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    background: #000000;
    z-index: 2;
    .content-interviews-container {
      display: flex;
      .interviews-finished-container {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        .title {
          position: relative;
          max-width: 320px;
          color: #FFFFFF;
          font-family: 'Kalista Serif';
          font-style: normal;
          font-weight: 400;
          font-size: 28px;
          line-height: 45px;
          text-align: center;
          ${down('xxl')} {
            max-width: ${ responsiveValue(320) };
            font-size: ${ responsiveValue(28) };
            line-height: ${ responsiveValue(45) };
          }
          &::before, &::after {
            content: '';
            position: absolute;
            left: 50%;
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
            margin-top: -30px;
            ${down('xxl')} {
              margin-top: -${ responsiveValue(30) };
            }
          }
          &::after {
            bottom: 0;
            margin-bottom: -40px;
            ${down('xxl')} {
              margin-bottom: -${ responsiveValue(40) };
            }
          }
        }
        .buttons {
          position: absolute;
          bottom: 100px;
          left: 50%;
          transform: translate3D(-50%, -50%, 0);
          ${down('xxl')} {
            bottom: ${ responsiveValue(100) };
          }
          .button-start-map {
            width: 100%;
            margin-bottom: 15px;
            justify-content: center;
            ${down('xxl')} {
              margin-bottom: ${ responsiveValue(15) };
            }
          }
          .button-start-reset {
            opacity: 0.5;
            &:hover {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`