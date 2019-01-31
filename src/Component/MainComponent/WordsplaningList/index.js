import React from "react";
import styled from "styled-components";
import { Mapping } from "../../../Assets/Wordsplaning";
import Card from "./Card";
import { Scrollbar } from "../../../Assets/CSSFunc";
import Wordsplaning from "../Wordsplaning";

const WordsplaningList = ({func}) => {
  return (
    <Container>
      {Mapping.map(value => {
        return (
          <Card
            key = {value.Id}
            Id = {value.Id}
            Title={value.Title}
            func={func}
            Picture={value.Picture}
          />
        );
      })}
    </Container>
  );
};

export default WordsplaningList;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  margin-top: 30px;

  ${Scrollbar}
`;
