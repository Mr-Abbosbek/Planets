import React from "react";
import { Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function button({post}) {
  return (
    <Col>
      {post.features.map((text) => (
        <div key={text.id}>
          <NavLink
            to={`/${text.id_show}`}
            exact
            id={text.id}
            className="tabLinks w-75 text-start mt-3 px-3 py-2 btn btn-outline-light"
          >
            <span className="p-3">0{text.id}</span>
            {text.name}
          </NavLink>
        </div>
      ))}
    </Col>
  );
}

export default button;
