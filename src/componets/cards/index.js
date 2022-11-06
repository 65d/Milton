import React, { useState } from "react";
import "./style.css";
import Img1 from "./imgs/1.jpg";
import Img2 from "./imgs/2.jpg";
import Img3 from "./imgs/3.jpg";
import Card from "./card";
// import mockData from './mock/data.json';
import CardContent from "./ct";

// import "../../App.css";
function Cards() {
    const cards = [
        {
            img: Img1,
            text: "Coffee variety macchiato, as organic ut variety caffeine americano",
            text2: "Saucer, crema carajillo, bar, mocha medium, latte cappuccino and espresso acerbic to go. Coffee, irish foam turkish coffee blue mountain seasonal. Turkish grinder medium, plunger pot, coffee viennese crema galão macchiato. Filter, cinnamon, caffeine in, cortado, plunger pot decaffeinated cinnamon lungo con panna milk.",
            date: "JUNE 25, 2020",
            type: "music"

        },
        {
            img: Img2,
            text: "kdsfjk hifhds fhdsuhgdsilgh dshg dsu",
            text2: "Saucer, crema carajillo, bar, mocha medium, latte cappuccino and espresso acerbic to go. Coffee, irish foam turkish coffee blue mountain seasonal. Turkish grinder medium, plunger pot, coffee viennese crema galão macchiato. Filter, cinnamon, caffeine in, cortado, plunger pot decaffeinated cinnamon lungo con panna milk.",
            date: "JUNE 25, 2020",
            type: "music"
        },
        {
            img: Img3,
            text: "kdsfjk hifhds fhdsuhgdsilgh dshg dsu",
            text2: "Saucer, crema carajillo, bar, mocha medium, latte cappuccino and espresso acerbic to go. Coffee, irish foam turkish coffee blue mountain seasonal. Turkish grinder medium, plunger pot, coffee viennese crema galão macchiato. Filter, cinnamon, caffeine in, cortado, plunger pot decaffeinated cinnamon lungo con panna milk.",
            date: "JUNE 25, 2020",
            type: "it"
        }
    ]
    const[selectedTag, setSelectedTag] = useState();
    const [selectedCard, setSelectedCard] = useState();
  console.log(`card:`, selectedCard);
    // const cards = mockData;

    console.log(`card:`, selectedCard);
    const clear = () => {
        setSelectedTag(null)
       }
    return (
        <div className="cards-container">
            {/* <h1 class="white-bg-heading">All Posts</h1> */}
           {/* <Card image={Img1}/> */}
           {
            selectedTag
            ? (<h1 class="white-bg-heading">{selectedTag}</h1>)
            : null
           }
           {!selectedCard && cards
            .filter(el => selectedTag == null || el.type === selectedTag).map( card =>
                       
                            <Card
                            image={card.img}
                            title={card.text}
                            description={card.text2}
                            date={card.date}
                            tag={card.type  }
                            setSelectedTag={setSelectedTag}
                            setCard={setSelectedCard}
                            fullPage={card.fullPage}
                             />
                        
                    
                
            )
           }
            {selectedCard
        && <CardContent
          image={selectedCard.image}
          title={selectedCard.title}
          description={selectedCard.description}
          date={selectedCard.date}
          tag={selectedCard.tag}
          fullPage={selectedCard.fullPage}
        />}
     
           {
            selectedTag
            ? (<h1 onClick={clear} class="white-bg-headingx">All posts</h1>)
            : null
           }
        </div>
    )
}

export default Cards;