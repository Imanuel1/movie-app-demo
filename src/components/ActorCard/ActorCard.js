import React from 'react'
import { Card } from 'react-bootstrap'
import './ActorCard.css'

export default function ActorCard({actor}) {
    return (
    <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-12 c-actor-card">
        <Card style={{ width: '16rem'}}>
            <Card.Img variant="top" src={actor.image} />
            <Card.Body>
                <Card.Title>
                    <a href={actor.imdb} target="_blank">
                        {`${actor["first-name"]} ${actor["last-name"]}`}
                    </a>
                </Card.Title>
                <Card.Text>
                    {actor.age()}
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
        // <div className="col-3">
        //     <div className="img-parent">
        //         <img src={actor.image} alt="card-image"/>
        //     </div>
        //     <h4>{actor["first-name"]} {actor["last-name"]}</h4>
        //     <p>{actor.age}</p>
        // </div>
    )
}
