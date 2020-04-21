import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

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
import LoginPrompt from "./LoginPrompt";
import Error404Page from "./Error404Page";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";
class App extends React.Component {
  render() {
    return (
      <div className="ui  container fluid">
        <NotificationContainer />
        <HashRouter history={history}>
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
              <Route path="/item/view/:id" exact component={ItemView}></Route>
              <Route path="/loginprompt" exact component={LoginPrompt}></Route>
              <Route path="/cart/view" exact component={CartView}></Route>
              <Route path="/login" exact component={Auth}></Route>
              <Route
                path="/forgotpassword"
                exact
                component={ForGotPassword}
              ></Route>
              <Route component={Error404Page} />
            </Switch>
          </div>
        </HashRouter>
      </div>
    );
  }
}
export default App;
