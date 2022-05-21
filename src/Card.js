import React from "react";
import "./Card.css";
let new_date;
let my_date = "";
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function Card({ person }) {
  const { name, location, likes, description, PostImage, date } = person;
  // const img = PostImage.split("\\");
  const image = process.env.REACT_APP_API + "/image/" + PostImage;
  console.log(image);
  new_date = eval(date);
  my_date =
    new_date.getDate() +
    " " +
    months[new_date.getMonth()] +
    " " +
    new_date.getFullYear();
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="top-bar">
            <div className="name">
              <p>{name}</p>
            </div>
            <div className="menu">
              <p>...</p>
            </div>
            <div className="city">
              <p>{location}</p>
            </div>
          </div>

          <img
            src={image} //{window.location.origin + "/images/image-1.jpg"}
            alt="failed to load Image"
          />

          <div className="icons">
            <img
              src="/images/like-icon.jpg"
              alt="like-icon"
              className="like-icon"
            />
            <img
              src="/images/telegram-icon.png"
              alt="telegram-icon"
              className="telegram-icon"
            />

            <div className="date">
              <p>{my_date}</p>
            </div>
          </div>

          <div className="like-counts">
            <p>{likes} Likes</p>
          </div>

          <div className="desc">
            <h3>{description}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
