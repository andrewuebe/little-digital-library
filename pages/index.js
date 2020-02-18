import React from "react";
import RightSide from "../comps/RightSide";
import LeftSide from "../comps/LeftSide";
import styled from "styled-components";

const Main = styled.div`
  display: block;
  max-width: 1220px;
  margin: 4rem auto;
`;

export default class Home extends React.Component {

  render() {
    return (
      <Main>
        <LeftSide
          searchItems={this.props.searchItems}
          itemIsSelected={this.props.itemIsSelected}
          itemLinkLocked={this.props.itemLinkLocked}
          selectedItem={this.props.itemSelected}
        />
        <RightSide
          items={this.props.items}
          itemIsSelected={this.props.itemIsSelected}
          selectItem={this.props.selectItem}
          changeItemInput={this.props.changeItemInput}
          itemSubmit={this.props.itemSubmit}
          itemIsShared={this.props.itemIsShared}
          selectedItem={this.props.itemSelected}
          returnToList={this.props.returnToList}
        />
      </Main>
    );
  }
}
