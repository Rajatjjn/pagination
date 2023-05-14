// Child Component
import React from 'react';

export default function ChildComponent({ callback }) {
  function handleClick() {
    callback('Hello from child!');
  }

  return (
    <button onClick={handleClick}>Pass Data to Parent</button>
  );
}