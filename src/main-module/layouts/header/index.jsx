import { Nav } from 'react-bootstrap';

import './style.scss';

const Header = () => {
    return (
        <Nav className="justify-content-center header__nav font-weight-light" defaultActiveKey="/">
            <Nav.Item>
                <Nav.Link href="/" className="text-success">About me</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/gallery" className="text-success">Gallery</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/contacts" className="text-success">Contacts</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/messages" className="text-success">Messages</Nav.Link>
            </Nav.Item>
        </Nav>
    )
};

export default Header;