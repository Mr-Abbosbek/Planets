import React from "react";
import { Col, Image, Row } from "react-bootstrap";
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Database from "./database/base";

function MercuryList() {
  
  const ButtonClick = (evt, planet, planet2) => {
    let tabLinks = document.querySelectorAll(".tabLinks"),
    tabText = document.querySelectorAll(".allText"),
    tabImage = document.querySelectorAll(".all-image");
    console.log(planet2);
    // for (let i = 0; i < tabLinks.length; i++) {
      //   tabLinks[i].className = tabLinks.className.replace(" active", "");
      // }
      
      for (let i = 0; i < tabImage.length; i++) {
        tabImage[i].style.display = "none"  
      }
      for (let j = 0; j < tabText.length; j++) {
        tabText[j].style.display = "none";
      }
      document.getElementById(planet).style.display = "block";
      document.getElementById(planet2).style.display = "block";
      // evt.CurrentTarget.className += (" active", "");
    }
    
  


  return (
    <section>
      <Row className="m-0 navbar-row">
        <Col className="all-col p-0 border">
          {Database.mercury.map((post) => (
            <Row key={post.id}>
              <Col className="col-9 d-flex flex-column justify-content-center">
                {
                  post.features.map((img) => (
                    <Image id={img.id} key={img.id} className="all-image w-50" src={img.img} />
                  ))
                }
              </Col>
              <Col className="col-3">
                <h1 className="text-white text-uppercase all-title">
                  {post.name}
                </h1>
                <Row>
                  <Col>
                    {post.features.map((text) => (
                      <div key={text.id} id={text.id_show2} className="allText">
                        <p className="text-white">{text.text}</p>
                        <p className="text-white opacity-25 fw-bold">{post.wikipediaLink}</p>
                      </div>
                    ))}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    {post.features.map((btn) => (
                      <div key={btn.id}>
                        <button auto id={btn.id} onClick={(e)=>ButtonClick(e, `${btn.id}`, `${btn.id}` )} className="tabLinks w-75 text-start mt-3 px-3 py-2 btn btn-outline-light"><span className="p-3">{btn.id}</span>{btn.name}</button>
                      </div>
                    ))}
                  </Col>
                </Row>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </section>
  );
}

export default MercuryList;
