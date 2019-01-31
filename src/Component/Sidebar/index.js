import React from "react";
import styled from "styled-components";
import ListContainer from "./List";
import Language from "./Language";
import RightsReserved from "./RightsReserved";

export default class Sidebar extends React.PureComponent {
  render() {
    return (
      <Container>
            {console.log("Sidebar rerender")}
        <TitleContainer>
          <Title>Þjóðbúningar</Title>
          <Title>Íslands</Title>
        </TitleContainer>
        <ListContainer catTitlefunc={this.props.catTitlefunc} />
        <Language />
        <RightsReserved />
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 0 0 20%;
  border-right: rgba(58, 57, 65, 1) solid 1px;
  z-index: 10;
  background-color: rgba(18, 20, 47, 0.85);
`;

const Title = styled.h1`
  text-align: center;
  margin: 0px 5px;
  color: white;
`;

const TitleContainer = styled.div`
  width: 100%;
  font-size: 24px;
  font-weight: 600;
`;
