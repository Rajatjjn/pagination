import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ParentComponent from "./component/Parent.js"

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <App /> */}
    <ParentComponent/>
  </StrictMode>
);
