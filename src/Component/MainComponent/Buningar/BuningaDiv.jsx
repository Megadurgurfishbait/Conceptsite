import React, { Component } from "react";
import styled from "styled-components";
import { TimelineLite } from "gsap/all";

class BuningaDiv extends Component {
  constructor(props) {
    super(props);
    this.logoTl = new TimelineLite({ paused: true });
    this.description = null;
    this.pic = null;
    this.Images = null;
    this.State = {
      data: []
    };
  }
  componentDidMount() {
    this.setState({
      data: this.props.data
    });
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.data === nextProps.data) {
      return false;
    } else {
      this.logoTl
        .from(this.pic, 0.4, { opacity: 0 })
        .from(this.description, 0.2, { x: "50%", autoAlpha: 0 })
        .from(this.Images, 0.3, {y: "100%",opacity: 0});
      this.logoTl.play();
      return true;
    }
  }

  render() {
    let { data } = this.props;
    return (
      <Container>
        <Info>
          <WhiteBackground>
            <Picture ref={div => (this.pic = div)} src={data.Image} />
          </WhiteBackground>
          <Text ref={div => (this.description = div)}>{data.Desc}</Text>
        </Info>
        <ImagesContainer ref={div => (this.Images = div)}>
          {data.ExtraImages.map(values => {
            return <SingleImage src={values} />;
          })}
        </ImagesContainer>
      </Container>
    );
  }
}

export default BuningaDiv;

const WhiteBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 500px;
  width: 350px;
  z-index: -1;
  border-radius: 10px;
  border: 3px solid rgba(40, 44, 52, 0.5);
`;
const Container = styled.div`
  height: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  flex: 1 1 70%;
`;

const Picture = styled.img`
  flex: 0 0 35%;
  max-height: 450px;
  max-width: 350px;
`;

const Text = styled.p`
  height: 400px;
  flex: 1 1 65%;
  color: rgba(112, 112, 112, 1);
  font-size: 16px;
  line-height: 2;
  padding: 10px 45px;
`;

const Info = styled.div`
  display: flex;
`;

const ImagesContainer = styled.div`
  display: flex;
  margin-top: 20px;
  padding: 0px 10px;
  justify-content: flex-start;

  &::-webkit-scrollbar {
    height: 5px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 12px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgray;
    outline: 1px solid slategrey;
    border-radius: 10px;
  }
`;
const SingleImage = styled.img`
  border-radius: 15px;
  border: 3px solid rgba(40, 44, 52, 0.5);
  height: 100px;
  width: 75px;
  margin: 0;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(3.5);
    z-index: 500;
    margin: 0px 80px;
  }
`;
