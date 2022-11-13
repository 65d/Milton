import React from "react";
import { useParams } from "react-router";
import "./style.css";
import {
    BrowserRouter,
    Route,
    Routes,
    Link
  } from "react-router-dom";
  


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
//   console.log(probs.image)

//  onClick={onClickSelectedCard}
//'../../'+
    return (
    
        <div className="card ">
            <img src={probs.image}alt="" />
            <Link to={'/card/'+ probs.id}>
            
            <h1>
                {probs.title}
            </h1>
            <div className="p">
                {probs.description}
            </div></Link>
            <div className="date">
                {probs.date} <span onClick={tagOnClick} className="button"> | {probs.tag}</span>
                </div>
        </div>
        
    )
    
}

export default Card;//onClick={} 