import React, { useState } from "react";
import "./App.css";
import smurfsContext from "../contexts/smurfsContext";
import smurfsFormContext from "../contexts/smurfsFormContext";
import Smurfs from "./Smurfs";
import axios from "axios";
import SmurfsForm from "./SmurfsForm";

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

  const deleteSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        setSmurfs(res.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  const smurfFormChange = (target, value) => {
    setSmurfsForm({
      ...smurfsForm,
      [target]: value
    });
  };

  const inputHandler = event => {
    smurfFormChange(event.target.name, event.target.value);
  };

  const addSmurf = () => {
    axios
      .post("http://localhost:3333/smurfs", smurfsForm)
      .then(res => {
        setSmurfsForm(initialState.formValues);
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
      <smurfsContext.Provider value={{ smurfs, getSmurfs, deleteSmurf }}>
        <Smurfs />
      </smurfsContext.Provider>
      <smurfsFormContext.Provider
        value={{ inputHandler, addSmurf, smurfsForm }}
      >
        <SmurfsForm />
      </smurfsFormContext.Provider>
    </div>
  );
}

export default App;
