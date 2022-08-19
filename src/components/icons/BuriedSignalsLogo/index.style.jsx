import styled from "styled-components";
import { responsiveValue } from "@/components/templates/Interview/index.style";
import { down } from "styled-breakpoints";

export const BuriedSignalsLogoStyle = styled.svg`
  width: 63px;
  height: 38px;
  ${down('xxl')} {
    width: ${ responsiveValue(63) };
    height: ${ responsiveValue(38) };
  }
`