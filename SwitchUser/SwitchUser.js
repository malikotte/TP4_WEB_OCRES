import React from 'react';
import "./SwitchUser.css"

function SwitchUser(props) {
    return (
        <button onClick={() => props.onSwitchUserButtonClicked(props.id)}>{props.name}</button>
    );
}

export default SwitchUser;