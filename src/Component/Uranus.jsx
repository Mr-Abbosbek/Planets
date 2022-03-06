import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ButtonL from "./uranus/Button";
import ImageL from "./uranus/Image0";
import ImageL1 from "./uranus/Image1";
import ImageL2 from "./uranus/Image2";
import TextL from "./uranus/Text";
import TextL1 from "./uranus/Text1";
import TextL2 from "./uranus/Text2";
import Database from "./database/base.js";
import { Col, Row } from "react-bootstrap";

function Uranus() {
  return (
    <BrowserRouter>
      <Row className="m-0 navbar-row row-top">
        {Database.uranus.map((post) => (
          <Col className="all-col p-0" key={post.id}>
            <Row
              className="m-0 d-d-lg-flex justify-content-lg-between"
            >
              <Col className="p-0 col-sm-12 col-12 d-lg-none d-md-none button-col">
                <ButtonL post={post} />
              </Col>
              <Col className="col-xl-8 col-lg-7 col-md-12 col-col-sm-12 col-12 py-lg-0 py-md-5 py-sm-5 py-5 px-0 d-flex align-items-center justify-content-center">
                <Switch>
                  <Route path={`/uranus`} component={ImageL} exact />
                  <Route path={`/uranus ${""}`} component={ImageL1} exact />
                  <Route path={`/uranus ${" "}`} component={ImageL2} exact />
                </Switch>
              </Col>
              <Col className="col-xl-4 col-lg-5 col-md-12 col-sm-12 col-12 pt-lg-5 pt-md-0 pt-sm-0 px-0">
                <Row className="d-flex flex-lg-column align-items-md-center justify-content-md-between m-0">
                  <Col className="p-0 col-lg-12 col-md-6 col-sm-12 text-lg-start text-md-start text-sm-center text-center">
                    <h1 className="all-title text-white">{post.name}</h1>
                    <Switch>
                      <Route path={`/uranus`} component={TextL} exact />
                      <Route path={`/uranus ${""}`} component={TextL1} exact />
                      <Route path={`/uranus ${" "}`} component={TextL2} exact />
                    </Switch>
                  </Col>
                  <Col className="p-0 col-lg-12 col-md-5 col-sm-12 d-lg-block d-md-block d-sm-none d-none">
                    <ButtonL post={post} />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="m-0 py-5">
              <Col className="p-0 pt-lg-5 pt-md-5 pt-sm-0 pt-0 d-flex justify-content-between text-white flex-wrap">
                {
                  post.about.map((about)=>(
                    <div className="about-planets" key={about.id}>
                      <p className='text-white-50 fw-bold'>{about.name}</p>
                      <h4>{about.data}</h4>
                    </div>
                  ))
                }
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </BrowserRouter>
  );
}

export default Uranus;