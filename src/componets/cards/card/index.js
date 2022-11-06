import React from "react";
import "./style.css";



// import "../../App.css";
function Card(probs) {
   const tagOnClick = () => {
    probs.setSelectedTag(probs.type)
   }
   const onClickSelectedCard = () => {
    const cardProps = { ...probs };
    delete cardProps.setCard;
    delete cardProps.setSelectedTag;
    probs.setCard(cardProps);
  };
    return (
        <div onClick={onClickSelectedCard} className="card">
            <img src={probs.image} alt="" />
            <h1>
                {probs.title}
            </h1>
            <div className="p">
                {probs.description}
            </div>
            <div className="date">
                {probs.date} <span onClick={tagOnClick} className="button"> | {probs.tag}</span>
                </div>
        </div>
    )
    
}

export default Card;//onClick={} 