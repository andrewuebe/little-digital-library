import React, { Component } from "react";
import styled from "styled-components";

const InputFieldArea = styled.div`
  width: 100%;
  padding-top: 2rem;
  margin-bottom: 1rem;
  position: relative;
  span {
    font-family: "Hind", Helvetica, sans-serif;
    display: block;
    position: absolute;
    font-size: 16px;
    text-transform: uppercase;
    color: #b9607a;
    top: 10px;
  }
`;

const InputField = styled.input`
  width: 100%;
  height: 45px;
  position: relative;
  transition: 0.3s all;
  background: none;
  box-shadow: none;
  border: none;
  border-bottom: 3px solid #afa49c;
  font-family: "Montserrat", Helvetica, sans-serif;
  color: #53443b;
  font-size: 40px;
  font-weight: 300;
  ::placeholder {
      color: #afa49c;
  }
  :hover {
      border-bottom: 3px solid #53443b;
  }
  :focus {
    outline: none;
  }
  :hover::placeholder {
      outline: none;
  }
  :focus::placeholder {
      outline: none;
      border-bottom: #53443b;
  }
`;

const SelectField = styled.select`
  font-family: "Montserrat", Arial, Helvetica, sans-serif, sans-serif;
  font-weight: 300;
  display: block;
  width: 100%;
  height: 48px;
  padding: 0px;
  border: none;
  border-bottom: 3px solid #afa49c;
  font-family: "Montserrat", Helvetica, sans-serif;
  background: none;
  font-size: 40px;
  color: #53443b;
  :invalid {
    color: #afa49c;
  }
  :hover {
    border-bottom: 3px solid #53443b;
  }
`;

const TextAreaField = styled.textarea`
  width: 100%;
  height: 96px;
  margin-top: 17px;
  background: none;
  border: 3px solid #afa49c;
  padding: 1rem;
  font-family: "Hind", Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: #53443b;
  box-sizing: border-box;
  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
  :hover {
    border: 3px solid #53443b;
  }
  :focus {
    border: 3px solid #53443b;
    outline: none;
  }
`;

const TextInput = props => {
  function handleChange(e) {
    props.changeItemInput(e.target.value, e.target.name);
  }
  return (
    <div>
      <InputField
        type="text"
        className="input-title"
        placeholder="Item name"
        name="inputTitle"
        onChange={handleChange}
      ></InputField>
      <InputFieldArea>
        <span>Link</span>
        <InputField
          type="text"
          placeholder="Paste link here"
          name="inputLink"
          onChange={handleChange}
        ></InputField>
      </InputFieldArea>
      <InputFieldArea>
        <span>Item type</span>
        <SelectField
          required
          defaultValue=""
          name="inputType"
          onChange={handleChange}
        >
          <option value="" disabled hidden>
            Select Type
          </option>
          <option value="website">Website</option>
          <option value="book">Book</option>
          <option value="video">Video</option>
          <option value="movie">Movie</option>
          <option value="other">Other</option>
        </SelectField>
      </InputFieldArea>
      <InputFieldArea>
        <span>By</span>
        <InputField
          type="text"
          placeholder="Who made this?"
          name="inputAuthor"
          onChange={handleChange}
        ></InputField>
      </InputFieldArea>
      <InputFieldArea>
        <span>Who are you?</span>
        <InputField
          type="text"
          placeholder="Name"
          name="inputUserId"
          onChange={handleChange}
        ></InputField>
      </InputFieldArea>
      <InputFieldArea>
        <span>Leave a note about this item</span>
        <TextAreaField
          type="text"
          placeholder='Ex: "This thing always brings a smile to my face because..."'
          name="inputNote"
          onChange={handleChange}
        ></TextAreaField>
      </InputFieldArea>
    </div>
  );
};

export default TextInput;
