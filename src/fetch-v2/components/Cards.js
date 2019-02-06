/* global fetch */
import React, { Component } from "react";

export default class Cards extends Component {
  state = {
    isLoading: true,
    error: null,
    cards: null
  };

  componentDidMount() {
    fetch("/cards").then(response => {
      if (response.status === 200) {
        response.json().then(cards => {
          this.setState({ isLoading: false, cards });
        });
      } else {
        this.setState({
          isLoading: false,
          error: `Error ${response.status}`
        });
      }
    });
  }

  render() {
    const { isLoading, error, cards } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div style={{ color: "red" }}>{error}</div>;
    }
    console.log(cards);
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {cards &&
          cards.map(image => (
            <img key={image.id} src={image.url} width="180px" height="220px"/>
          ))}
      </div>
    );
  }
}
