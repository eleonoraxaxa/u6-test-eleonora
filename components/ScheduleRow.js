import React from 'react';
import {DropdownButton, MenuItem, Button, Row } from 'react-bootstrap/lib';
import ReactBootstrapToggle from 'react-bootstrap-toggle';

class ScheduleRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {enabled: false};
        this.onChange = this.onChange.bind(this);
    }

    onChange(value) {
        this.setState({enabled: value});
    }

    render() {
        var day = this.props.data.day,
            working = this.props.data.working,
            workingData;

        if(working) {
            workingData =  (<div className="schedule-day">
                <div className="col-md-5 col-sm-12">
                    <h3>{day}</h3>
                    <Row>
                        <ReactBootstrapToggle active={this.state.enabled} onChange={this.onChange} width={60} height={34} bsClass="col-xs-3"/>
                        <div className="inline-form col-xs-9">
                            <DropdownButton title="10:00 AM" id={day + "-start"} disabled={!this.state.enabled}>
                                <MenuItem eventKey="1" active>10:00 AM</MenuItem>
                                <MenuItem eventKey="2">11:00 AM</MenuItem>
                                <MenuItem eventKey="3" >12:00 AM</MenuItem>
                                <MenuItem eventKey="4">13:00 AM</MenuItem>
                            </DropdownButton>
                            <span className="-xs-1">  -  </span>
                            <DropdownButton title="10:00 AM" id={day + "-end"} disabled={!this.state.enabled}>
                                <MenuItem eventKey="1" active>10:00 AM</MenuItem>
                                <MenuItem eventKey="2">11:00 AM</MenuItem>
                                <MenuItem eventKey="3" >12:00 AM</MenuItem>
                                <MenuItem eventKey="4">13:00 AM</MenuItem>
                            </DropdownButton>
                        </div>
                    </Row>
                </div>
                <div className="col-md-7 col-sm-12 address">
                    <h3>Address</h3>
                    <DropdownButton title="On location" id={day + "-location"} disabled={!this.state.enabled}>
                        <MenuItem eventKey="1" active>On location</MenuItem>
                    </DropdownButton>
                </div>
            </div>);
        } else {
            workingData =  (<div className="schedule-day">
                <div className="col-sm-12">
                    <h3>{day}</h3>
                    <Row>
                        <ReactBootstrapToggle active={this.state.enabled} onChange={this.onChange} width={60} height={34}  bsClass="col-xs-3"/>
                        <div className="col-xs-9">Day off</div>
                    </Row>
                </div>
            </div>);
        }

        return (
            <div>
                {workingData}
            </div>
        );
    }
}

export default ScheduleRow;

ScheduleRow.propTypes = { disabled: React.PropTypes.bool };
ScheduleRow.defaultProps = { disabled: true };