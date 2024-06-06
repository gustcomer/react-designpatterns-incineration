"use client"

import styled from "styled-components";

interface ComponentProps {
  Left: React.FC,
  Right: React.FC,
  leftWidth?: number,
  rightWidth?: number
}

const Container = styled.div`
  display: flex;
`

const Panel = styled.div<{ flex: number }>`
  flex: ${props => props.flex};
`

const SplitScreenEnhanced: React.FC<ComponentProps> = ({Left, Right, leftWidth=1, rightWidth=1}) => {
  return (
    <Container>
      <Panel flex={leftWidth}>
        <Left />
      </Panel>
      <Panel flex={rightWidth}>
        <Right />
      </Panel>
    </Container>
  );
};

export default SplitScreenEnhanced;