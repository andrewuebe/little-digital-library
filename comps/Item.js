import React from "react";
import styled from "styled-components";

const ItemCard = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  align-items: flex-start;
  align-content: flex-start;
  width: 100%;
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid #53443b;
  background-color: #f9ebef;
  ::after{
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
  h1 {
    width: 100%;
  }
  :hover {
    cursor: pointer;
    background-color: #fad3de;
    transition: 0.1s ease;
  }
  :hover::after {
    top: 4px;
    left: 4px;
    transition: 0.1s ease;
  }
`;

const ItemType = styled.div`
  font-weight: 300;
  width: 100%;
  text-transform: uppercase;
  color: #b9607a;
  margin-bottom: 0px;
`;

const ItemTitle = styled.h1`
  margin-bottom: 0px;
`;

const ItemAuthor = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  font-size: 14px;
  color: #afa49c;
`;

function truncate(string, charLimit) {
  // returns as many whole words under a max character limit

  if (string.length > charLimit) {
    // regex
    var subString = string.replace(/^(.{18}[^\s]*).*/, "$1");
    return subString + "...";
  } else {
    return string;
  }
}

const Item = props => {

  function handleClick(e){
    props.selectItem(props.itemID)
  }

  return (
    <ItemCard onClick={handleClick}>
      <ItemType>{props.type}</ItemType>
      <ItemTitle title={props.title}>{truncate(props.title, 20)}</ItemTitle>
      <ItemAuthor>{props.author}</ItemAuthor>
    </ItemCard>
  );
};

export default Item;
