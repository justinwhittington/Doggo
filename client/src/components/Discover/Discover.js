import React, { Component } from "react";
import Loader from "../Loader";
import Wrapper from "../Wrapper";
import Api from "../../utils/Api";
import DogCard from "./DogCard";
import Swipe from "./Swipe";
import Match from "./Match";
// import Deck from "./DogCard/test";

class Discover extends Component {
  state = {
    result: {},
    isMatch: false,
    load: true,
    liked: null,
    swipeDirection: null
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

  handleClick() {
    console.log("clicked");
  }

  randomDog = () => {
    this.setState({
      isMatch: false,
      liked: null,
      swipeDirection: null
    });
    Api.random()
      .then(res => {
        this.setState({ result: res.data.message });
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  like = () => {
    // Determines whether you get a match by picking a random number
    let yourChance = Math.floor(Math.random() * 5) + 1;
    // this.setState({ liked: true, swipeDirection: "leftSwipe" });
    if (yourChance === 1) {
      this.setState({
        isMatch: true
      });
      this.revert();
    } else {
      //this.randomDog();
    }
  };

  dislike = () => {
    this.setState({ liked: false, swipeDirection: "rightSwipe" });
    this.randomDog();
  };

  revert = () => {
    setTimeout(() => {
      this.randomDog();
    }, 3000);
  };

  render() {
    console.log(this.state.result);
    return (
      <div className="oneHundredHeight">
        {this.state.load ? (
          <Loader />
        ) : (
          <div className="oneHundredHeight">
            <Wrapper className="oneHundredHeight">
              <div className="oneHundredHeight">
                <DogCard image={this.state.result} liked={this.state.liked} id={this.state.swipeDirection}/>
                {/* <Deck 
                images={this.state.result}/> This is the react-spring test */}
                {this.state.isMatch ? (
                  <Match />
                ) : (
                  <Swipe
                    like={this.like}
                    dislike={this.dislike}
                    handleClick={this.handleClick}
                  />
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
