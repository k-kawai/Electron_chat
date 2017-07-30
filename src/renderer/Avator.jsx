import React from "react";

export default function Avator(props){
    const { photoURL } = props.user;
    if(photoURL){
        // photoURLが設定されている場合、img要素を表示
        return <img className="img-rounded" src={photoURL} style={AVATOR_STYLE} />
    } else {
        // photoURLが設定されていない場合、代替としてiconを表示
        return(
            <div style={AVATOR_STYLE}>
                <span className="icon icon-user" />
            </div>
        );
    }
}

const AVATOR_STYLE = {
    width: 32,
    textAlign: "center",
    fontSize: 24
};
