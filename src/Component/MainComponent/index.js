import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import Content from "./Content";
import Council from "./Council";
import Wordsplaning from "./Wordsplaning";
import WordsplaningList from "./WordsplaningList";
import { Route, Switch } from "react-router-dom";
import Buningar from "./Buningar";

class MainComponent extends React.PureComponent {
    render() {
    return (
      <Container>
        <Heading title={this.props.title} category={this.props.category} />
        <Switch>
          <Route path={`/content/:id`} component={Content} />
          <Route path={`/ordskyring/:id`} component={Wordsplaning} />
          <Route path={`/ordskyring`} component={WordsplaningList} />
          <Route path={`/radid/:id`} component={Council} />
          <Route path={`/buningar/:id`} component={Buningar} />
        </Switch>
      </Container>
    );
  }
}

export default MainComponent;

const Container = styled.div`
  box-sizing: border-box;
  padding: 50px;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-content: space-between;
  flex-direction: column;
  flex: 0 0 80%;
  z-index: 1;
  background: linear-gradient(
    to right,
    rgba(18, 20, 47, 0.85) 0%,
    rgba(18, 20, 47, 0.98) 100%
  );
`;
