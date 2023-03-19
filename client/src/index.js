import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from './HomePage';
import EventsPage from './EventsPage';
import TeamPage from './TeamPage';

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path='/' element={<HomePage location={window.location} />}/>
      <Route path="/EventsPage" element={<EventsPage location={window.location} />} />
      <Route path="/TeamPage" element={<TeamPage location={window.location} />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
