import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";

const Table = styled.img``;

const LeftWrapper = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 50%;
  padding: 0px 2rem;
  vertical-align: top;
  margin-bottom: 2rem;
  h1 {
    font-weight: 600;
    font-size: 50px;
    display: block;
    position: relative;
  }
  @media screen and (max-width: 850px) {
    display: block;
    width: 100%;
  }
`;

const SearchBar = styled.input`
  font-family: "Hind", Helvetica, sans-serif;
  width: 100%;
  height: 56px;
  padding: 10px 20px;
  position: relative;
  transition: 0.3s all;
  font-size: 20px;
  background: none;
  border: none;
  border-bottom: 3px solid #afa49c;
  color: #53443b;
  ::placeholder {
    color: #afa49c;
  }
  :focus {
    border-bottom: 3px solid #53443b;
    outline: none;
  }
`;

const ReviewCard = styled.div`
  box-sizing: border-box;
  display: block;
  flex-wrap: wrap;
  position: relative;
  align-items: flex-start;
  align-content: flex-start;
  width: 100%;
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid #53443b;
  background-color: #f9ebef;
  ::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: #53443b;
    border: 1px solid #53443b;
    top: 2px;
    left: 2px;

    /* create a new stacking context */
    position: absolute;
    z-index: -1;
  }
`;

const FormTitle = styled.div`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 2rem;
`;

const ItemInfoField = styled.div`
  display: block;
  position: relative;
  padding-top: 2rem;
  padding-bottom: 1rem;
  font-family: "Montserrat", Helvetica, sans-serif;
  font-size: 40px;
  line-height: 48px;
  font-weight: 300;
  .typeName {
    font-size: 100px;
  }
  span {
    font-family: "Hind", Helvetica, sans-serif;
    display: block;
    position: absolute;
    font-size: 16px;
    text-transform: uppercase;
    color: #b9607a;
    top: 0px;
  }
  p {
    margin-bottom: 0px;
  }
`;

const LinkInputBox = styled.input`
  display: inline-block;
  width: calc(100% - 52px);
  border: 1px solid #b9607a;
  padding: 1rem 1rem 1rem 2.3rem;
  box-sizing: border-box;
  :focus {
    outline: none;
  }
`;

const LinkLock = styled.div`
  position: absolute;
  top: 44px;
  padding-left: 10px;
  height: 47px;
  color: #b9607a;
`;

const LinkCopy = styled.button`
  display: inline-block;
  width: 52px;
  height: 47px;
  color: white;
  background-color: #b9607a;
  border: 1px solid #b9607a;
  border-left: none;
  :hover{
    cursor: pointer;
  }
`;

const LeftSide = props => {
  
  function truncate(string) {
    // regex
    var subString = string.substring(0,20);
    return subString + "...";
  }

  const linkBox = React.createRef();

  function handleClick(e) {
    console.log(e);
  };

  if (props.itemIsSelected) {
    return (
      <LeftWrapper>
        <ReviewCard>
          <FormTitle>What you're taking</FormTitle>
          <h1>{props.selectedItem[0].title}</h1>
          <ItemInfoField className={props.itemLinkLocked && "link-locked"}>
            <span>Link</span>
            <LinkInputBox
              className={props.itemLinkLocked && "link-locked"}
              value={props.itemLinkLocked ? (truncate(props.selectedItem[0].link)) : props.selectedItem[0].link}
            ></LinkInputBox>
            <LinkCopy onClick={handleClick} className={props.itemLinkLocked && "link-locked"}><FontAwesomeIcon icon={faClipboard}></FontAwesomeIcon></LinkCopy>
            <LinkLock className={props.itemLinkLocked ? "item-link link-locked" : "item-link"}>
              {props.itemLinkLocked ? (
                <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={faLockOpen}></FontAwesomeIcon>
              )}
            </LinkLock>
          </ItemInfoField>
          <ItemInfoField>
            <span>Item type</span>
            {props.selectedItem[0].type.charAt(0).toUpperCase() +
              props.selectedItem[0].type.slice(1)}
          </ItemInfoField>
          {props.selectedItem[0].author.length > 0 && (
            <ItemInfoField>
              <span>By</span>
              {props.selectedItem[0].author}
            </ItemInfoField>
          )}
          <ItemInfoField>
            <span>Shared by</span>
            {props.selectedItem[0].userId}
          </ItemInfoField>
          <ItemInfoField>
            <span>A note from {props.selectedItem[0].userId}</span>
            <p>{props.selectedItem[0].note}</p>
          </ItemInfoField>
        </ReviewCard>
      </LeftWrapper>
    );
  } else {
    return (
      <LeftWrapper>
        <h1>
          Take an item.
          <br /> Share an item.
        </h1>
        <p>
          Inspired by the{" "}
          <a href="https://littlefreelibrary.org/">Little Free Library</a>{" "}
          book-sharing movement, the Little Digital Library contains a small
          selection of links shared by others in your community. The one catch?
          You need to leave a link in exchange for taking one.
        </p>
        <p>
          So take a look around, and hopefully discover something new and
          exciting that a neighbor left for you.
        </p>
        <SearchBar
          type="search"
          placeholder="Search items"
          onChange={e => props.searchItems(e.target.value)}
        ></SearchBar>
        <Table src="../static/table.svg"></Table>
      </LeftWrapper>
    );
  }
};

export default LeftSide;
