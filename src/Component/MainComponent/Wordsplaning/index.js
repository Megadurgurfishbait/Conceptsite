import React from "react";
import styled from "styled-components";
import {Words} from '../../../Assets/Wordsplaning'

const Wordsplaning = ({match}) => (
  <Container>
    {Words[match.params.id].Info.map(values => {
      return (
        <Card>
          <TitleContainer>
            <Title>{values.Title}</Title>
            <Paragraph>{values.Desc}</Paragraph>
          </TitleContainer>
        </Card>
      );
    })}
    <Image src={Words[match.params.id].Picture} />
  </Container>
);

export default Wordsplaning;

const Container = styled.div`
  margin-top: 30px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
`;

const Card = styled.div`
  padding: 0px;
  margin: 0px;
  display: flex;
  flex: 1 0 50%;
  max-width: 50%;
  flex-direction: column;
  &:nth-child(odd) {
    text-align: left;
    align-items: flex-start;
  }
  &:nth-child(even) {
    text-align: right;
    align-items: flex-end;
  }
`;

const TitleContainer = styled.div`
  width: 60%;
  text-align: left;
  display: inline-block;
`;

const Title = styled.h3`
  margin: 5px 0px;
  color: white;
  font-weight: 600;
`;

const Paragraph = styled.p`
  font-size: 14px;
  line-height: 2;
  margin: 0px;
  color: rgba(112, 112, 112, 1);

`;

const Image = styled.img`
  position: absolute;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  ${imageSize(400)}
`;



function imageSize(size) {
      return `
      width: ${size}px;
      height: ${size}px;
      margin-left: -${size/2}px;
      margin-top: -${size/2}px;
      
      `;
}