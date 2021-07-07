import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AccountInfo from "./components/AccountInfo";

function App() {
  const apikey = "zpfFvWBRqut0E0FJoQwGwxzReN4SYgMJ";
  //const facets ="100";
  //const query = "";
  const url = `https://api.shodan.io/api-info?key=${apikey}`;
  //const url = `https://api.shodan.io/shodan/host/search?key=${apikey}&query=${query}&facets=${facets}`;
  return (
    <div className="App">
      <header className="App-header"> </header> <AccountInfo />
    </div>
  );
}

export default App;
