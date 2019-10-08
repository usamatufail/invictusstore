import React from 'react';
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from '../../Pages/LoginPage/LoginPage.component';
import Register from '../../Pages/SignUpPage/SignUpPage.component';
import ProductsPage from '../../Pages/ProductsPage/ProductsPage.component';
import CategoryPage from '../../Pages/CategoryPage/CategoryPage.component';
import CheckoutPage from '../../Pages/CheckoutPage/CheckoutPage.component';
import Admin from '../../Pages/AdminPanel/Admin';

const Routes = () => {
    return (
        <section>
        {/* <Alert /> */}
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/categories" component={CategoryPage} />
          <Route exact path="/products" component={ProductsPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <PrivateRoute exact path="/admin" component={Admin} />
        </Switch>
      </section>
    )
}

export default Routes;
