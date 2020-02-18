import Link from "next/link";
import styled from "styled-components";

const TextLink = styled.a`
  margin-left: 20px;
  :hover {
    cursor: pointer;
  }
`;

const Nav = () => (
  <div className="nav">
    <Link href="/">
      <TextLink>Home</TextLink>
    </Link>
    <Link href="/about">
      <TextLink>About</TextLink>
    </Link>
  </div>
);

export default Nav;
