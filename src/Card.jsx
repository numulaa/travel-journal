import React from "react";

export default function Card(props) {
  return (
    <section>
      <div className="card-wrapper">
        <div className="img-wrapper">
          <img src={props.item.imageUrl} className="card-photo" alt="" />
        </div>
        <div className="desc-wrapper">
          <div className="location">
            <i class="fa-solid fa-location-dot color-icon"></i>
            <span className="space-left">
              {props.item.location.toUpperCase()}
            </span>
            <span className="space-left">
              <a href={props.item.googleMapsUrl} className="gray-text">
                View on Google Maps
              </a>
            </span>
          </div>
          <h1 className="title-heading">{props.item.title}</h1>
          <p className="date">
            {props.item.startDate} - {props.item.endDate}
          </p>
          <p>{props.item.description}</p>
        </div>
      </div>
    </section>
  );
}
