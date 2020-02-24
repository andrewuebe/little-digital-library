import Link from "next/link";
import styled from "styled-components";

const TextLink = styled.a`
  margin-left: 20px;
  :hover {
    cursor: pointer;
  }
`;

const Nav = (props) => (
  <div className="nav">
    <Link href="/">
      <TextLink onClick={props.closeToLibrary}>Home</TextLink>
    </Link>
    <Link href="/about">
      <TextLink onClick={props.closeToLibrary} >About</TextLink>
    </Link>
  </div>
);

export default Nav;
