import styled from "styled-components";
import { responsiveValue } from "@/components/templates/Interview/index.style";
import { down } from "styled-breakpoints";

export const BuriedSignalsLogoStyle = styled.svg`
  width: 73px;
  height: 48px;
  ${down('xxl')} {
    width: ${ responsiveValue(73) };
    height: ${ responsiveValue(48) };
  }
  path {
    fill: #fff;
  }
`