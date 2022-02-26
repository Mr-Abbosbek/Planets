import React from "react";
import { Col, Row } from "react-bootstrap";
import { Label } from "reactstrap";
import MyInput from "../Input/MyInput";

function MySelect({filterBlog}) {
  return (
    <form className=" d-flex justify-content-center">
      <Row className="row-all">
        <Col className="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-12 px-5 py-3 d-flex justify-content-around">
          <MyInput type="radio" id="all" name="filter" defaultChecked />
          <div className="border-0 bg-white fw-bold button-label" src="" onClick={()=>filterBlog("all")}>
            <Label htmlFor="all">All</Label>
          </div>
          <MyInput type="radio" id="app" name="filter" />
          <div className="border-0 bg-white fw-bold button-label" src="" onClick={()=>filterBlog("APP")}>
            <Label htmlFor="app">App</Label>
          </div>
          <MyInput type="radio" id="card" name="filter" />
          <div className="border-0 bg-white fw-bold button-label" onClick={()=>filterBlog("CARD")}>
            <Label htmlFor="card">Card</Label>
          </div>
          <MyInput type="radio" id="web" name="filter" />
          <div className="border-0 bg-white fw-bold button-label" onClick={()=>filterBlog("WEB")}>
            <Label htmlFor="web">Web</Label>
          </div>
        </Col>
      </Row>
    </form>
  );
}

export default MySelect;
