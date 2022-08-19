import styled from "styled-components";
import { responsiveValue } from "@/components/templates/Interview/index.style";
import { down } from "styled-breakpoints";

export const StandKashmirLogoStyle = styled.svg`
  width: 69px;
  height: 42px;
  ${down('xxl')} {
    width: ${ responsiveValue(69) };
    height: ${ responsiveValue(42) };
  }
`