import React from 'react'
import { Card } from 'react-bootstrap'
import './ActorCard.css'

export default function ActorCard({actor}) {
    return (
    <div className="c-actor-card">
        <Card >
            <Card.Img variant="top" src={actor.img} />
            <Card.Body>
                <Card.Title>
                    <a href={actor.imdb} target="_blank">
                        {`${actor["fname"]} ${actor["lname"]}`}
                    </a>
                </Card.Title>
                <Card.Text>
                    {actor.age}
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
    )
}
