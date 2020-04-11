import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "../history";
import ItemList from "./ItemList";
import ItemNew from "./ItemNew";
import ItemEdit from "./ItemEdit";
import ItemDelete from "./ItemDelete";
import ItemView from "./ItemView";
import Header from "./Header";
import Auth from "./Auth";
import CartView from "./CartView";
import ForGotPassword from "./ForGotPassword";

import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";
class App extends React.Component {
  render() {
    return (
      <div className="ui  container fluid">
        <NotificationContainer />
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route path="/shoppingcart/" exact component={ItemList}></Route>
              <Route
                path="/shoppingcart/items/new"
                exact
                component={ItemNew}
              ></Route>
              <Route
                path="/shoppingcart/items/edit/:id"
                exact
                component={ItemEdit}
              ></Route>
              <Route
                path="/shoppingcart/items/delete/:id"
                exact
                component={ItemDelete}
              ></Route>
              <Route
                path="/shoppingcart/item/view/:id"
                exact
                component={ItemView}
              ></Route>

              <Route
                path="/shoppingcart/cart/view"
                exact
                component={CartView}
              ></Route>
              <Route path="/shoppingcart/login" exact component={Auth}></Route>
              <Route
                path="/shoppingcart/forgotpassword"
                exact
                component={ForGotPassword}
              ></Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
