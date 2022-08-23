import styled from "styled-components";
import { responsiveValue } from "@/components/templates/Interview/index.style";
import { down } from "styled-breakpoints";

export const TwitterStyle = styled.svg`
  width: 35px;
  height: 35px;
  ${down('xxl')} {
    width: ${ responsiveValue(35) };
    height: ${ responsiveValue(35) };
    min-width: 20px;
    min-height: 20px;
  }
`