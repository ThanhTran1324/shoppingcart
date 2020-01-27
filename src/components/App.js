import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "../history";
import ItemList from "./ItemList";
import ItemNew from "./ItemNew";
import ItemEdit from "./ItemEdit";
import ItemDelete from "./ItemDelete";
import ItemView from "./ItemView";
import Header from "./Header";

import CartView from "./CartView";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact component={ItemList}></Route>
              <Route path="/items/new" exact component={ItemNew}></Route>
              <Route path="/items/edit/:id" exact component={ItemEdit}></Route>
              <Route
                path="/items/delete/:id"
                exact
                component={ItemDelete}
              ></Route>
              <Route path="/items/view/:id" exact component={ItemView}></Route>

              <Route path="/cart/view" exact component={CartView}></Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
