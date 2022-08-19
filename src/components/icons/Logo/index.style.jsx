import styled from "styled-components";
import { responsiveValue } from "@/components/templates/Interview/index.style";
import { down } from "styled-breakpoints";

export const LogoStyle = styled.svg`
  width: 67px;
  height: 67px;
  ${down('xxl')} {
    width: ${ responsiveValue(67) };
    height: ${ responsiveValue(67) };
  }
`