// Parent Component
import React, { useState } from 'react';
import ChildComponent from './Child.js';

export default function ParentComponent() {
  const [dataFromChild, setDataFromChild] = useState('');

  function handleCallback(data) {
    setDataFromChild(data);
  }

  return (
    <div>
      <ChildComponent callback={handleCallback} />
      <p>Data received from child: {dataFromChild}</p>
    </div>
  );
}
