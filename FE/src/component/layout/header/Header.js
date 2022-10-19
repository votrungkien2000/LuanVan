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
                <Container fluid style={{display: "flex", justifyContent: "space-between"}}>
                    <Navbar.Brand href="/" style={{ margin: 0 }}>
                        <img style={{ width: "120px", margin: "-20px 0" }} src={Logo} />
                    </Navbar.Brand>
                    <Nav
                        className=" my-2 my-lg-0"
                        navbarScroll>
                        <div className='header__box__menu'>
                            <div className='header__box__menu__right'>
                                <Account />
                            </div>
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
export default Header