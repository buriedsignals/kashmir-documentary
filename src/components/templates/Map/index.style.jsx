import styled from "styled-components";

export const MapTemplateStyle = styled.div`
  .content-map {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    overflow: hidden;
    .content-map-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100vw;
      height: 100vh;
    }
  }
`