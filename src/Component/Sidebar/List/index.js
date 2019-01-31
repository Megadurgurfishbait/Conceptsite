import React from "react";
import styled from "styled-components";
import ListItem from "./ListItem";
import ListArray from "../../../Assets/Sidebar/List";



// Fyrri Map: 3 flokkar: Þjóðbúningar, Fróðleikur, Þjóðbúningaráð
// Seinna Map: Börn flokka.
// ListItem:
// Title: Nöfn Flokka
// Paragraph: Titill Barna.
const ListContainer = ({ catTitlefunc }) => (
  <List>
    {ListArray.map(values => (
      <ListItems>
        <ListTitle>{values.name} </ListTitle>
        {values.kids.map(value => (
          <ListItem
            path={value.path}
            catTitlefunc={catTitlefunc}
            title={values.name}
            paragraph={value.title}
          />
        ))}
      </ListItems>
    ))}
    
  </List>
);

export default ListContainer;

const List = styled.ul`
  overflow: hidden;
  margin: 0;
  list-style: none;
  color: white;
  display: flex;
  flex-direction: column;
`;
const ListItems = styled.div`
  padding: 2px 10px;
  margin: 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ListTitle = styled.h4`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: -11;
  color: white;
  text-transform: uppercase;
`;
