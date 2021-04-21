import React from "react";
import "./App.css";

class App extends React.Component {
  state = { message: "API호출 중.." }

  componentDidMount() {
    const url = "http://localhost:3000/";
    const headers = {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*"
    };
    fetch(url, {
      method: "GET",
      headers: headers
    })
    .then(res=>res.json())
    .then(json=>{
      console.log(json)
      this.setState({ message: "API호출 결과:" + json.data })
    })
    .catch(e=>{
      this.setState({ message: "API호출 실패" + e.toString() })
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <h2>{this.state.message}</h2>
      </div>
    );
  }
}

export default App;
