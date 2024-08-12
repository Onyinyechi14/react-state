import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person:{
        fullName: "Onyinyechi Julius-Okorie",
        bio: "I am a software developer and a passionate learner",
        imgSrc: "https://res.cloudinary.com/onyinyechi/image/upload/v1666847337/avatar_i9264v.jpg",
        profession: "Full Stack Developer",
      },
      shows: false,
      mountedTime: 0,
    };
}

componentDidMount () {
  this.interval = setInterval(() => {
    this.setState({ mountedTime: this.state.mountedTime + 1});
  }, 1000);
}

componentWillUnmount() {
  clearInterval(this.interval);
}

toggleShow = () => {
  this.setState({shows:!this.state.shows});
};

render() {
  return (
    <div>
      <h1>Person profile</h1>
      <button onclick={this.toggleShow}>
        {this.state.shows ? "Hide Profile" : "Show Profile"}
      </button>

      {this.state.shows && (
        <div>
          <img src={this.state.person.imgSrc} alt="Profile" />
          <h2>{this.state.person.fullName}</h2>
          <p>{this.state.person.bio}</p>
          <h3>{this.state.person.profession}</h3>
        </div>
      )}

      <p>Time since component mounted: {this.state.mountedTime} seconds</p>
    </div>
  );
}
}
export default App