import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = ({ Picture, Title, Id }) => (
  <Container to={`/ordskyring/${Id}`}>
    <CardTitle>{Title}</CardTitle>
    <Image src={Picture} />
  </Container>
);

export default Card;

const Container = styled(Link)`
  position: relative;
  display: flex;
  height: 100px;
  width: 190px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border-radius: 10px;
  background-color: rgba(58, 57, 65, 1);
  margin: 80px 0px;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

const CardTitle = styled.div`
  padding: 20px 0px;
  font-weight: 600;
`;

const Image = styled.img`
  position: absolute;
  top: -5%;
  left: 50%;
  width: 100px;
  height: 100px;
  margin-top: -50px; /* Half the height */
  margin-left: -50px; /* Half the width */
  border-radius: 50%;
  box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.75);
`;
