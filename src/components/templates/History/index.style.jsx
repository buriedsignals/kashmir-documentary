import styled from "styled-components";
import { responsiveValue } from "@/components/templates/Interview/index.style";
import { down } from "styled-breakpoints";

export const HistoryTemplateStyle = styled.div`
  .content-history {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    padding: 90px;
    ${down('xxl')} {
      padding: ${ responsiveValue(90) };
    }
    .content-history-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 555px;
      margin: 90px 0;
      ${down('xxl')} {
        max-width: ${ responsiveValue(555) };
        margin: ${ responsiveValue(90) } 0;
      }
      & > * {
        &:last-child {
          margin-bottom: 0 !important;
        }
      }
      .title {
        position: relative;
        display: inline-block;
        margin-bottom: 70px;
        color: #FFFFFF;
        font-family: 'Kalista Serif';
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 161.5%;
        letter-spacing: 0.4em;
        text-align: center;
        text-transform: uppercase;
        ${down('xxl')} {
          margin-bottom: ${ responsiveValue(70) };
          font-size: ${ responsiveValue(40) };
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
      .description {
        margin-bottom: 40px;
        color: #FFFFFF;
        font-family: 'KoHo';
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        line-height: 118.5%;
        ${down('xxl')} {
          margin-bottom: ${ responsiveValue(40) };
          font-size: ${ responsiveValue(25) };
        }
      }
      .sub-description {
        margin-bottom: 70px;
        color: #FFFFFF;
        font-family: 'KoHo';
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        line-height: 118.5%;
        ${down('xxl')} {
          margin-bottom: ${ responsiveValue(70) };
          font-size: ${ responsiveValue(19) };
        }
      }
    }
  }
`