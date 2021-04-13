import React from 'react'
import { Card } from 'react-bootstrap'
import './ActorCard.css'

export default function ActorCard({actor}) {
    return (
    <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-12 c-actor-card">
        <Card style={{ width: '16rem'}}>
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
