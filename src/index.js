import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App subject="MongoDB" />
  </React.StrictMode>
);

// // Class Component
// class ClassComponent extends React.Component {
//   render() {
//     return (
//       <h1>My First Class Component</h1>
//     )
//   }
// }
// root.render(<ClassComponent />);

// // Function Component
// function FunctionComponent() {
//   return (
//     <h2>My First Function Component</h2>
//   );
// }
// root.render(<FunctionComponent />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
