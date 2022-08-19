import styled from "styled-components";
import { responsiveValue } from "@/components/templates/Interview/index.style";
import { down } from "styled-breakpoints";

export const MenuStyle = styled.div`
  .button-open-menu, .button-close-menu {
    width: 45px;
    height: 45px;
    margin: 0 22.5px;
    ${down('xxl')} {
      width: ${ responsiveValue(45) };
      height: ${ responsiveValue(45) };
      margin: 0 ${ responsiveValue(22.5) };
    }
  }
  .button-close-menu {
    & > svg {
      width: 35px;
      height: 35px;
      ${down('xxl')} {
        width: ${ responsiveValue(35) };
        height: ${ responsiveValue(35) };
      }
    }
  }
  .panel {
    & .content-menu {
      position: absolute;
      top: 0;
      right: 0;
      width: 448px;
      height: 100vh;
      padding: 90px 45px;
      // backdrop-filter: blur(15px);
      z-index: -2;
      ${down('xxl')} {
        width: ${ responsiveValue(448) };
        padding: ${ responsiveValue(90) } ${ responsiveValue(45) };
      }
      ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        li {
          opacity: 0.25;
          transition: opacity 0.15s linear;
          &.is-active {
            opacity: 1;
          }
          &:not(:last-child) {
            margin-bottom: 40px;
            ${down('xxl')} {
              margin-bottom: ${ responsiveValue(40) };
            }
          }
          &:hover {
            opacity: 1;
            transition: opacity 0.15s linear;
            &.is-active {
              a {
                span {
                  margin-right: 20px;
                  ${down('xxl')} {
                    margin-right: ${ responsiveValue(20) };
                  }
                }
              }
            }
            a {
              span {
                margin-right: 30px;
                transition: margin-right 0.15s ease-out;
                ${down('xxl')} {
                  margin-right: ${ responsiveValue(30) };
                }
              }
            }
          }
          a {
            color: #FFFFFF;
            font-family: 'Kalista Serif';
            font-style: normal;
            font-weight: 400;
            font-size: 28px;
            line-height: 45px;
            letter-spacing: 0.125em;
            text-transform: uppercase;
            ${down('xxl')} {
              font-size: ${ responsiveValue(28) };
              line-height: ${ responsiveValue(45) };
            }
            span {
              margin-right: 20px;
              font-size: 14px;
              transition: margin-right 0.2s ease-in;
              ${down('xxl')} {
                margin-right: ${ responsiveValue(20) };
                font-size: ${ responsiveValue(14) };
              }
            }
          }
        }
      }
    }
  }
`