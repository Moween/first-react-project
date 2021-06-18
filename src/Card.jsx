import React  from "react";
import './Card.css';
import Avatar from './Avatar';

const Card = (props) => {
  console.log(props)
  return (
    <div  className="card">
      <div className="top">
        <h3>{props.title}</h3>
        <Avatar imgUrl={props.poster_path} />
      </div>
      <div className="detailsInfo">
        <p>{props.overview}</p>
        <p>{props.popularity}</p>
        <p>Release Date: {props.release_date}</p>
      </div>
    </div>
  )
}

export default Card