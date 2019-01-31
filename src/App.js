import React, { Component } from "react";
import styled from "styled-components";
import Sidebar from "./Component/Sidebar";
import MainComponent from "./Component/MainComponent";
import Image from "./Assets/Background";
import { Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      category: ""
    };
  }

  _getCatTitle = (category, title) => {
    console.log("title: ", title, " cat: ", category);
    this.setState({
      title,
      category
    });
  };

  render() {
    let { title, category } = this.state;
    return (
      <div className="App">
        <Container>
          <Sidebar catTitlefunc={this._getCatTitle} />
          <Route
            render={props => (
              <MainComponent {...props} title={title} category={category} />
            )}
          />
        </Container>
        <BackgroundOverlay />
      </div>
    );
  }
}

export default App;

const Container = styled.div`
  display: flex;
  position: relative;
  max-height: 100vh;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  filter: blur(20px);
  background-image: url(${Image});
  background-size: contain;
`;
