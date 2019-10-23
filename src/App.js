import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './component/login';
import Register from './component/register';
import InputDetails from './component/inputDetails';
import PostList from './component/PostList';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {

    return (
      <div className="App">
        <Router>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/input" component={InputDetails} />
          <Route path="/get" component={PostList} />
        </Router>
      </div>
    );

  }

}


