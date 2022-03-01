import React from "react";
import { NavLink } from "react-router-dom";

function button({ post }) {
  return post.features.map((text) => (
    <NavLink
      key={text.id}
      to={`/${text.id_show}`}
      exact
      id={text.id}
      className="text-start mt-lg-3 mt-md-3 mt-sm-0 mt-0 px-3 py-3 button-navLink"
      activeClassName="active"
    >
      <span className="p-3 button-number">0{text.id}</span>
      <span>{text.name}</span>
    </NavLink>
  ));
}

export default button;
