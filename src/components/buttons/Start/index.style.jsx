import styled from "styled-components";
import { responsiveValue } from "@/components/templates/Interview/index.style";
import { down } from "styled-breakpoints";

export const StartStyle = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  padding: 9px 25px;
  color: #FFFFFF;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: rgba(255, 255, 255, 0.15);
  font-family: 'KoHo';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  white-space: nowrap;
  ${down('xxl')} {
    padding: ${ responsiveValue(9) } ${ responsiveValue(25) };
    font-size: ${ responsiveValue(18) };
    line-height: ${ responsiveValue(23) };
  }
  svg {
    margin-right: 13px;
    ${down('xxl')} {
      margin-right: ${ responsiveValue(13) };
    }
  }
  &:hover {
    .border-left, .border-right {
      &::before, &::after {
        width: 100%;
        height: 100%;
        transition: width 0.35s ease, height 0.45s ease;
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
      transition: width 0.35s ease, height 0.45s ease;
      ${down('xxl')} {
        width: ${ responsiveValue(5) };
        height: ${ responsiveValue(5) };
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
`