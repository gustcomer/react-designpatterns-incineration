"use client"
import Link from "next/link";

export default function Home() {
  return(
    <>
      <h2 className="text-2xl">Design Patterns</h2>
      <p><Link href='/experiments/001-split-screen-sc'>Split Screen using Styled Components</Link></p>
      <p><Link href='/experiments/002-split-screen-tw'>Split Screen using Tailwind</Link></p>
      <p><Link href='/experiments/003-split-screen-enhanced-sc'>Enhanced Split Screen using Styled Components</Link></p>
      <p><Link href='/experiments/004-split-screen-enhanced-tw'>Enhanced Split Screen using Tailwind</Link></p>
      <p><Link href='/experiments/005-split-screen-enhanced-sc-children'>Enhanced Split Screen using Styled Components passing subcomponents as children insted of props</Link></p>
      <p><Link href='/experiments/006-list'>List</Link></p>
      <p><Link href='/experiments/007-modal'>Modal</Link></p>
      <br />
      <h2 className="text-2xl">UI Components</h2>
      <p><Link href='/experiments/008-user-component'>User Component</Link></p>
    </>
  );
}
