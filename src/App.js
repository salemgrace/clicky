import React, { Component } from 'react';
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import pictures from "./pictures.json";
import './App.css';


// var random = 0;
// for (var i =0; i < pictures.length; i++) {
//   return random = Math.floor(Math.random()*pictures.length)
// }

class App extends Component {
  state = {
    score: 0,
    topscore: 0,
    pictures
  };

  pictureClicked = id => {
    const pictures = this.state.pictures.filter(picture => picture.id !== id);
    this.setState({ pictures, score: this.state.score + 1 });
    console.log("updated state post click");
  };

  render() {
    return (
    <div>
    <NavBar 
      score={this.score}
      topscore={this.topscore}
    />
    <Jumbotron />
    <Wrapper>
        {this.state.pictures.map(picture => (
            <PictureCard
              pictureClicked={this.pictureClicked}  
              id={picture.id}
              name={picture.name}
              image={picture.image}
            />
        ))}
        </Wrapper>
      <Footer />
      </div>
    );
  }
}

export default App;