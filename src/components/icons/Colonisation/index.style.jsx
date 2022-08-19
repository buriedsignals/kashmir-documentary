import styled from "styled-components";
import { responsiveValue } from "@/components/templates/Interview/index.style";
import { down } from "styled-breakpoints";

export const ColonisationStyle = styled.svg`
  width: 20px;
  height: 20px;
  ${down('xxl')} {
    width: ${ responsiveValue(20) };
    height: ${ responsiveValue(20) };
  }
`