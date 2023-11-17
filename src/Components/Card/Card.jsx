import React from 'react';
import "./Card.scss";

export default function Card(props) {
  return (
    <div className="card_container" onClick={ () =>props.delCard(props.object.id)}>
        <div className="card_title">
            <h2>{props.object.name}</h2>
            <h2>{props.object.text}</h2>
        </div>
        <div className="card_text">
            <h4>{props.object.phone}</h4>
            <h4>{props.object.email}</h4>
            <h4>{props.object.deliv}</h4>
        </div>
    </div>
  )
}
