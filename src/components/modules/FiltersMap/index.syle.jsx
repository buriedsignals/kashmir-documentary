import styled, { css } from 'styled-components'
import { responsiveValue } from "@/components/templates/Interview/index.style";
import { down } from 'styled-breakpoints';

export const FiltersMapStyle = styled.div`  
  position: absolute;
  top: 110px;
  left: 110px;
  min-width: 270px;
  height: 45px;
  padding: 9px 25px;
  color: #FFFFFF;
  border: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(15px);
  font-family: 'KoHo';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  white-space: nowrap;
  z-index: 1; 
  transition: height 0.25s cubic-bezier(0.16, 1, 0.3, 1) 0.25s;
  ${down('xxl')} {
    top: ${ responsiveValue(110) };
    left: ${ responsiveValue(110) };
    min-width: ${ responsiveValue(270) };
    height: ${ responsiveValue(45) };
    padding: ${ responsiveValue(9) } ${ responsiveValue(25) };
  }
  &.is-open {
    height: 215px;
    transition: height 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    ${down('xxl')} {
      height: ${ responsiveValue(215) };
    }
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
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
  .options {
    opacity: 0;
    transition: opacity 0.25s linear;
    &.is-open {
      opacity: 1;
      transition: opacity 0.25s linear 0.25s;
    }
    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      margin: 12.5px 0;
      background-color: white;
      ${down('xxl')} {
        margin: ${ responsiveValue(12.5) } 0;
      }
    }
    .option {
      position: relative;
      &:not(:last-child) {
        margin-bottom: 15px;
        ${down('xxl')} {
          margin-bottom: ${ responsiveValue(15) };
        }
      }
      &:hover {
        .option-value {
          opacity: 1;
          transition: opacity 0.1s linear;
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
      .option-value {
        display: flex;
        align-items: center;
        opacity: 0.5;
        transition: opacity 0.1s linear;
        svg {
          margin-right: 10px;
          ${down('xxl')} {
            margin-right: ${ responsiveValue(10) };
          }
        }
      }
    }
  }
`
