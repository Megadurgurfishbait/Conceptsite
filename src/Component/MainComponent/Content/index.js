import React from "react";
import styled from "styled-components";
import KnowledgeData from '../../../Assets/Knowledge';

const Content = ({match}) => (
  <Container>
    <Image src={KnowledgeData[match.params.id].Image} />
    <Text>{KnowledgeData[match.params.id].Paragraph}</Text>
  </Container>
);

export default Content;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin-top: 60px;
`;

const Image = styled.img`
  display: block;
  height: 500px;
  width: 600px;
  border-radius: 40px;
`;
const Text = styled.p`
  width: 50%;
  line-height: 2;
  font-size: 14px;
  white-space: pre-wrap;
  color: rgba(255, 255, 255, 66%);
  font-weight: 100;
  margin: 0;
  text-indent: none;
`;
