import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './style.scss';

const Header = () => {
    return (
        <Nav className="justify-content-around header__nav font-weight-light w-50 mx-auto" defaultActiveKey="/">
            <Link to="/" className="text-success">About me</Link>
            <Link to="/gallery" className="text-success">Gallery</Link>
            <Link to="/contacts" className="text-success">Contacts</Link>
            <Link to="/messages" className="text-success">Messages</Link>
        </Nav>
    )
};

export default Header;