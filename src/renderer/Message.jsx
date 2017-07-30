import React from "react";
import Avator from "./Avator";

export default function Message(props){
    const { text, time, writtenBy } = props.message;
    const localStorage = new Date(time).toLocaleDateString();
    return (
        <div className="list-group-item">
            <div className="media-object pull-left">
                <Avator user={writtenBy} />
            </div>
            <div className="media-body">
                <div style={MEDIA_BODY_STYLE}>
                    <span>{writtenBy.displayName}</span>
                    <span style={TIME_STYLE}>{localStorage}</span>
                </div>
                <p style={TEXT_STYLE}>{text}</p>
            </div>
        </div>
    );
}

const MEDIA_BODY_STYLE = {
    color: "#888",
    fontSize: ".9em",
};
const TIME_STYLE = {
    marginLeft: 5,
};
const TEXT_STYLE = {
    whiteSpace: "normal",
    wordBreak: "break-word"
};
