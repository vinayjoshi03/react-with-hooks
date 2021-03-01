import React, { Component } from 'react'
import { Link,BrowserRouter as Router } from 'react-router-dom';
import { Row, Col, Navbar, Form, Nav, FormControl, Button } from 'react-bootstrap';
import Cookies from 'js-cookie';
class HomeHeader extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const menues = () => {
            if (Cookies.get("vj-authtoken") != undefined) {
                return (
                    <>
                        
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/users">Users</Nav.Link>
                            <Nav.Link as={Link} to="/post-list">Posts</Nav.Link>
                            <Nav.Link as={Link} to="/hooks">Hooks</Nav.Link>
                            <Nav.Link as={Link} to="/testcode">Test Code</Nav.Link>
                            <Nav.Link as={Link} to="/login?logout=true">Logout</Nav.Link>

                        
                    </>
                );
            } else {
                return (
                    <>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    </>
                );

            }
        }
        return (
            <>
                <Row>
                    <Col>
                    <Router>
                        <Navbar bg="light" expand="lg">
                            <Navbar.Brand href="/">My Blog</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    {menues()}
                                </Nav>
                                <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                            </Navbar.Collapse>
                        </Navbar>
                        </Router>
                    </Col>
                </Row>
            </>
        )
    }
}

export default HomeHeader;