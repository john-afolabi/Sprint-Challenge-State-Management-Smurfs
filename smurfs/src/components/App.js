import React, { useState, useEffect } from "react";
import "./App.css";
import smurfsContext from "../contexts/smurfsContext";
import smurfsFormContext from "../contexts/smurfsFormContext";
import Smurfs from "./Smurfs";
import axios from "axios";

const initialState = {
  smurfs: [],
  formValues: {
    name: "",
    age: "",
    height: ""
  }
};

function App() {
  const [smurfs, setSmurfs] = useState(initialState.smurfs);
  const [smurfsForm, setSmurfsForm] = useState(initialState.formValues);

  const getSmurfs = () => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        setSmurfs(res.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      {/* <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div> */}
      <smurfsContext.Provider value={{smurfs, getSmurfs}}>
        <Smurfs />
      </smurfsContext.Provider>
    </div>
  );
}

export default App;
