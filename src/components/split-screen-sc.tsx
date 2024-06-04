"use client"

import styled from "styled-components";

const Container = styled.div`
  display: flex;
`

const Panel = styled.div`
  flex: 1;
`

interface ComponentProps {
  Left: React.FC,
  Right: React.FC
}

const SplitScreen: React.FC<ComponentProps> = ({Left, Right}) => {
  return (
    <Container>
      <Panel>
        <Left />
      </Panel>
      <Panel>
        <Right />
      </Panel>
    </Container>
  );
};

export default SplitScreen;