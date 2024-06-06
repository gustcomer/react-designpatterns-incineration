"use client"

import React, { ReactNode } from "react";
import styled from "styled-components";

interface ComponentProps {
  children: [ReactNode, ReactNode],
  leftWidth?: number,
  rightWidth?: number
}

const Container = styled.div`
  display: flex;
`

const Panel = styled.div<{ flex: number }>`
  flex: ${props => props.flex};
`

const SplitScreenEnhanced: React.FC<ComponentProps> = ({children, leftWidth=1, rightWidth=1}) => {
  const [left, right] = children;
  return (
    <Container>
      <Panel flex={leftWidth}>
        {left}
      </Panel>
      <Panel flex={rightWidth}>
        {right}
      </Panel>
    </Container>
  );
};

export default SplitScreenEnhanced;