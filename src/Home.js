import React, { useState } from "react";
// import { Ads } from "./ads";
// import { Articles } from "./articles";
// import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import { ButtonBase, CardContent, IconButton, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import Adsj from "./adsj.json";
import articlesj from "./articlesj.json";
import "bootstrap/dist/css/bootstrap.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

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
          <a className="navbar-brand" href="#">
            H
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="row justify-content-center rounded-4">
        {newArrs.map((item, key) => {
          return (
            <div className="mt-4 col-sm-2 col-lg-4 col-12 " key={key}>
              <Card style={{ width: "20rem", height: 660 }}>
                <Card.Img variant="top" src={item.cover + "/" + key} />
                <Card.Body>
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

/*
 <Card sx={{ maxWidth: 430, height: 660 }} className="col-12 mb-3 mr-3">
                <CardMedia component="img" height="260" image={item.cover + "/" + key} alt="cover" />
                <CardContent className="">
                  <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "left" }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ textAlign: "left" }}>
                    {item.summary}
                  </Typography>
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
                </CardContent>
              </Card>

*/
