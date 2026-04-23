import styled, { css } from "styled-components";
import { responsiveValue } from "@/components/templates/Interview/index.style";
import { down } from "styled-breakpoints";
import { motion } from "framer-motion";

export const MapboxStyle = styled(motion.div)`
  position: relative;
  align-self: flex-start;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  // &.is-popup {
  //   width: calc(100% - 548px);
  //   ${down("xxl")} {
  //     width: calc(100% - ${responsiveValue(548)});
  //   }
  // }
  .maplibregl-ctrl-bottom-left,
  .maplibregl-ctrl-bottom-right {
    display: none;
  }
  .maplibregl-popup {
    max-width: 260px !important;
    ${down("xxl")} {
      max-width: ${responsiveValue(260)} !important;
    }
    .maplibregl-popup-tip {
      display: none;
    }
    .maplibregl-popup-content {
      padding: 15px 13px;
      background: #7d817d;
      box-shadow: inherit;
      border: 1px solid #ffffff;
      border-radius: 0;
      ${down("xxl")} {
        padding: ${responsiveValue(15)} ${responsiveValue(13)};
      }
      .maplibregl-popup-close-button {
        display: none;
      }
      .popup-hover {
        position: relative;
        color: #ffffff;
        .popup-hover-category {
          &::before {
            content: "";
            top: 50%;
            display: inline-block;
            width: 7px;
            height: 7px;
            margin: 0 10px 0 7px;
            background: #ffffff;
            transform: translate3D(-50%, -50%, 0) rotate3D(0, 0, 1, 45deg);
            ${down("xxl")} {
              width: ${responsiveValue(7)};
              height: ${responsiveValue(7)};
              margin: 0 ${responsiveValue(10)} 0 ${responsiveValue(7)};
            }
          }
        }
        .popup-hover-title {
          margin-top: 7.5px;
          color: #ffffff;
          font-family: "Kalista Serif";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 23px;
          letter-spacing: 0.05em;
          ${down("xxl")} {
            margin-top: ${responsiveValue(7.5)};
            font-size: ${responsiveValue(14)};
            line-height: ${responsiveValue(23)};
          }
        }
      }
    }
  }
`;

export const SatelliteStyle = styled.div`
  p {
    position: absolute;
    bottom: 197.5px
    left: 110px;
    width: 80px;
    color: #FFFFFF;
    font-family: 'KoHo';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 13px;
    text-align: center;
    white-space: nowrap;
    z-index: 1; 
    ${down("xxl")} {
      bottom: ${responsiveValue(197.5)};
      left: ${responsiveValue(110)};
      width: ${responsiveValue(80)};
      font-size: ${responsiveValue(14)};
      line-height: ${responsiveValue(13)};
    }
  }
  .satellite-container {
    position: absolute;
    bottom: 110px;
    left: 110px;
    width: 80px;
    height: 80px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background-image: url('images/button-${(props) =>
      props.isSatellite ? "stylized" : "satellite"}.jpg');
    background-size: cover;
    background-position: center;
    z-index: 1; 
    transition: height 0.25s cubic-bezier(0.16, 1, 0.3, 1) 0.25s;
    ${down("xxl")} {
      bottom: ${responsiveValue(110)};
      left: ${responsiveValue(110)};
      width: ${responsiveValue(80)};
      height: ${responsiveValue(80)};
    }
    &:hover {
      .border-left, .border-right {
        &::before, &::after {
          width: 100%;
          height: 100%;
        }
      }
    }
    .border-left, .border-right {
      &::before, &::after {
        content: '';
        position: absolute;
        display: block;
        width: 5px;
        height: 5px;
        border: 1px solid;
        pointer-events: none;
        ${down("xxl")} {
          width: ${responsiveValue(5)};
          height: ${responsiveValue(5)};
        }
      }
    }
    .border-left {
      &::before {
        top: -1px;
        left: -1px;    
        border-top-color: #FFFFFF;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: #FFFFFF;
      }
      &::after {
        bottom: -1px;
        left: -1px;    
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: #FFFFFF;
        border-left-color: #FFFFFF;
      }
    }
    .border-right {
      &::before {
        top: -1px;
        right: -1px;    
        border-top-color: #FFFFFF;
        border-right-color: #FFFFFF;
        border-bottom-color: transparent;
        border-left-color: transparent;
      }
      &::after {
        bottom: -1px;
        right: -1px;    
        border-top-color: transparent;
        border-right-color: #FFFFFF;
        border-bottom-color: #FFFFFF;
        border-left-color: transparent;
      }
    }
    input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      z-index: 1;
      cursor: pointer;
      &:checked ~ .option-value {
        opacity: 1;
      }
    }
  }
`;
