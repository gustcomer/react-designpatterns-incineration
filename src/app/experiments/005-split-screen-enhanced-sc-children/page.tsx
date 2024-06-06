"use client"

import SplitScreen from "@/components/split-screen-enhanced-sc-children"

interface SideProps {
  title: string
}

const LeftSideComp: React.FC<SideProps> = ({title}) => {
  return <h2>I am {title}!</h2>
};

const RightSideComp: React.FC<SideProps> = ({title}) => {
  return <h2>I am {title}!</h2>
};

export default function Home() {
  return (
  <SplitScreen leftWidth={1} rightWidth={1}>
    <LeftSideComp title={'Left'} />
    <RightSideComp title={'Right'}/>
  </SplitScreen>);
}