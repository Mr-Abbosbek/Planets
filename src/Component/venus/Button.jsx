import React from "react";
import { NavLink } from "react-router-dom";

function Button({ post, color }) {
  return post.features.map((text) => (
    <NavLink
      key={text.id}
      to={`/${text.id_show}`}
      exact
      id={text.id}
      className="mt-lg-3 mt-md-3 mt-sm-0 mt-0 p-lg-3 p-md-3 py-sm-3 px-sm-0 py-3 px-1 text-lg-start text-md-start text-sm-start text-center button-navLink"
      activeClassName="active"
      activeStyle={{borderColor: color}}
      
    >
      <span className="p-3 button-number">0{text.id}</span>
      <span className="planet-name">{text.name}</span>
    </NavLink>
  ));
}

export default Button;
