import React, { Component } from "react";
import Loader from "../Loader";
import Wrapper from "../Wrapper";
import Api from "../../utils/Api";
import DogCard from "./DogCard";
import Swipe from "./Swipe";
import Match from "./Match";
import Deck from './DogCard/test';

class Discover extends Component {
  state = {
    result: {},
    isMatch: false,
    load: true, 
    liked: null
  };

  componentDidMount() {
    if (this.state.load) {
      setTimeout(
        () =>
          this.setState(() => {
            return {
              load: false
            };
          }),
        1000 // Adjusts Loader lenght
      );
    }

    this.randomDog();
  }

  randomDog = () => {
    this.setState({
      isMatch: false
    });
    Api.random()
      .then(res => {
        this.setState({ result: res.data.message });
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  like = () => {
    let yourChance = Math.floor(Math.random() * 5) + 1;

    this.setState({liked: true});

    console.log(yourChance);
    if (yourChance === 1) {
      this.setState({
        isMatch: true
      });
      this.revert();
    } else {
      this.randomDog();
    }
  };

  dislike = () => {

    this.setState({liked: false});
    this.randomDog();
  };

  revert = () => {
    setTimeout(() => {
      this.randomDog();
    }, 3000);
  };

  render() {
    return (
      <div className="oneHundredHeight">
        {this.state.load ? (
          <Loader />
        ) : (
          <div className="oneHundredHeight">
            <Wrapper className="oneHundredHeight">
              <div className="oneHundredHeight">
                {/* <DogCard image={this.state.result} liked={this.state.liked}/> */}
                <Deck 
                image={this.state.result}/>
                {this.state.isMatch ? (
                  <Match />
                ) : (
                  <Swipe like={this.like} dislike={this.dislike}  />
                )}
              </div>
            </Wrapper>
          </div>
        )}
      </div>
    );
  }
}

export default Discover;
