import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from './HomePage';
import EventsPage from './EventsPage';

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path='/' element={<HomePage/>}/>
      <Route path="/EventsPage" element={<EventsPage/>} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
