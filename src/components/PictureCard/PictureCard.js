import React from "react";
import "./PictureCard.css";

const PictureCard = props => (
    <div className="content">
        <span onClick={() => props.pictureClicked(props.id)} className="picture-clicked">
            <div className="img-container">
                <img className="img-thumbnail img-fluid" alt={props.name} src={props.image} />
            </div>
        </span>
    </div>
);

export default PictureCard;