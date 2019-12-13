import React from "react";

export default function SmurfsForm() {
  return (
    <form>
      <input 
        name="name" 
        type="text" 
        // value={} 
        placeholder="Name" 
        // onChange={}
      />
      <input 
        name="age" 
        type="number" 
        // value={} 
        placeholder="Age" 
        // onChange={}
      />
      <input
        name="height"
        type="text"
        // value={}
        placeholder="Height"
        // onChange={}
      />

      <button 
        // onSubmit={}
      >Submit
      </button>
    </form>
  );
}
