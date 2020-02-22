import App, { Container } from "next/app";
import Head from "next/head";
import Page from "../comps/Page";
import nextId from "react-id-generator";
import "../static/style.css";

class MyApp extends App {
  constructor() {
    super();

    this.state = {
      items: [],
      searchField: "",
      itemIsSelected: false,
      itemSelected: {},
      itemSelectedId: 9999,
      itemLinkLocked: true,
      itemIsShared: false,
      inputAuthor: "",
      inputUserId: 0,
      inputId: 0,
      inputTitle: "",
      inputLink: "",
      inputType: "",
      inputNote: ""
    };
  }

  componentDidMount() {
    // fetch items from endpoint
    fetch("https://my-json-server.typicode.com/andrewuebe/test-db/posts")
      .then(response => response.json())
      .then(posts => this.setState({ items: posts }));
  }

  searchItems = inputStr => {
    this.setState({ searchField: inputStr });
  };

  changeItemInput = (val, inputKey) => {
    const myNewState = { ...this.state };
    myNewState[inputKey] = val;
    this.setState(myNewState);
  };

  selectItem = inputID => {
    var selectedItem = this.state.items.filter(item => {
      return item.id === inputID;
    });
    this.setState({ itemSelectedId: inputID });
    this.setState({ itemSelected: selectedItem });
    this.setState({ itemIsSelected: true });
  };

  validURL = str => {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  };

  isInputValid = () => {
    var linkInput = this.state.inputLink;
    if (this.validURL(linkInput)) {
      return true;
    } else {
      return false;
    }
  };

  itemSubmit = () => {
    if (this.isInputValid()) {
      const myNewState = { ...this.state };
      myNewState.itemIsShared = true;
      myNewState.itemLinkLocked = false;
      const newArray = this.state.items.slice();
      const newItem = {
        userId: this.state.inputUserId,
        id: nextId(),
        title: this.state.inputTitle,
        author: this.state.inputAuthor,
        link: this.state.inputLink,
        type: this.state.inputType,
        note: this.state.inputNote
      };
      newArray.push(newItem);
      myNewState.items = newArray;
      this.setState(myNewState);
    } else {
      console.log("invalid input, sorry!!");
    }
  };

  handleDelete = itemId => {
    const items = this.state.items.filter(item => item.id !== itemId);
    this.setState({ items: items });
  };

  returnToLibrary = () => {
    const selectedItemId = this.state.itemSelectedId;
    this.handleDelete(selectedItemId);
    const obj = {};
    this.setState({ itemSelected: obj });
    this.setState({ itemIsShared: false });
    this.setState({ itemIsSelected: false });
  };

  render() {
    // filter item list by searchField
    const { Component } = this.props;
    const { items, searchField } = this.state;
    const filteredItems = items.filter(item =>
      item.title.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <Container>
        <Head>
          <title>Little Digital Library</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Page>
          <Component
            items={filteredItems}
            searchItems={this.searchItems}
            itemIsSelected={this.state.itemIsSelected}
            itemLinkLocked={this.state.itemLinkLocked}
            selectItem={this.selectItem}
            itemSelected={this.state.itemSelected}
            changeItemInput={this.changeItemInput}
            itemSubmit={this.itemSubmit}
            itemIsShared={this.state.itemIsShared}
            returnToLibrary={this.returnToLibrary}
          />
        </Page>
      </Container>
    );
  }
}

export default MyApp;
