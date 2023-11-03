import React from 'react';
import "./Card.scss"

export default function Card(props) {
  return (
    <div className="card_container" onClick={ () =>props.delCard(props.object.id)}>
        <div className="card_title">
            <h2>{props.object.title}</h2>
        </div>
        <div className="card_text">
            <h4>{props.object.body}</h4>
        </div>
    </div>
  )
}
