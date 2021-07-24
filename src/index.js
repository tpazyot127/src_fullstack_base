import React from "react";
import ReactDOM from "react-dom";

import store from 'redux/store';
import { Provider } from 'react-redux'

import Home from "containers/home/Home";
import ListPosts from "containers/posts/ListPosts";
import FormPost from "containers/posts/FormPost";
import ListPostCategories from "containers/posts/ListPostCategories";

import ListProducts from "containers/products/ListProducts";
import FormProduct from "containers/products/FormProduct";
import ListProductCategories from "containers/products/ListProductCategories";

import ForgotPw from "containers/auth/ForgotPw";
import Login from "containers/auth/Login";
import Register from "containers/auth/Register";

import "assets/css/style.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <Provider  store={store}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route path="/posts">
              <ListPosts />
            </Route>
            <Route path="/post/add">
              <FormPost />
            </Route>
            <Route path="/post_categories">
              <ListPostCategories />
            </Route>
            <Route path="/products">
              <ListProducts />
            </Route>
            <Route path="/product/add">
              <FormProduct />
            </Route>
            <Route path="/product_categories">
              <ListProductCategories />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/forgotpw">
              <ForgotPw />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>,

  </React.StrictMode>,
  document.getElementById("root")
);

