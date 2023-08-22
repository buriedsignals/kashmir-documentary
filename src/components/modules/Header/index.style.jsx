import styled from "styled-components";
import { responsiveValue } from "@/components/templates/Interview/index.style";
import { down } from "styled-breakpoints";

export const HeaderStyle = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 90px;
  z-index: 15;
  ${down('xxl')} {
    height: ${ responsiveValue(90) };
  }
  .logo {
    height: 67px;
    margin: 0 11.5px;
    ${down('xxl')} {
      height: ${ responsiveValue(67) };
      margin: 0 ${ responsiveValue(11.5) };
    }
  }
  .bs-logo {
    position: fixed; 
    bottom: 0; left: 0;
    display: flex;
    align-items: center;
    height: 67px;
    margin: 11.5px 9px;
    opacity: 1;
    transition: opacity 0.25s linear;
    ${down('lg')} {
      display: none;
    }
    ${down('xxl')} {
      height: ${ responsiveValue(67) };
      margin: ${ responsiveValue(11.5) } ${ responsiveValue(9) };
    }
  }
  .sk-logo {
    position: fixed; 
    bottom: 0; right: 0;
    display: flex;
    align-items: center;
    height: 67px;
    margin: 11.5px 11px;
    opacity: 1;
    transition: opacity 0.25s linear;
    ${down('lg')} {
      display: none;
    }
    ${down('xxl')} {
      height: ${ responsiveValue(67) };
      margin: ${ responsiveValue(11.5) } ${ responsiveValue(11) };
    }
  }
  .navigation {
    display: flex;
    align-items: center;
    .items {
      display: flex;
      align-items: center;
      margin: 0 45px;
      ${down('xxl')} {
        margin: 0 ${ responsiveValue(45) };
      }
      .act {
      }
      .socialItem {
        margin: 0 9px;
        ${down('xxl')} {
          margin: 0 ${ responsiveValue(9) };
        }
        button {
          padding: 5px;
          ${down('xxl')} {
            padding: ${ responsiveValue(5) };
          }
          svg {
            margin: 0;
          }
        }
      }
    }
  }
`