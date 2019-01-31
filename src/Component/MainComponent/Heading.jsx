import React from "react";
import styled from "styled-components";

class Header extends React.PureComponent {
  render() {
    const { category, title } = this.props;
    return (
      <Container>
        <Title>{category}</Title>
        <Title main>{title}</Title>
      </Container>
    );
  }
}

export default Header;

const Container = styled.div`
  width: 100%;
  display: block;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: ${props => (props.main ? "40px" : "24px")};
  font-weight: ${props => (props.main ? "800" : "100")};
  letter-spacing: ${props => (props.main ? "2px" : "-1.5px")};
  color: ${props => (props.main ? "white" : "rgba(185, 0, 0, .82)")};
  margin: 0;
`;
