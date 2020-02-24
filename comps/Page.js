import React, { Component } from "react";
import Header from "./Header";
import styled from "styled-components";

const PageContainer = styled.div`
  display: block;
  box-sizing: border-box;
  width: 100%;
`;

class Page extends Component {
  render() {
    return (
      <div>
        <Header closeToLibrary={this.props.closeToLibrary}/>
        <PageContainer>{this.props.children}</PageContainer>
      </div>
    );
  }
}

export default Page;
