import React from "react";
import styled from "styled-components";
import BuningaDiv from "./BuningaDiv";
import Scroller from "./Scroller";
import DataArray from "../../../Assets/Buningur/index";

class Buningar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BuningurData: DataArray["buningur1"]
    };
  }


  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.setState({
        BuningurData: DataArray[this.props.match.params.id]
      });
    }
  }

  render() {
    return (
      <Container>
        <BuningaDiv data={this.state.BuningurData} />
        <Scroller />
      </Container>
    );
  }
}

export default Buningar;

const Container = styled.div`
  display: flex;
  width: 100%;
`;
