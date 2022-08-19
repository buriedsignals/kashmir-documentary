import styled from "styled-components";

export const MobileTemplateStyle = styled.div`
  height: 100vh;
  header {
    height: 60px;
    border-bottom: 1px solid white;
    backdrop-filter: blur(15px);
    .logo {
      height: 35px;
      margin: 11.5px;
      svg {
        width: 35px;
        height: 35px;
      }
    }
    .navigation {
      .act {
        margin: 0 11.5px;
        button {
          padding: 5px 12.5px;
          font-size: 14px;
          line-height: 23px;
          svg {
            margin-right: 13px;
          }
        }
      }
      .menu {
        display: none;
      }
    }
  }
  .background {
    position: fixed;
    top: 0; left: 0;
    width: 100vw;
    height: 100vh;
    background-image: url('/images/bg-about.jpg');
    background-size: auto 100vh;
    background-position: center;
  }
  .main {
    position: relative;
    padding-top: 60px;
    overflow: scroll;
    z-index: 1;
    .title-container {
      position: relative;
      margin: 100px 30px;
      .title {
        color: #FFFFFF;
        font-family: 'Kalista Serif';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 29px;
        text-align: center;
      }
      &::before, &::after {
        content: '';
        position: absolute;
        left: 50%;
        display: block;
        width: 10px;
        height: 10px;
        background: #FFFFFF;
        transform: translate3D(-50%, -50%, 0) rotate3D(0, 0, 1, 45deg);
      }
      &::before {
        top: 0;
        margin-top: -30px;
      }
      &::after {
        bottom: 0;
        margin-bottom: -40px;
      }
    }
    iframe {
      width: 100vw;
      height: 56.2vw;
    }
    .description-container {
      margin: 30px;
      .description {
        color: #FFFFFF;
        font-family: 'KoHo';
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        line-height: 118.5%;
      }
    }
  }
`