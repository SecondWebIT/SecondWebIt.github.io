import React from "react";
import List from "./List";
import Todo from "./Todo";
import Item from "./Item";
import './index.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';

class App extends React.Component{
  render() {
  return (
    <Router>
      <div>
        <h4 className="linkk" ><Link to="/users">~~ USERS </Link></h4>
        <h4 className="linkk"><Link to="/todo-list">~~ TODO-LIST </Link></h4>
        <Switch>
          <Route path="/users" exact component={List} />
          <Route path="/todo-list" component={Todo} />
          <Route path="/users/:id" component={Item} />
        </Switch>
        
      </div>
    </Router>
  )};
}

export default App;
