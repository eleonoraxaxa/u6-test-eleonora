import React from 'react';
import {Button} from 'react-bootstrap/lib';

class EmailPhone extends React.Component {
    render() {
        return (
            <div className="col-md-8">
                <h3>Email & phone</h3>
                <p className="sub-header">Why do we need it?</p>
                <p>So we may share latest schedule updates with your Artist.<br/>Each artist  will see only his or her schedule.<br/>Neither phone or e-mail of your Artist will be visible to public.</p>

                <div className="col-md-9 email-phone">
                    <input className="form-control" type="text" required placeholder="Email"/>
                    <input className="form-control" type="text" required placeholder="Phone"/>
                </div>
                <div className="col-md-3 email-phone">
                    <Button bsStyle="primary">Resend invitation</Button>
                    <p className="invitation-text">Invitation sent</p>
                </div>
            </div>
        );
    }
}

export default EmailPhone;