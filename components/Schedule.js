import React from 'react';
import ScheduleRow from './ScheduleRow';

class Schedule extends React.Component {
    render() {
        var data = this.props.data;
        var scheduleTemplate;

        if (data.length > 0) {
            scheduleTemplate = data.map(function(item, index) {
                return (
                    <div key={index}>
                        <ScheduleRow data={item} />
                    </div>
                )
            })
        } else {
            scheduleTemplate = <p>There is nothing available</p>
        }

        return (
            <div className='schedule'>
                {scheduleTemplate}
            </div>
        );
    }
}

export default Schedule;