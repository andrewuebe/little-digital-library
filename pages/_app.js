import App, { Container } from "next/app";
import Head from "next/head";
import Page from "../comps/Page";
import "../static/fonts.css";

class MyApp extends App {
  constructor() {
    super();

    this.state = {
      items: [],
      searchField: "",
      itemIsSelected: false,
      itemSelected: {},
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
    fetch("https://my-json-server.typicode.com/andrewuebe/test-db/posts")
      .then(response => response.json())
      .then(posts => this.setState({ items: posts }));
  }

  searchItems = inputStr => {
    this.setState({ searchField: inputStr });
  };

  changeItemInput = (val, inputKey) => {
    const myNewState = { ...this.state }
    myNewState[inputKey] = val;
    this.setState(myNewState);
  };

  selectItem = inputID => {
    var selectedItem = this.state.items.filter(item => {
      return item.id === inputID;
    });
    this.setState({ itemSelected: selectedItem });
    this.setState({ itemIsSelected: true });
  };

  itemSubmit = () => {
    const myNewState = { ...this.state }
    myNewState.itemIsShared = true;
    myNewState.itemLinkLocked = false;
    this.setState(myNewState);
  }

  render() {
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
            itemIsShared={this.itemIsShared}
          />
        </Page>
      </Container>
    );
  }
}

export default MyApp;
