import React from 'react';

class Photo extends React.Component {
    render() {
        return (
            <div className="col-md-3 col-md-offset-3 col-sm-12">
                <h3>Artists's photo</h3>
                <div className="artist-photo col-sm-4 col-md-12">
                    <p>Drop your image here</p>
                    <p>JPG or PNG, up to 10 Megabytes, Portrait oriented, more than 600*800 pixels</p>
                </div>
            </div>
        );
    }
}

export default Photo;