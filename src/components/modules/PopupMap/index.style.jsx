import styled from "styled-components";
import { responsiveValue } from "@/components/templates/Interview/index.style";
import { down } from "styled-breakpoints";

export const PopupMapStyle = styled.div`
  .button-close-popup {
    position: absolute;
    top: 50%;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 52px;
    height: 52px;
    background-color: #81837e;
    border: 1px solid #ffffff80;
    transform: translate3D(-50%, -50%, 0);
    z-index: 1;
    ${down('xxl')} {
      width: ${ responsiveValue(52) };
      height: ${ responsiveValue(52) };
    }
    div {
      display: flex;
    }
  }
  .panel {
    position: absolute;
    top: 0;
    right: 0;
    width: 548px;
    height: 100vh;
    z-index: 10;
    ${down('xxl')} {
      width: ${ responsiveValue(548) };
    }
    .panel-container {
      position: relative;
      height: 100%;
      .content-popup {
        position: relative;
        max-height: calc(100vh - 90px);
        margin: 90px 0;
        padding: 0 68px 90px;
        overflow-y: scroll;
        overflow-x: hidden;
        -ms-overflow-style: none;
        scrollbar-width: none; 
        &::-webkit-scrollbar {
          display: none;
        }
        ${down('xxl')} {
          max-height: calc(100vh - ${ responsiveValue(90) });
          margin: ${ responsiveValue(90) } 0;
          padding: 0 ${ responsiveValue(68) } ${ responsiveValue(90) };
        }
        &::before {
          content: '';
          position: absolute;
          top: 10px;
          left: 68px;
          display: block;
          width: 10px;
          height: 10px;
          background: #FFFFFF;
          transform: translate3D(0, -50%, 0) rotate3D(0, 0, 1, 45deg);
          ${down('xxl')} {
            top: ${ responsiveValue(10) };
            left: ${ responsiveValue(68) };
            width: ${ responsiveValue(10) };
            height: ${ responsiveValue(10) };
          }
        }
        .header {
          display: flex;
          align-items: center;
          margin-top: 34px;
          margin-bottom: 48px;
          ${down('xxl')} {
            margin-top: ${ responsiveValue(34) };
            margin-bottom: ${ responsiveValue(48) };
          }
          .category {
            display: flex;
            padding: 10px;
            border: 1px solid white;
            border-radius: 100%;
            ${down('xxl')} {
              padding: ${ responsiveValue(10) };
            }
          }
          .date {
            margin-left: 14px;
            color: #FFFFFF;
            font-family: 'KoHo';
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 26px;
            text-align: center;
            letter-spacing: 0.12em;
            ${down('xxl')} {
              margin-left: ${ responsiveValue(14) };
              font-size: ${ responsiveValue(20) };
              line-height: ${ responsiveValue(26) };
            }
          }
        }
        .title {
          margin-bottom: 20px;
          color: #FFFFFF;
          font-family: 'Kalista Serif';
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 32px;
          ${down('xxl')} {
            margin-bottom: ${ responsiveValue(20) };
            font-size: ${ responsiveValue(20) };
            line-height: ${ responsiveValue(32) };
          }
        }
        .video-container, .image-container {
          position: relative;
          margin-bottom: 40px;
          width: 411px;
          height: 220px;
          overflow: hidden;
          ${down('xxl')} {
            margin-bottom: ${ responsiveValue(40) };
            width: ${ responsiveValue(411) };
            height: ${ responsiveValue(220) };
          }
          img {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100%;
            height: auto;
            transform: translate3D(-50%, -50%, 0);
          }
        }
        .description {
          margin-bottom: 40px;
          color: #FFFFFF;
          font-family: 'KoHo';
          font-style: normal;
          font-weight: 400;
          font-size: 19px;
          line-height: 118.5%;
          ${down('xxl')} {
            margin-bottom: ${ responsiveValue(40) };
            font-size: ${ responsiveValue(19) };
          }
        }
      }
    }
  }
`