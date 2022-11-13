import React, { useState } from "react";
import "./style.css";
// import Img1 from "./imgs/1.jpg";
// import Img2 from "./imgs/2.jpg";
// import Img3 from "./imgs/3.jpg";
import Card from "./card";
import mockData from './mock/data.json';
import CardContent from "./ct";

import { useParams } from "react-router";



// import "../../App.css";
function Cards() {
  // const cards = [
  //     {
  //         img: Img1,
  //         text: "Coffee variety macchiato, as organic ut variety caffeine americano",
  //         text2: "Saucer, crema carajillo, bar, mocha medium, latte cappuccino and espresso acerbic to go. Coffee, irish foam turkish coffee blue mountain seasonal. Turkish grinder medium, plunger pot, coffee viennese crema galão macchiato. Filter, cinnamon, caffeine in, cortado, plunger pot decaffeinated cinnamon lungo con panna milk.",
  //         date: "JUNE 25, 2020",
  //         type: "music"

  //     },
  //     {
  //         img: Img2,
  //         text: "kdsfjk hifhds fhdsuhgdsilgh dshg dsu",
  //         text2: "Saucer, crema carajillo, bar, mocha medium, latte cappuccino and espresso acerbic to go. Coffee, irish foam turkish coffee blue mountain seasonal. Turkish grinder medium, plunger pot, coffee viennese crema galão macchiato. Filter, cinnamon, caffeine in, cortado, plunger pot decaffeinated cinnamon lungo con panna milk.",
  //         date: "JUNE 25, 2020",
  //         type: "music"
  //     },
  //     {
  //         img: Img3,
  //         text: "kdsfjk hifhds fhdsuhgdsilgh dshg dsu",
  //         text2: "Saucer, crema carajillo, bar, mocha medium, latte cappuccino and espresso acerbic to go. Coffee, irish foam turkish coffee blue mountain seasonal. Turkish grinder medium, plunger pot, coffee viennese crema galão macchiato. Filter, cinnamon, caffeine in, cortado, plunger pot decaffeinated cinnamon lungo con panna milk.",
  //         date: "JUNE 25, 2020",
  //         type: "it"
  //     }
  // ]
  const [selectedTag, setSelectedTag] = useState();
  // const [selectedCard, setSelectedCard] = useState();
  console.log(`card:`, selectedCard);
  const cards = mockData;

  const {cardId } = useParams();
  console.log(888888888888888888888888888);
  console.log(cardId);

  var maincard = undefined;

  const clear = () => {
    setSelectedTag(null)
  }
  let selectedCard = undefined;
  let a;
  const cc = document.getElementsByClassName("card");

  cards.forEach(element => 

    element.id == cardId
   ? maincard = element
    
    : null
  );
  // for( a in ) {
  //   // cardId = undefined;
  //   console.log(a);
  // }
// let selectedCard = undefined;
console.log(`card:`, selectedCard);
  return cardId && !maincard ? <h1 className='hhh1'>404</h1> :(

    <div className="cards-container">


      {
        selectedTag
          ? (<h1 class="white-bg-heading">{selectedTag}</h1>)
          : null
      }
      {!maincard && cards
        .filter(el => selectedTag == null || el.type === selectedTag).map(card =>

          <Card
            image={card.image}
            id={card.id}
            title={card.title}
            description={card.description}
            date={card.date}
            tag={card.tag}
            setSelectedTag={setSelectedTag}
            // setCard={setSelectedCard}
            fullPage={card.fullPage}
          />



        )
      }

      
      {maincard
        && <CardContent
          image={maincard.image}
          title={maincard.title}
          description={maincard.description}
          date={maincard.date}
          tag={maincard.tag}
          fullPage={maincard.fullPage}
        />
        
        }

      {
        selectedTag
          ? (<h1 onClick={clear} class="white-bg-headingx">All posts</h1>)
          : null
      }





      {/* <h1 class="white-bg-heading">All Posts</h1> */}
      {/* <Card image={Img1}/> */}

    </div>
  )
}

export default Cards;