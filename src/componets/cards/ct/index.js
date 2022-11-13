import React from 'react'
import './style.css';

const getHeaderComponent = (text) => {
 return (
  <div className="card-content-header">{text}</div>
 );
};

const getTextComponent = (text) => {
 return (
  <div className="card-content-text">{text}</div>
 );
};

const getListComponent = (elems) => {
 return (
  <ul className="card-content-list">
   {/* {elems.map(text => <li>{text}</li>)} */}
   {
    elems.map(function (text) {
     return <li>{text}</li>;
    })
   }
  </ul>
 );
};


function CardContent (props) {
    console.log(8877777777777777777777111);

 console.log(props);
 return (
  <div className="card card-nm">
 
   <img className="card-image" src={`../${props.image}`}/>
   {
    props.fullPage.map(elem => {
     switch (elem.type) {
      case 'header': {
       return getHeaderComponent(elem.text);
      }
      case 'text': {
       return getTextComponent(elem.text);
      }
      case 'list': {
       return getListComponent(elem.elems);
      }
      default: { }
     }

     // if (elem.type === 'header') {
     //  return header(elem.text);
     // } else if (elem.type === 'text') {
     //  return {};
     // } else if (elem.type === 'list') {
     //  return {};
     // } else {
     //  return {};
     // }
    })
   }

  </div>
 );
}

export default CardContent;