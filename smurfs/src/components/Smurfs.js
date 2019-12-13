import React, { useContext, useEffect } from "react";
import smurfsContext from "../contexts/smurfsContext";


export default function Smurfs() {
  const { smurfs, getSmurfs } = useContext(smurfsContext);

  useEffect(() => {
      getSmurfs()
  }, [])

  return (
    <div>
      {smurfs.map(smurf => {
        return (
          <div>
            <p>Name: {smurf.name}</p>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
          </div>
        );
      })}
    </div>
  );
}
