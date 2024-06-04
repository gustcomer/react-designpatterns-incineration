"use client"

import SplitScreen from "../components/split-screen-sc"

const LeftSideComp = () => {
  return <h2>I am left!</h2>
};

const RightSideComp = () => {
  return <h2>I am right!</h2>
};

export default function Home() {
  return <SplitScreen Left={LeftSideComp} Right={RightSideComp} />;
}
