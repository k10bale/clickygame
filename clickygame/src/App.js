import React, { Component } from "react";
import Image from "./components/Image";
import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import cards from "./components/cards.json";
import Footer from "./components/Footer";
import aussie from "./images/aussie.png";
import collie from "./images/bearded-collie.png";
import boxer from "./images/boxer.jpg";
import chihuaha from "./images/chihuaha.png";
import corgi from "./images/corgi.png";
import cutie from "./images/cute-dog.png";
import german from "./images/german-shep.png";
import golden from "./images/golden.png";
import hound from "./images/hound-dog.png";
import jack from "./images/jack-russell.png";
import pittie from "./images/pittie.png";
// import shiba from "./images/shiba-inu.jpg";
import lab from "./images/yellow-lab.png";

import './App.css';


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    picked: [],
    correct: 0,
    topscore: 0,
    message: 'Click an image to begin'
  };

  shuffleArray = (array) => {
    let imgArray = cards;
    for (let i = imgArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
    }
    return imgArray
  }

  pickImg = (name) => {
    console.log("Clicked!!");
    let picked = this.state.picked;
    
    if (picked.indexOf(name) === -1) {
      this.setState({
        picked: picked.concat(name),
        correct: this.state.correct + 1,
        topscore: this.state.correct + 1 > this.state.topscore ? this.state.correct + 1 : this.state.topscore,
        message: "Correct: Good choice!" 
      })
      this.shuffleArray();
    }
    else {
      this.setState({
        message: "Incorrect: Play again?",
        correct: 0,
        picked: []
      })
    }
  }

  imgSwitch = (name) => {
    switch (name) {
      case "aussie":
        return `${aussie}`
      case "collie":
        return `${collie}`
      case "boxer":
        return `${boxer}`
      case "chihuaha":
        return `${chihuaha}`
      case "corgi":
        return `${corgi}`
      case "cute-dog":
        return `${cutie}`
      case "german-shep":
        return `${german}`
      case "golden":
        return `${golden}`
      case "hound":
        return `${hound}`
      case "jack-russell":
        return `${jack}`
      case "pittie":
        return `${pittie}`
      case "yellow-lab":
        return `${lab}`
      default:
        return `${pittie}`
    }
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
    
      render() {
        return (
          <div>
            <Navbar correct={this.state.correct} topscore={this.state.topscore} message={this.state.message}/>
            <Header />
            <Main>
              {this.shuffleArray(cards).map(image => (
                <Image src={this.imgSwitch(image.name)} name={image.name} key={image.name} pickImg={this.pickImg}  />
              ))}
            </Main>
            <Footer />
          </div>
        );
      }
    }

export default App;
