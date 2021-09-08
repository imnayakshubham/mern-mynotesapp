import React, { useEffect } from "react";
import { Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actions/userActions";
import "./Header.css";

function Header({ setSearch }) {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  useEffect(() => {}, [userInfo]);

  return (
    <Navbar className="header" collapseOnSelect expand="lg" bg="light">
      <Link to="/">
        <h1>My Notes</h1>
      </Link>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto">
          {userInfo && (
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                onChange={(e) => setSearch(e.target.value)}
              />
            </Form>
          )}
        </Nav>
        <Nav>
          {userInfo ? (
            <>
              <NavDropdown
                title={`${userInfo.name}`}
                id="collasible-nav-dropdown"
              >
                <Link to="/">
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
            </>
          ) : (
            <Link to="/login">
              <h5>Login</h5>
            </Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
