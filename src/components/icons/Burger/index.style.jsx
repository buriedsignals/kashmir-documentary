import styled from "styled-components";
import { responsiveValue } from "@/components/templates/Interview/index.style";
import { down } from "styled-breakpoints";

export const BurgerStyle = styled.svg`
  width: 45px;
  height: 45px;
  ${down('xxl')} {
    width: ${ responsiveValue(45) };
    height: ${ responsiveValue(45) };
  }
`