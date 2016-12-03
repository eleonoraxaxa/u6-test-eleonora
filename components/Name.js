import React from 'react';
import {Row} from 'react-bootstrap/lib';

class Name extends React.Component {
    render() {
        return (
            <div className="col-md-6">
                <h3>Name</h3>
                <input className="form-control" type="text" required placeholder="First"/>
                <input className="form-control" type="text" required placeholder="Last"/>
            </div>
        );
    }
}

export default Name;