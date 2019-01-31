import React from 'react';
import styled from 'styled-components';
import {English, Icelandic } from '../../../Assets/Sidebar/Language';


const Language = () => 
      <Container>
            <Image isl ></Image>
            <Image></Image>
      </Container>


export default Language;

const Container = styled.div`
      display: flex;
      justify-content: space-evenly;
      width: 100%;
`;

const Image = styled.div`
      background-image: url(${props => props.isl ? Icelandic : English});
      background-repeat: no-repeat;
      display: block;
      height: 50px;
      width: 50px;
      border: 2px solid transparent;
      border-radius: 50%;
      :hover{
            border: 2px solid white;
      }
`;



