import React from 'react'
//import logo from './logo.svg';
import './App.css';
import HomeLayout from './layout/homeLayout.jsx'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeHeader from './layout/homeHeader'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Login from './pages/LoginPage/LoginPage';
import HomePage from './pages/HomePage/HomePage.jsx'
function App() {
  return (
    <Container border="primary">
      <HomeLayout>
        <Router>
          <HomeHeader />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/" component={HomePage} />
          </Switch>
        </Router>
      </HomeLayout>
    </Container>
  );
}

export default App;
