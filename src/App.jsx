import React, { Component } from "react";
class App extends Component {
  state = {
    person: {
      fullName: "Karim Mostafa Benzema",
      bio: "Karim Mostafa Benzema (born 19 December 1987) is a French professional footballer who plays as a striker for and captains Saudi Pro League club Al-Ittihad. ",

      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Karim_Benzema_wearing_Real_Madrid_home_kit_2021-2022.jpg/800px-Karim_Benzema_wearing_Real_Madrid_home_kit_2021-2022.jpg",

      profession: "Footballer",
    },

    shows: false,
    timeInterval: 0,
  };

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeInterval: prevState.timeInterval + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {this.state.shows && (
          <div>
            <h2>{this.state.person.fullName}</h2>
            <p>{this.state.person.bio}</p>
            <img
              src={this.state.person.imgSrc}
              alt="Profile"
              style={{ width: "500px", height: "500px", borderRadius: "10px" }}
            />
            <p>{this.state.person.profession}</p>
          </div>
        )}
        <p>Time since mount: {this.state.timeInterval} seconds</p>
      </div>
    );
  }
}

export default App;
