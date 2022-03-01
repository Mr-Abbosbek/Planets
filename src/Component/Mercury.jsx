import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ButtonL from "./mercury/Button";
import ImageL from "./mercury/Image0";
import ImageL1 from "./mercury/Image1";
import ImageL2 from "./mercury/Image2";
import TextL from "./mercury/Text";
import TextL1 from "./mercury/Text1";
import TextL2 from "./mercury/Text2";
import Database from "./database/base";
import { Col, Row } from "react-bootstrap";

function Mercury() {
  return (
    <BrowserRouter>
        <Row className="m-0 navbar-row row-top">
          <Col className="all-col p-0">
            {Database.mercury.map((post) => (
              <Row key={post.id} className="m-0 d-d-lg-flex justify-content-lg-between">
                <Col className="p-0 col-sm-12 col-12 d-lg-none d-md-none button-col">
                  <ButtonL post={post} />
                </Col>
                <Col className="col-xl-8 col-lg-7 col-md-12 col-col-sm-12 col-12 py-lg-0 py-md-5 py-sm-5 py-5 px-0 d-flex align-items-center justify-content-center">
                  <Switch>
                    <Route path={`/`} component={ImageL} exact />
                    <Route path={`/ ${""}`} component={ImageL1} exact />
                    <Route path={`/ ${" "}`} component={ImageL2} exact />
                  </Switch>
                </Col>
                <Col className="col-xl-4 col-lg-5 col-md-12 col-sm-12 col-12 pt-lg-5 pt-md-0 pt-sm-0 px-0">
                  <Row className="d-flex flex-lg-column align-items-md-center justify-content-md-between m-0">
                    <Col className="p-0 col-lg-12 col-md-6 col-sm-12 text-lg-start text-md-start text-sm-center text-center">
                      <h1 className="all-title text-white">{post.name}</h1>
                      <Switch>
                        <Route path={`/`} component={TextL} exact />
                        <Route path={`/ `} component={TextL1} exact />
                        <Route path={`/  `} component={TextL2} exact />
                      </Switch>
                    </Col>
                    <Col className="p-0 col-lg-12 col-md-5 col-sm-12 d-lg-block d-md-block d-sm-none d-none">
                      <ButtonL post={post} />
                    </Col>
                  </Row>
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
    </BrowserRouter>
  );
}

export default Mercury;
