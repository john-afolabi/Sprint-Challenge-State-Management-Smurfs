import React, { useContext } from "react";
import smurfsFormContext from "../contexts/smurfsFormContext";
import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid white;
  color: white;
  padding: 5px 10px;
  font-size: 16px;
  width: 300px;
  margin-top: 10px;

  &:hover {
    background: white;
    color: #88ccff;
  }
`;

const Input = styled.input`
  margin: 5px auto;
  width: 300px;
  padding: 5px;
  border-radius: 3px;
`;

export default function SmurfsForm() {
  const { addSmurf, inputHandler, smurfsForm } = useContext(smurfsFormContext);
  const submitHandler = event => {
    event.preventDefault();
    addSmurf();
  };

  return (
    <form>
      <h3>Add New Smurf</h3>
      <Input
        name="name"
        type="text"
        value={smurfsForm.name}
        placeholder="Name"
        onChange={inputHandler}
      />
      <br />
      <Input
        name="age"
        type="number"
        value={smurfsForm.age}
        placeholder="Age"
        onChange={inputHandler}
      />
      <br />
      <Input
        name="height"
        type="text"
        value={smurfsForm.height}
        placeholder="Height"
        onChange={inputHandler}
      />
      <br />

      <Button onClick={submitHandler}>Submit</Button>
    </form>
  );
}
