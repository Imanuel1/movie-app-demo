import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import ActorCard from '../../components/ActorCard/ActorCard'
import './ActorsPage.css'
import ActorModel from '../../model/ActorModel'
import SearchBox from '../../components/SearchBox/SearchBox'
import MovieModel from '../../model/MovieModel'
import MovieCard from '../../components/MovieCard/MovieCard'

export default function ActorsPage() {
    //option 1 - to read data from array's object
    // const actorsData= [ new ActorModel({
    //     "fname": "Bard",
    //     "lname": "Pitt",
    //     birth: "1963-12-18",
    //     img:"https://www.theplace2.ru/cache/archive/bred_pitt/img/brad_pitt_2-gthumb-gwdata1200-ghdata1200-gfitdatamax.jpg",
    //     imdb: "https://www.imdb.com/name/nm0000093/?ref_=nv_sr_srsg_0"
    //     })
    // ,new ActorModel({
    //     "fname": "Allison",
    //     "lname": "Mack",
    //     birth: "1982-7-29",
    //     img:"https://m.media-amazon.com/images/M/MV5BMTkxOTI4NDIzM15BMl5BanBnXkFtZTcwOTk3Mzc5Mg@@._V1_.jpg",
    //     imdb: "https://www.imdb.com/name/nm0532928/?ref_=nm_mv_close"
    // }),
    // new ActorModel({   
    //     "fname": "Tom",
    //     "lname": "Cruise",
    //     birth: "1962/07/03",
    //     img: "https://www.lecturas.com/medio/2018/10/05/tom-cruise_c56207ff_800x1200.jpg",
    //     imdb: "https://www.imdb.com/name/nm0000129/?ref_=nmmi_mi_nm"
    // }),
    // new ActorModel({
    //     "fname": "Christian",
    //     "lname": "Bale",
    //     birth: "1974/01/30",
    //     img: "https://www.theplace2.ru/cache/archive/christian_bale/img/546425_wayne2-gthumb-gwdata1200-ghdata1200-gfitdatamax.jpg",
    //     imdb: "https://www.imdb.com/name/nm0000288/?ref_=tt_cl_t1"
    // }),
    // new ActorModel({
    //     "fname": "Gal",
    //     "lname": "Gadot",
    //     birth: "1985/04/30",
    //     img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gal-gadot-attends-the-2020-vanity-fair-oscar-party-hosted-news-photo-1587592214.jpg",
    //     imdb: "https://www.imdb.com/name/nm2933757/?ref_=fn_al_nm_1"
    // }),
    // new ActorModel({
    //     "fname": "Uma",
    //     "lname": "Thurman",
    //     birth: "1970/04/29",
    //     img: "https://www.theplace2.ru/cache/archive/uma_thurman/img/Uma_Turman1-gthumb-gwdata1200-ghdata1200-gfitdatamax.jpg",
    //     imdb: "https://www.imdb.com/name/nm0000235/?ref_=tt_cl_t15"
    // }),
    // new ActorModel({
    //     "fname": "Diane",
    //     "lname": "Keaton",
    //     birth: "1946/01/05",
    //     img: "https://www.kino.dk/sites/default/files/primary-pictures/dianekeaton.jpg",
    //     imdb: "https://www.imdb.com/name/nm0000473/?ref_=tt_cl_t10"
    // }),
    // new ActorModel({
    //     "fname": "Tom",
    //     "lname": "Hanks",
    //     birth: "1956/07/09",
    //     img: "https://us.hola.com/imagenes/es/celebrities/2019032122293/tom-hanks-sorpresa-cumpleanos/0-168-324/tom-hanks-1a-a.jpg",
    //     imdb: "https://www.imdb.com/name/nm0000158/?ref_=tt_cl_t1"
    // }),
    // new ActorModel({
    //     "fname": "Cate",
    //     "lname": "Blanchett",
    //     birth: "1969/05/14",
    //     img: "https://i.pinimg.com/originals/ed/a1/36/eda136c1a14124e3bdb7dc504ee2d947.jpg",
    //     imdb: "https://www.imdb.com/name/nm0000949/?ref_=tt_cl_t10"
    // })];
    
    // console.log(actorsData);

    //before mounting - fetch data from json only once the component is mounting 
    useEffect(() => {
        console.log("actor,json");
        const pathPre = process.env.PUBLIC_URL;
        axios.get(pathPre.concat("/actor.json")).then(response => {
            console.log(response.data);
            setActors(response.data.map(plainActor => new ActorModel(plainActor)))
        }).catch(error => console.error(error));
    }, []);

    //axios call to get json data


    const [actors, setActors] = React.useState([]);
    const [filterText, setfilterText] = React.useState("");
    const [sortBy, setSortBy] = React.useState("fname");

    //1) filter the actors based on the filterText
    const filteredActors = actors.filter( actor =>
        //case insensetive: option 1 - without Regex - ((actor) => );
        actor["fname"].toLowerCase().includes(filterText.toLowerCase()) ||
        actor["lname"].toLowerCase().includes(filterText.toLowerCase()));
    
    //2) sort the actors array
    filteredActors.sort((actor1, actor2) => {
        if(actor1[sortBy] > actor2[sortBy]){
            return 1;
        } else if (actor1[sortBy] < actor2[sortBy]) {
            return -1;
        } else {
            return 0;
        }
    });

    

    return (
        <Container className="p-actors">
                <Form.Row>
                    <Form.Group sm={10} as={Col} controlId="formGridCity">
                        <Form.Control value={filterText} placeholder={`filter by actors`} onChange={(e) => setfilterText(e.target.value)}/>
                    </Form.Group>
                    <Form.Group sm={2} as={Col} controlId="formGridState">
                        <Form.Control as="select" value={sortBy} onChange={e => setSortBy(e.target.value)} >
                            <option value="fname">First Name</option>
                            <option value="lname">Last Name</option>
                            <option value="age">Age</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Row>
                   {filteredActors.map((actor, index) => <Col lg={3} md={6}><ActorCard key={index} actor={actor}/></Col>)}
                </Row>
        </Container>
    )
}
