import React from "react";
import ItemList from "../comps/ItemList";
import styled from "styled-components";
import TextInput from "../comps/TextInput";

const RightWrapper = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 50%;
  vertical-align: top;
  padding: 0px 2rem;
  @media screen and (max-width: 850px) {
    display: block;
    width: 100%;
  }
`;

const ItemSubmitForm = styled.form`
  box-sizing: border-box;
  display: block;
  flex-wrap: wrap;
  position: relative;
  align-items: flex-start;
  align-content: flex-start;
  width: 100%;
  margin-bottom: 1rem;
  padding: 1rem;
`;

const FormTitle = styled.div`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 2rem;
`;

const ItemSubmitButton = styled.button`
  padding: 1rem 2rem;
  position: relative;
  display: block;
  background: #b9607a;
  border: 1px solid #53443b;
  color: white;
  text-transform: uppercase;
  font-family: "Montserrat", Helvetica, sans-serif;
  font-size: 16px;
  :focus {
    outline: none;
  }
  ::before {
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
  :hover {
    cursor: pointer;
  }
  :hover::before {
    transition: 0.1s ease;
    top: 4px;
    left: 4px;
  }
`;

const RightSide = props => {
  
  function handleItemSubmit(e) {
    e.preventDefault();
    props.itemSubmit();
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.returnToLibrary();
  }

  if (props.itemIsSelected) {
    if (props.itemIsShared) {
      return (
        <RightWrapper>
          <h1>Thanks for sharing!</h1>
          <p>
            Now you can see what{" "}
            <a href={props.selectedItem[0].link}>
              {props.selectedItem[0].title}
            </a>{" "}
            is all about!
          </p>
          <ItemSubmitButton onClick={handleSubmit}>Return to library</ItemSubmitButton>
        </RightWrapper>
      );
    } else {
      return (
        <RightWrapper>
          <ItemSubmitForm>
            <FormTitle>What you're sharing</FormTitle>
            <TextInput changeItemInput={props.changeItemInput}></TextInput>
            <ItemSubmitButton onClick={handleItemSubmit}>
              Share item
            </ItemSubmitButton>
          </ItemSubmitForm>
        </RightWrapper>
      );
    }
  } else {
    return (
      <RightWrapper>
        <ItemList items={props.items} selectItem={props.selectItem} />
      </RightWrapper>
    );
  }
};

export default RightSide;
