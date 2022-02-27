import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ButtonL from './mercury/Button';
import ImageL from './mercury/Image0';
import ImageL1 from './mercury/Image1';
import ImageL2 from './mercury/Image2';
import TextL from './mercury/Text';
import TextL1 from './mercury/Text1';
import TextL2 from './mercury/Text2';
import Database from "./database/base";
import { Col, Row } from 'react-bootstrap';


function Mercury() {
  return (
    <BrowserRouter>
      <Switch>
      <Row className="m-0 navbar-row">
        <Col className="all-col p-0 border">
          {
            Database.mercury.map((post)=>(
              <Row key={post.id}>
                <Col className='col-8'>
                  <Switch>
                    <Route path={`/`} component={ImageL} exact />
                    <Route path={`/ ${""}`} component={ImageL1} exact />
                    <Route path={`/ ${" "}`} component={ImageL2} exact />
                  </Switch>
                </Col>
                <Col className='col-4'>
                  <h1 className='all-title text-white'>{post.name}</h1>
                  <Row>
                    <Col>
                      <Switch>
                        <Route path={`/`} component={TextL} exact />
                        <Route path={`/ ${""}`} component={TextL1} exact />
                        <Route path={`/ ${" "}`} component={TextL2} exact />
                      </Switch>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <ButtonL post={post} />
                    </Col>
                  </Row>
                </Col>
              </Row>
            ))
          }
        </Col>
      </Row>
      </Switch>
    </BrowserRouter>
  );
}

export default Mercury;