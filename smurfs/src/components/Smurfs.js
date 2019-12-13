import React, { useContext, useEffect } from "react";
import smurfsContext from "../contexts/smurfsContext";
import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #88CCFF;
  color: #88CCFF;
  padding: 5px 10px;
  font-size: 16px;

  &:hover {
      background: #88CCFF;
      color: white;
  }
`;

const Card = styled.div`
    background: white;
    max-width: 300px;
    border-radius: 10px;
    padding: 10px;
    margin: 0 auto 10px;
    text-align: left;
`

export default function Smurfs() {
  const { smurfs, getSmurfs, deleteSmurf } = useContext(smurfsContext);

  useEffect(() => {
    getSmurfs();
  }, [getSmurfs]);

  return (
    <div>
      {smurfs.map(smurf => {
        return (
          <Card key={smurf.id}>
            <p><strong>Name:</strong> {smurf.name}</p>
            <p><strong>Age:</strong> {smurf.age}</p>
            <p><strong>Height:</strong> {smurf.height}</p>
            <Button onClick={event => deleteSmurf(smurf.id)}>
              Delete Smurf
            </Button>
          </Card>
        );
      })}
    </div>
  );
}
