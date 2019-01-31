import React from "react";
import styled from "styled-components";

export default () => (
  <Container>
    <Text>© Allur réttur áskilinn Þjóðbúningaráð</Text>
    <Text>buningurinn@thjodminjasafn.is</Text>
    <Text>Suðurgötu 43, 101 Reykjavík Sími: 5302200 </Text>
  </Container>
);

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

const Text = styled.h5`
  font-size: 10px;
  margin: 0;
  margin-top: 5px;
  font-weight: 100;
  letter-spacing: 1px;
`;
