import React, {PureComponent} from "react";
import styled from "styled-components";
import { Scrollbar } from "../../../Assets/CSSFunc";
import { DataArrayMap } from "../../../Assets/Buningur/index";
import { Link } from "react-router-dom";

export default class Scroller extends PureComponent {
      render() {
            return (
                  <List>
                  {DataArrayMap.map(values => {
                    return (
                      <ListItem to={`/buningar/${values.Id}`}>
                        <Pic src={values.Min} />
                        <Title>{values.Title}</Title>
                      </ListItem>
                    );
                  })}
                </List>  
            )
      }
}

const List = styled.ul`
  ${Scrollbar};
  display: flex;
  flex-direction: column;
  align-content: space-around;
  flex: 1 1 20%;
  height: 60vh;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled(Link)`
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 70px;
  border-radius: 15px;
  text-decoration: none;
  border: 1px solid transparent;
  &:hover,
  &:focus {
    background-color: #343547
;
  }
`;

const Title = styled.h4`
  font-size: 20px;
  font-weight: 600;
  line-height: 70px;
  color: white;
  padding-left: 30px;
  margin: 0;
`;

const Pic = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 15px;
  margin: auto 15px;
`;
