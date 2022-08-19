import styled, { css } from "styled-components";
import { responsiveValue } from "@/components/templates/Interview/index.style";
import { down } from "styled-breakpoints";

export const CardInterviewStyle = styled.div`
  position: relative;
  width: 33.33vw;
  height: 100vh;
  overflow: hidden;
  &:not(:first-child):not(:last-child) {
    border-left: 1px solid #FFFFFF80;
    border-right: 1px solid #FFFFFF80;
  }
  &:hover {
    &::before {
      filter: blur(0);
      transform: scale3D(1, 1, 1);
      transition: filter 0.9s ease-out, transform 0.9s ease-out;
    }
    .content-card-interview {
      .content-card-interview-container {
        position: absolute;
        top: 0; left: 0;
        opacity: 0;
        visibility: hidden;
        transform: scale3D(0.9, 0.9, 0.9);
        transition: opacity 0.5s linear 0.25s, transform 0.5s ease-out 0.25s;
      }
      .content-card-interview-container-hover {
        position: relative;
        top: inherit; left: inherit;
        opacity: 1;
        visibility: visible;
        transform: scale3D(1, 1, 1);
        transition: opacity 0.5s linear 0.25s, transform 0.5s ease-out 0.25s;
      }
    }
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-image: url('images/interview-${(props) => props.slug }.jpg');
    background-size: cover;
    background-position: center;
    filter: blur(15px);
    transform: scale3D(1.02, 1.02, 1.02);
    transition: filter 0.9s ease-out, transform 0.9s ease-out;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: #000000;
    ${(props) => {
      if (props.interviewFinished) {
        return css`opacity: 0.5;`
      } else {
        return css`opacity: 0;`
      }
    }}
    z-index: 0;
  }
  .content-card-interview {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    ${(props) => {
      if (props.allInterviewsFinished) {
        return css`opacity: 0;`
      } else if (props.interviewFinished) {
        return css`opacity: 0.5;`
      }
    }}
    z-index: 1;
    .content-card-interview-container {
      position: relative;
      top: inherit; left: inherit;
      opacity: 1;
      visibility: visible;
    }
    .content-card-interview-container-hover {
      position: absolute;
      top: 0; left: 0;
      opacity: 0;
      visibility: hidden;
      transform: scale3D(0.975, 0.975, 0.975);
      &::before, &::after {
        content: '';
        position: absolute;
        left: 50%;
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
    .content-card-interview-container, .content-card-interview-container-hover {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 320px;
      height: fit-content;
      transition: opacity 0s linear 0.25s, transform 0s ease-out 0.25s;
      ${down('xxl')} {
        max-width: ${ responsiveValue(320) };
      }
      .title {
        color: #FFFFFF;
        font-family: 'Kalista Serif';
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 45px;
        text-align: center;
        ${down('xxl')} {
          font-size: ${ responsiveValue(28) };
          line-height: ${ responsiveValue(45) };
        }
      }
      .name {
        margin-top: 30px;
        color: #FFFFFF;
        font-family: 'KoHo';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 23px;
        text-align: center;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        ${down('xxl')} {
          margin-top: ${ responsiveValue(30) };
          font-size: ${ responsiveValue(18) };
          line-height: ${ responsiveValue(23) };
        }
      }
      .description {
        margin-top: 20px;
        color: #FFFFFF;
        font-family: 'KoHo';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 26px;
        text-align: center;
        ${down('xxl')} {
          margin-top: ${ responsiveValue(20) };
          font-size: ${ responsiveValue(20) };
          line-height: ${ responsiveValue(26) };
        }
      }
    }
    .button-start-card-interview {
      position: absolute;
      bottom: 55px;
      left: 50%;
      transform: translate3D(-50%, 0, 0);
      ${down('xxl')} {
        bottom: ${ responsiveValue(55) };
      }
    }
  }
`