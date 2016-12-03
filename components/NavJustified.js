import React from 'react';
import {Nav, NavItem} from 'react-bootstrap/lib';

class NavJustified extends React.Component {
    render() {
        return (
            <div>
                <Nav bsStyle="tabs" justified activeKey={4}>
                    <NavItem eventKey={1}>My Salon</NavItem>
                    <NavItem eventKey={2}>Location</NavItem>
                    <NavItem eventKey={3}>Services</NavItem>
                    <NavItem eventKey={4}>Artists</NavItem>
                    <NavItem eventKey={5}>Working hours</NavItem>
                    <NavItem eventKey={6}>Gallery</NavItem>
                    <NavItem eventKey={7}>Brands</NavItem>
                </Nav>

            </div>

        );
    }
}

export default NavJustified;