import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Admin from "./Components/Admin";
import DeletePage from "./Components/Admin/DeletePage";
import FormPage from "./Components/Admin/FormPage";
import React from "react";
import Foydalanuvchi from "./Components/Foydalanuvchi/Foydalanuvchi";

function App() {
  if (localStorage.getItem("root")) {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/create" exact>
            <FormPage />
          </Route>
          <Route path="/delete" exact>
            <DeletePage />
          </Route>
          <Redirect to="/create" />
        </Switch>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Foydalanuvchi />
          </Route>
          <Route path="/admin" exact>
            <Admin />
          </Route>

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
