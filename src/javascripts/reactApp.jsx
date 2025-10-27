import { createRoot } from 'react-dom/client';
import * as React from 'react';
import './Aleart.tsx'
import Aleart from './Aleart.tsx';

const App = (props) => {
  return (
    <div>
      <h1>Hello, ReactApp!!!</h1>
      <Aleart message='This is an alert message from Aleart component.' />
    </div>
  );
};

const reactRoot = document.getElementById('react-root');
if (reactRoot) {
  const root = createRoot(reactRoot);
  root.render(<App />);
} else {
  console.log("No react-root element found.");
}
