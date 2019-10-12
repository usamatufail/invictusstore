import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Alert from "./Components/Alerts/Alert.component";
import "react-id-swiper/lib/styles/css/swiper.css";
//Header of app
import AppHeader from "./Pages/AppHeader.component";
// pages for this app
import HomePage from "./Pages/HomePage/HomePage.component";
import LoginPage from "./Pages/LoginPage/LoginPage.component";
import SignUpPage from "./Pages/SignUpPage/SignUpPage.component";
import CategoryPage from "./Pages/CategoryPage/CategoryPage.component";
import ProductsPage from "./Pages/ProductsPage/ProductsPage.component";
//Footer of app
// import Footer from "./Components/Footer/Footer";
import CheckoutPage from "Pages/CheckoutPage/CheckoutPage.component";
//Admin Panel Pages
import Admin from "./Pages/AdminPanel/Admin";

// import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { loadUser } from "./redux/user/userActions";
import setAuthToken from "./util/setAuthToken";

import PrivateRoute from "./Components/routing/PrivateRoute";

import "./Assets/css/chartist.min.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <div>
      <Alert />
      <AppHeader />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route path="/categories" component={CategoryPage} />
        <Route path="/products" component={ProductsPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <PrivateRoute path="/admin" component={Admin} />
      </Switch>
    </div>
  );
};

// <Route path="/dashboard" component={dashboard} />

export default App;
