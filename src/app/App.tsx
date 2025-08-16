import React from "react";
import {Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import HomePage from "./screens/homePage";
import ProductsPage from "./screens/productsPage";
import OrdersPage from "./screens/ordersPage";
import UsersPage from "./screens/userPage";
import HomeNavbar from "./components/headers/HomeNavbar";
import OtherNavbar from "./components/headers/OtherNavbar";
import Footer from "./components/footer";
import HelpPage from "./screens/helpPage";
import "../css/app.css";
import "../css/navbar.css";
import "../css/footer.css";
import Test from "./screens/Test";

function App() {

  const location = useLocation();
  console.log("locati on:", location);

  return (
    <>
        {location.pathname === "/" ? <HomeNavbar/> : <OtherNavbar/>}
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/products">
            <ProductsPage />
          </Route>
          <Route path="/orders">
            <OrdersPage />
          </Route> 
          <Route path="/member-page">
            <UsersPage />
          </Route>
          <Route path="/help">
            <HelpPage />
          </Route>
          <Route path="/">
          <Test/>
             {/* <HomePage />  */}
          </Route>
        </Switch>
          <Footer />
      </>
  );
}

export default App;


// screens component 
// sectional component
// reusable component