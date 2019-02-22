import React, { Component } from "react";
import Loader from "../Loader";
import Wrapper from "../Wrapper";
import Api from "../../utils/Api";
import DogCard from "./DogCard";
import Swipe from "./Swipe";
import Match from "./Match";

class Discover extends Component {
  state = {
    result: {},
    isMatch: false,
    load: true
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
    this.randomDog();
  };

  revert = () => {
    setTimeout(() => {
      this.randomDog();
    }, 3000);
  };

  render() {
    return (
      <div className='oneHundredHeight'>
        {this.state.load ? (
          <Loader />
        ) : (
          <Wrapper>
            <div>
              <DogCard image={this.state.result} />
              {this.state.isMatch ? (
                <Match />
              ) : (
                <Swipe like={this.like} dislike={this.dislike} />
              )}
            </div>
          </Wrapper>
        )}
      </div>
    );
  }
}

export default Discover;
