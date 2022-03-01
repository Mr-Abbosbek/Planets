import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Database from "./../Component/database/base";

function Header() {
  const [clicked, setClicked] = useState(false);
  const MenuList = Database.menu.map((post) => {
    // console.log(post.background);
    return (
      <li key={post.id}>
        <NavLink
          exact
          to={post.url}
          className="d-flex align-items-center justify-content-between"
          activeStyle={{ color: `${post.background}` }}
          onClick={() => {
            document.querySelector("#icon").click();
          }}
        >
          <div className="d-flex align-items-center m-0 p-0">
            <div
              className="circle-link"
              style={{ background: `${post.background}` }}
            ></div>
            {post.text}
          </div>
          <div className="show-icon">{post.icon}</div>
        </NavLink>
      </li>
    );
  });

  const HandClick = () => {
    setClicked(!clicked);
  };

  return (
    <section className="header">
      <Row className="m-0 navbar-row">
        <Col className="all-col p-0">
          <nav>
            <Link to={"/"} className="logo">
              <Image src="./images/logo.svg" className="img-fluid" />
            </Link>
            <ul className={clicked ? "nav-list show" : "nav-list close"}>
              {MenuList}
            </ul>
            <label id="icon" onChange={HandClick}>
              <div className="menu">
                <input type="checkbox" name="" />
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </label>
          </nav>
        </Col>
      </Row>
      <hr className="opacity-25 m-0 bg-light" />
    </section>
  );
}

export default Header;
