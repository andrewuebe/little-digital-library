import React from "react";
import Item from "./Item";
import styled from "styled-components";

const Items = styled.div`
  box-sizing: border-box;
`;

const ItemList = props => {
  return (
    <Items>
      {props.items.map((item, index) => (
        <Item
          key={item.id}
          itemID={item.id}
          title={item.title}
          author={item.author}
          type={item.type}
          note={item.note}
          selectItem={props.selectItem}
        ></Item>
      ))}
    </Items>
  );
};

export default ItemList;
