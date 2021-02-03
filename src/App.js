// import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  // state = {
  //   age: 21,
  // };
  // onAgeUp = () => {
  //   this.setState({
  //     ...this.state,
  //     age: ++this.state.age,
  //   });
  // };
  // onAgeDown = () => {
  //   this.setState({
  //     ...this.state,
  //     age: --this.state.age,
  //   });
  //};

  render() {
    return (
      <div className="App">
        <div>
          Age: <span>{this.props.state.age}</span>
        </div>
        <button onClick={this.props.onAgeUp}>Age Up</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
  };
};

const mapDispachToProps = (dispach) => {
  return {
    onAgeUp: () => dispach({ type: "AGE_UP" }),
    onAgeDown: () => dispach({ type: "AGE_DOWN" }),
  };
};

export default connect(mapStateToProps, mapDispachToProps)(App);
