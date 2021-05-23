import { Component } from "react";
import SettingForm from "./setting-form";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SettingForm></SettingForm>
      </div>
    );
  }
}

export default App;
