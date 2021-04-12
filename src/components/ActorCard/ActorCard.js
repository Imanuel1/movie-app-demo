import React from 'react'
import { Card } from 'react-bootstrap'
import x from 

export default function ActorCard({actor}) {
    return (
    <div className="col-md-4 col-sm-6 col-xs-12 c-actor-card">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
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
