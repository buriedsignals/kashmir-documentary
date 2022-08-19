import styled from "styled-components";
import { down } from "styled-breakpoints";

export function responsiveValue(value) {
  return `${value * 100 / 1440}vw`;
}

export const InterviewTemplateStyle = styled.div`
  .content-interview {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    background: black;
    .content-interview-container {
      position: absolute;
      top: 90px;
      left: 90px;
      width: calc(100vw - 180px);
      height: calc(100vh - 180px);
      ${down('xxl')} {
        top: ${ responsiveValue(90) };
        left: ${ responsiveValue(90) };
        width: calc(100vw - ${ responsiveValue(180) });
        height: calc(100vh - ${ responsiveValue(180) });
      }
      .eko_component_container {
        width: 100%;
        height: 100%;
      }
    }
  }
`