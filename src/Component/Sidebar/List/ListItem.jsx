import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// CatTitleFun => Sendir Flokk og Titil til MainComponent/Header.
export default ({ paragraph, title, path, catTitlefunc }) => (
  <Container onClick={() => catTitlefunc(title, paragraph)} to={`${path}`}>
    {paragraph}
  </Container>
);

const Container = styled(Link)`
  padding: 10px 0px;
  padding-left: 20px;
  letter-spacing: 1px;
  font-weight: 100;
  font-size: 16px;
  background-color: transparent;
  border: none;
  text-align: left;
  color: white;
  text-decoration: none;
  &:hover,
  &:focus {
    color: rgba(185, 0, 0, 0.82);
    cursor: pointer;
    outline: none;
  }
`;
