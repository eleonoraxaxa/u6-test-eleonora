import React from 'react';
import {Row} from 'react-bootstrap/lib';
import NavJustified from './NavJustified';

class Header extends React.Component {
    render() {
        return (
            <div className="header container">
                <Row>
                    <h2 className="col-xs-11">Profile</h2>
                    <a className="profile-link col-xs-1" href="#">Me</a>
                </Row>
                <NavJustified/>
            </div>
        );
    }
}

export default Header;