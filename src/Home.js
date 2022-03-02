import React from "react";

import { IconButton, Typography } from "@mui/material";

import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import Adsj from "./adsj.json";
import articlesj from "./articlesj.json";
import "bootstrap/dist/css/bootstrap.css";
import { Card } from "react-bootstrap";

const Home = () => {
  const Json1 = [...articlesj];
  const Json2 = [...Adsj];
  const newArrs = [];

  Json1.map((data, i) => {
    newArrs.push(data);
    if (Json2.length > i) return newArrs.push(Json2[i]);
  });

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#Home">
            H
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav align-self-end">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="row   rounded-4" id="Home">
        {newArrs.map((item, key) => {
          return (
            <div className=" mt-4 col-sm-6 col-lg-4 col-12 " key={key}>
              <Card style={{ width: "20rem", height: 660 }}>
                <Card.Img variant="top" src={item.cover + "/" + key} />
                <Card.Body className="text-start">
                  <Card.Title> {item.title}</Card.Title>
                  <Card.Text> {item.summary}</Card.Text>
                </Card.Body>

                <div className="row mt-3">
                  <div className="col mt-2 ">{key % 2 === 0 ? "" : <h6 className="text-success">Sponsored Ads</h6>}</div>
                  <div className="col">
                    <IconButton aria-label="add to favorites">
                      <Typography variant="caption" color="text.secondary">
                        {item.likes}
                      </Typography>
                      <FavoriteBorderOutlinedIcon />
                      {item.bookmarked === false ? <LocalOfferOutlinedIcon /> : <LocalOfferIcon />}
                      <ShareOutlinedIcon />
                    </IconButton>
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
