import React from "react";
import "./PictureCard.css";

const PictureCard = props => (
    <div>
        <img className="img-thumbnail img-fluid" alt={props.name} src={props.image} />
        <span onClick={() => props.pictureClicked(props.id)} className="picture-clicked"></span>
    </div>
);

export default PictureCard;