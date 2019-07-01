import React, { Component } from "react";
import images from "./CollectionData";
import "../App.css";

class Collections extends Component {
  render() {
    return (
      <div>
        <h1>Collections</h1>
        <img src="https://i.imgur.com/0EX2JH7.jpg" className="center" />
        <br />
        <div className="container">
          {images.map(image => (
            <>
              <a href={image.link} className="wrapper">
                <h4>{image.title}</h4>
                <img src={image.url} alt={image.title} />
                <p>{image.description}</p>
              </a>
              <br />
              <br />
            </>
          ))}
        </div>
      </div>
    );
  }
}

export default Collections;
