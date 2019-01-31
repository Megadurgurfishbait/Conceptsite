import React from "react";
import styled from "styled-components";

export const Content = ({ Info }) => (
  <Container>
    {Info.map(values => (
      <>
        <Subtitle>{values.Title} </Subtitle>
        <Paragraph>{values.Paragraph}</Paragraph>
      </>
    ))}
  </Container>
);

const Container = styled.div`
  display: block;
  padding: 20px none;
  color: white;
`;

const Subtitle = styled.h5`
  font-size: 16px;
  margin: 20px auto 5px auto;
  color: white;
`;
const Paragraph = styled.p`
  margin: 15px auto;
  white-space: pre;
  text-indent: none;
  font-size: 14px;
  line-height: 2;
  margin: 0px;
  width: 100%;
  color: rgba(112, 112, 112, 1);
`;
