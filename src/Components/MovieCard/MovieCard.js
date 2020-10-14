import React from "react";
import { Card } from "react-bootstrap";
import StarRating from "../StarRating/StarRating";

export default function MovieCard({ movie }) {
  return (
    <Card
      style={{
        width: "18rem",
        margin: 5,
      }}
    >
      <Card.Img variant="top" src={movie.poster} style={{ height: 200 }} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <StarRating rating={movie.rate} />
        <Card.Text style={{ textAlign: "justify" }}>
          {movie.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
