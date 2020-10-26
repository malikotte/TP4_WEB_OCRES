import React from 'react';
import "./UserInfo.css"

function UserInfo(props) {
    return (
        <div className={"UserInfo-background-" + props.user.backgroundColor}>
            <img src={props.user.avatar} alt="avatar" />
            <p>Prénom : {props.user.firstname}</p>
            <p>Nom : {props.user.name}</p>
            <p>Date de naissance : {props.user.birthday.toLocaleDateString()}</p>
            <button className="App-button" onClick={() => props.onChangeStyleButtonClicked(props.user.id)}>Change Style</button>
        </div>
    )
}

export default UserInfo;
