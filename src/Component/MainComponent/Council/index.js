import React from "react";
import styled from "styled-components";
import { Content } from "./Content";
import { Scrollbar } from "../../../Assets/CSSFunc";
import Data from "../../../Assets/Council";

const Council = ({ match }) => (
  <Container>
    <Content Info={Data[match.params.id]} />
  </Container>
);

export default Council;

const Container = styled.div`
  width: 100%;
  height: 100%;
  ${Scrollbar}
`;
