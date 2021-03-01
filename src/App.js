import React from 'react'
//import logo from './logo.svg';
import './App.css';
import HomeLayout from './layout/homeLayout.jsx'
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Login from './pages/LoginPage/LoginPage'
function App() {
  return (
    <Container border="primary">
      <HomeLayout>
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </HomeLayout>
    </Container>
  );
}

export default App;
