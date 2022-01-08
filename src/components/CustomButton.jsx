import React, {Component} from 'react';

class CustomButton extends Component {
    render() {
        const {eventName, type} = this.props;
        return (
            <button type={type} onClick={eventName} >Click</button>
        );
    }
}

export default CustomButton;
