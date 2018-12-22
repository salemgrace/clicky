import React from 'react';
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

class App extends React.Component {
  state = {
    pictures,
  }

  pictureClicked = (pictureId) => {
    let updatedPictures = this.state.pictures.filter((picture) => picture.id /= pictureId)
    this.setState( {pictures: updatedPictures} );
  }
  render(){
    return(
    [<NavBar />,
    <Jumbotron />,
      <Wrapper>
        {this.state.pictures.map((picture) => {
          return (
            <PictureCard
            name={picture.name}
            image={picture.image}
            id={picture.id}
             />
          )
        })}
      </Wrapper>]
    )
  }
}

export default App;