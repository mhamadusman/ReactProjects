import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import './starStyle.css'
export default function StarRating(props) {
  const array = Array.from({ length: props.noOfStars });
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const clicked = (index) => {
    console.log("from clicked");
    console.log(index);
    setRating(index);
  };

  const hoveredIn = (index) => {
    console.log("from hoverd in");
    console.log(index);
    setHover(index);
  };

  const hoveredOut = (index) => {
    console.log("from hoverd out");
    console.log(index);
    setHover(rating);
  };

  return (
    <div className="container-fluid my-height bg-dark">
      <div className="row">
        <div className="col-12 d-flex flex-column align-items-center ">
          <p
            style={{ fontFamily: "italic", color: "yellow" }}
            className="m1-5 p-3 fs-3"
          >
            Star Rating System
          </p>
        <div>
        {array.map((_, index) => (
            <FaStar style={{ margin:'2px', fontSize:'2rem'}}
              className={index < (hover || rating) ? 'active' : 'inActive'}
              key={index + 1}
              onClick={() => {
                clicked(index + 1);
              }}
              onMouseEnter={() => hoveredIn(index + 1)}
              onMouseLeave={() => hoveredOut(index + 1)}
            />
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}
