import React  from "react";
import './Card.css';
import Avatar from './Avatar';

const Card = (props) => {
  return (
    <div  className="card">
      <div className="top">
        <h3>{props.name}</h3>
        <Avatar imgUrl={props.imgUrl} />
      </div>
      <div className="contacts">
        <p>{props.tel}</p>
        <p>{props.email}</p>
      </div>
    </div>
  )
}

export default Card