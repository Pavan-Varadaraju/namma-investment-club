import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useHistory, NavLink } from "react-router-dom";
const Menu = () => {
  const history = useHistory();
  const goHome = () => {
    history.push(process.env.PUBLIC_URL + "/");
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="box-shadow">
        <Navbar.Brand className="cursor-pointer" onClick={goHome}>
          Namma Investment Club
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <NavLink to="dashboard">Dashboard</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink activeClassName="current" to="investments">
                Investments
              </NavLink>
            </Nav.Link>
            <NavDropdown title="More" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                {/* <Nav.Link> */}
                <NavLink activeClassName="current" to="contributions">
                  Contributions
                </NavLink>
                {/* </Nav.Link> */}
              </NavDropdown.Item>
              <NavDropdown.Item>
                {/* <Nav.Link> */}
                <NavLink activeClassName="current" to="investments">
                  Documents
                </NavLink>
                {/* </Nav.Link> */}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>About Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <span className="text-white">
            <strong>Pavan V</strong>
          </span>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Menu;
