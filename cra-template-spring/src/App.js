import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ComponentOne from "./pages/ComponentOne";
import ComponentTwo from "./pages/ComponentTwo";
import routes from '../src/router/routers'
import Redirect from "../src/components/Redirect";
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
  return (
      <div>
        <Router>
          <Routes>
            {/* <Route exact path="/" element={<Redirect to="/test" />} /> */}
            <Route path="/" element={<ComponentOne />} /> 
            <Route path="/test" element={<ComponentTwo />} />
            <Route path="/mat" element={<ComponentOne />} />
          </Routes>
        </Router>
      </div>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

