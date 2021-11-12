import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Conatct/Contact';
import CarListing from './pages/CarListing/CarListing';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Purchase from './pages/Purchase/Purchase';
import PurchaseDone from './pages/Purchase/PurchaseDone';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/aboutus">
              <AboutUs></AboutUs>
            </Route>
            <PrivateRoute path="/carlists">
              <CarListing></CarListing>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/purchasedone">
              <PurchaseDone></PurchaseDone>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
