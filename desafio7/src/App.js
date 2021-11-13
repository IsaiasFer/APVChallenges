import logo from "./logo.svg";
import "./App.css";
import React from 'react'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      newTask: "",
   }
  }
  
  handleTaskChange = (event) => {
      this.setState({
        newTask: event.target.value,
      });
    };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="container">
            <h1 className="title">
              Hello world{" "}
              <span aria-label="emoji" role="img">
                🔥
              </span>
            </h1>
            <input
              onChange={this.handleTaskChange}
              placeholder="Aguante APV"
              type="text"
              className="new-task"
            />
            <h2>{this.state.newTask}</h2>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
