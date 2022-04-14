import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './index.less'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import routes from './router/routers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <Link to="/">组件一</Link>
      <br />
      <Link to="/two">组件二</Link>

      {
          routes.map((value, key) => {
              if(value.exact) {
                  return <Route exact path={value.path} component={value.component} key={key} />
              }else {
                  return <Route path={value.path} component={value.component} key={key} />
              }
          })
      }
  </Router>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
