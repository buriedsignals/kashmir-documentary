import styled from "styled-components";
import { responsiveValue } from "@/components/templates/Interview/index.style";
import { down } from "styled-breakpoints";

export const StandKashmirLogoStyle = styled.svg`
  width: 68px;
  height: 51px;
  ${down('xxl')} {
    width: ${ responsiveValue(68) };
    height: ${ responsiveValue(51) };
  }
`