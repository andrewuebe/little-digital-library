import Nav from "./Nav";
import Link from "next/link"
import styled from "styled-components";

const TheHeader = styled.div`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  height: auto;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  box-sizing: border-box;
  align-items: center;
`;

const Title = styled.div`
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-size: 1.5em;
  a{
    text-decoration: none;
    color: #53443b;
  }
`;

const Header = (props) => (
  <TheHeader>
    <Title onClick={props.closeToLibrary}>
      <Link href="/">
        <a>Little Digital Library</a>
      </Link>
    </Title>
    <Nav closeToLibrary={props.closeToLibrary}/>
  </TheHeader>
);

export default Header;
