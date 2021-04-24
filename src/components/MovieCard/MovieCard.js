import React from 'react';
import { Card } from 'react-bootstrap';
import "./MovieCard.css"

function MovieCard({movie}) {
    return (
        <div className="c-movie-card">
            <Card className="c-card">
                <Card.Img variant="top" src={movie.img} />
                <Card.Body>
                    <Card.Title>
                        {movie.name}
                    </Card.Title>
                    <Card.Text>
                        {"Time: " + movie.length}
                    </Card.Text>
                    <Card.Text>
                        {"Directors: " + movie.director}
                    </Card.Text>
                    <Card.Text>
                        {"Main Stars: "+ movie.mainStars}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MovieCard;