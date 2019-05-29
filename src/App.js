import React, { Component } from "react";
import HeroCard from "./components/HeroCard";
import Wrapper from "./components/Wrapper/";
import Footer from "./components/Footer";
import Title from "./components/Title";
import Creatures from "./Creatures.json";
import Header from "./components/Header";
import Row from "./Row";
import './App.css';

class App extends Component {
  state = {
    Creatures,
    "start": "Click an image to start game but only click the image once",
    "message": "Score ",
    "score": 0,
    "creaturesClicked": [],
    "Goal": "Goal: ",
    "HighScore": 20,
    "correctIncorrect":""
  };

  shuffle = id => {
    let creaturesClicked = this.state.creaturesClicked;

    if (creaturesClicked.includes(id)) {
      this.setState({
        creaturesClicked:[],
        correctIncorrect: " Wrong!! You can try Sears",
        score: 0
      }) 
      return
    }else{
      creaturesClicked.push(id);
    }

    if (creaturesClicked.length === this.state.Creatures.length) {
      this.setState({
        score: 0,
        correctIncorrect: "  You did it!! Congrats,Play again?  ",
        creaturesClicked: []
      });
      return
    }
    this.setState({Creatures, creaturesClicked, score: creaturesClicked.length, correctIncorrect: ""});

    //setting up shuffle
    var i = 0, j = 0, temp = null
    for (i = Creatures.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i +1))
      temp = Creatures[i]
      Creatures[i] = Creatures[j]
      Creatures[j] = temp
    };
  };

    
  render() {
    return (
      <div className="App">
      <Wrapper>
        <Title>Heroes Might and Magic III
        </Title>
        <Row>
        <Header>
        {this.state.start}
        {<br></br>}
        {this.state.message}
        {this.state.score}
        {this.state.correctIncorrect}
        {<br></br>}
        {this.state.Goal}
        {this.state.HighScore}
        </Header>
        {this.state.Creatures.map(Creature => (
        <HeroCard
            shuffle={this.shuffle}
            id={Creature.id}
            image={Creature.image}/>    
            ))}
          </Row>
      <Footer>text={this.state.footerText}</Footer> 
      </Wrapper>
      </div>
    );
  }
}

export default App;


