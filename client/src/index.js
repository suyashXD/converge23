import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from './HomePage';
import EventsPage from './EventsPage';
import TeamPage from './TeamPage';

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path='/' element={<HomePage/>}/>
      <Route path="/EventsPage" element={<EventsPage/>} />
      <Route path="/TeamPage" element={<TeamPage/>} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
