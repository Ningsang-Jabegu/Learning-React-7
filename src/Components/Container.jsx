import React from "react";
import data from "./Data"

export default function Container({travel}) {
    // const travelling_Data = data[id]
    // console.log(travelling_Data.img_src)
return(
    <div className="container-box">
        <img className="container-img" src={travel.img_src} />
        <div className="container-details">
            <div className="container-upper-part">
                <div className="container-first-line">
                    <div className="first-line-location">
                    <i class="fa-solid fa-location-dot"></i>
                    <span className="container-country">{travel.detail.country}</span>
                    </div>
                    <span><a href={travel.detail.google_map} target="_blank">View on Google Maps</a></span>
                </div>
                <h2 className="container-second-line">{travel.detail.travel_title}</h2>
            </div>
            <div className="container-lower-part">
                <span className="container-date">{travel.detail.date_of_visit.from} - {travel.detail.date_of_visit.to}</span>
                <p className="container-journal">
                    {travel.detail.describe}
                </p>
            </div>
        </div>
    </div>
)
}