import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: "",
      tasks: [],
    };
  }

  handleTaskChange = (event) => {
    this.setState({
      newTask: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      newTask: "",
    });
    this.state.tasks.push(`${this.state.newTask}`);
    console.log(this.state.tasks);
  };

  render() {
    return (
      <div className="App">
        <h1 className="title">
          Lista de tareas{" "}
          <span aria-label="emoji" role="img">
            🔥
          </span>
        </h1>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.newTask}
            onChange={this.handleTaskChange}
            placeholder="Aguante APV"
            type="text"
            className="new-task"
          />
        </form>
        <h2>{this.state.newTask}</h2>
        <div className="tasklist">
          {this.state.tasks.map((task) => (
            <div key={Math.random()} className="task-container">
              <h3 className="task">{task}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
