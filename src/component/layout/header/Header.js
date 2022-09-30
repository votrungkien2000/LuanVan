import Container from 'react-bootstrap/Container';
import { Avatar } from 'primereact/avatar';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'asset/style/header.css'
import Logo from '../../../asset/image/logoHomePage.png'
import Account from './Test.js'

function Header() {
    return (
        <div className='header'>
            <Navbar className='header__box' style={{ backgroundColor: "#fff", borderBottom: "1px solid #afb3bc" }} expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#" style={{ margin: 0 }}>
                        <img style={{ width: "120px", margin: "-20px 0" }} src={Logo} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px', width: "100%" }}
                            navbarScroll
                        >
                            <div className='header__box__menu'>
                                <div className='header__box__menu__left'>
                                    <Nav.Link href="#action1">Home</Nav.Link>
                                </div>
                                <div className='header__box__menu__right'>
                                    <Account />
                                </div>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default Header