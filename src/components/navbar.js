import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import "./navbar.css"
const NavbarComp = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                <NavDropdown>
                    <NavDropdown.Item href="#action/3.1">WHAT IS IT</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">PERKS</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">PRICING</NavDropdown.Item>
                </NavDropdown>
                <Navbar.Brand href="#" className="logo">EXP|CON</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavbarComp