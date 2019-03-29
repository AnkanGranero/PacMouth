import React, { Component } from "react";

import hot1 from "./images/hotdog1.jpg";
import hot2 from "./images/hotdog2.jpg";
import hot3 from "./images/hotdog3.jpg";
import hot4 from "./images/hotdog4.jpg";

import pacMouth from "./images/pacmouth.jpg";
import pacMouth2 from "./images/pacmouth2.jpg";

import "./App.css";

function createArray(len, value) {
  let arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(value);
  }
  return arr;
}
function createWaveArray(len, value) {
  let arr = [];
  let j = 0;
  for (let i = 0; i < len; i++) {
    arr.push(value + j++);
    if (j > 3) {
      j = 0;
    }
  }
  return arr;
}

const pictures = [hot1, hot2, hot3, hot4];

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      arrayOfIndex: createArray(42, 0),
      direction: true
    };
  }
  handleOutArrayOfIndex() {
    let sum = [];
    for (let i = 0; i < 42; i++) {
      sum.push(pictures[0]);
    }
    this.setState({ arrayOfIndex: sum });
  }

  componentDidMount() {
    window.addEventListener("keypress", this.handleChangeDirection.bind(this));
  }

  handleDirection(index) {
    this.state.direction
      ? this.changeRenderedPictures(index)
      : this.changeRenderedPicturesBackwards(index);
  }

  async changeRenderedPicturesBackwards(index) {
    const { arrayOfIndex } = this.state;
    for (let i = index; i > -1; i--) {
      await new Promise(resolve => {
        this.setState(
          {
            arrayOfIndex: [
              ...this.state.arrayOfIndex.slice(0, i),
              (this.state.arrayOfIndex[i] + 1) % pictures.length,
              ...this.state.arrayOfIndex.slice(i + 1)
            ]
          },
          resolve
        );
      });

      await delay(100);
    }
  }

  async changeRenderedPictures(index) {
    const { arrayOfIndex } = this.state;
    for (let i = index; i < arrayOfIndex.length; i++) {
      await new Promise(resolve => {
        this.setState(
          {
            arrayOfIndex: [
              ...this.state.arrayOfIndex.slice(0, i),
              (this.state.arrayOfIndex[i] + 1) % pictures.length,
              ...this.state.arrayOfIndex.slice(i + 1)
            ]
          },
          resolve
        );
      });

      await delay(100);
    }
  }

  handleChangeDirection(event) {
    switch (event.key) {
      case "d":
        this.setState({
          direction: !this.state.direction
        });
    }
  }

  render() {
    console.log(this.state.direction);
    const wrapperStyle = {
      display: "flex",
      flexWrap: "wrap",
      alignContent: "flex-start",
      background: "red",
      alignItems: "stretch"
      /* justifyContent: "space-evenly" */
    };
    const imageStyle = {
      height: "18vh",
      margin: "5px",
      padding: "5px",
      border: "10px solid white   "
    };
    const wrapperHotdogStyle = {
      display: "flex",
      margin: "0px",
      border: "1px solid black ",
      flexWrap: "wrap"
    };
    const buttonStyle = {
      height: "25vh",
      width: "4px"
    };
    const pacStyle = {
      display: "flex",
      height: "30vh",
      alignContent: "center",
      marginLeft: "auto",
      marginRight: "auto",
      backgroundColor: "red",
      container: "red"
    };
    const outerWrapper = {
      backgroundColor: "red"
    };

    const pacDirection = this.state.direction ? pacMouth : pacMouth2;

    const images = this.state.arrayOfIndex.map((number, index) => (
      <div style={wrapperHotdogStyle}>
        <img
          src={pictures[number]}
          onClick={this.handleDirection.bind(this, index)}
          alt=""
          style={imageStyle}
        />
      </div>
    ));

    console.log(this.state.arrayOfIndex);

    return (
      <div
        style={outerWrapper}
        onKeyDown={this.handleChangeDirection.bind(this)}
      >
        <img src={pacDirection} style={pacStyle} />
        <div
          style={wrapperStyle}
          onKeyDown={this.handleChangeDirection.bind(this)}
        >
          {images}
        </div>
      </div>
    );
  }
}

export default App;
