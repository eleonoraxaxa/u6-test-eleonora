import React from 'react';
import {Button, Form} from 'react-bootstrap/lib';
import Name from './Name';
import Photo from './Photo';
import EmailPhone from './EmailPhone';
import Schedule from './Schedule';

var schedule = [
    {
        day: 'Sunday',
        working: true
    },
    {
        day: 'Monday',
        working: false
    },
    {
        day: 'Thursday',
        working: true
    }
];


class Content extends React.Component {
    render() {
        return (
            <div className="content-wrapper">
                <Button bsStyle="primary">&larr;   Back</Button>
                <h2>Add new artist</h2>
                <Form>
                    <Name />
                    <Photo />
                    <EmailPhone />
                    <Schedule data={schedule}/>
                    <div className="button-wrapper col-xs-12">
                        <Button bsStyle="primary">Save</Button>
                    </div>
                </Form>
            </div>
        );
    }
}

export default Content;