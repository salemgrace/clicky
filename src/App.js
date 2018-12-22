import React, { Component } from 'react';
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import pictures from "./pictures.json";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import './App.css';


// var random = 0;
// for (var i =0; i < pictures.length; i++) {
//   return random = Math.floor(Math.random()*pictures.length)
// }

class App extends Component {
  state = {
    pictures
  }

  pictureClicked = id => {
    const pictures = this.state.pictures.filter(picture => picture.id !== id);
    this.setState({ pictures });
    console.log(pictures);
  }
  render(){
    return(
    <div>
    <NavBar />
    <Jumbotron />
      <Wrapper>
        {this.state.pictures.map(picture => (
            <PictureCard
            pictureClicked={this.pictureClicked}
            name={picture.name}
            image={picture.image}
            id={picture.id}
             />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;