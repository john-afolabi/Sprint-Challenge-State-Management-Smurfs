import React, { useContext } from "react";
import smurfsFormContext from "../contexts/smurfsFormContext";

export default function SmurfsForm() {
  const { addSmurf, inputHandler, smurfsForm } = useContext(smurfsFormContext);
  const submitHandler = event => {
    event.preventDefault();
    addSmurf();
  };

  return (
    <form>
      <input
        name="name"
        type="text"
        value={smurfsForm.name}
        placeholder="Name"
        onChange={inputHandler}
      />
      <input
        name="age"
        type="number"
        value={smurfsForm.age}
        placeholder="Age"
        onChange={inputHandler}
      />
      <input
        name="height"
        type="text"
        value={smurfsForm.height}
        placeholder="Height"
        onChange={inputHandler}
      />

      <button onClick={submitHandler}>Submit</button>
    </form>
  );
}
