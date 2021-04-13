import React from 'react'
import { Col, Container, Form } from 'react-bootstrap'
import ActorCard from '../../components/ActorCard/ActorCard'
import ActorModel from '../../model/ActorModel';
import './ActorsPage.css'

export default function ActorsPage() {

    function calc(date){
        let birth = new Date(date);
        let today = new Date();
        const diff = today.getTime() - birth.getTime();
        return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    }

    const actorsData= [ new ActorModel({
        "fname": "Bard",
        "lname": "Pitt",
        birth: "1963-12-18",
        img:"https://www.theplace2.ru/cache/archive/bred_pitt/img/brad_pitt_2-gthumb-gwdata1200-ghdata1200-gfitdatamax.jpg",
        imdb: "https://www.imdb.com/name/nm0000093/?ref_=nv_sr_srsg_0",
        })
    ,new ActorModel({
        "fname": "Allison",
        "lname": "Mack",
        birth: "1982-7-29",
        img:"https://m.media-amazon.com/images/M/MV5BMTkxOTI4NDIzM15BMl5BanBnXkFtZTcwOTk3Mzc5Mg@@._V1_.jpg",
        imdb: "https://www.imdb.com/name/nm0532928/?ref_=nm_mv_close",
    }),
    new ActorModel({   
        "fname": "Tom",
        "lname": "Cruise",
        birth: "1962/07/03",
        img: "https://www.lecturas.com/medio/2018/10/05/tom-cruise_c56207ff_800x1200.jpg",
        imdb: "https://www.imdb.com/name/nm0000129/?ref_=nmmi_mi_nm",
    }),
    new ActorModel({
        "fname": "Christian",
        "lname": "Bale",
        birth: "1974/01/30",
        img: "https://www.theplace2.ru/cache/archive/christian_bale/img/546425_wayne2-gthumb-gwdata1200-ghdata1200-gfitdatamax.jpg",
        imdb: "https://www.imdb.com/name/nm0000288/?ref_=tt_cl_t1",
    }),
    new ActorModel({
        "fname": "Gal",
        "lname": "Gadot",
        birth: "1985/04/30",
        img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gal-gadot-attends-the-2020-vanity-fair-oscar-party-hosted-news-photo-1587592214.jpg",
        imdb: "https://www.imdb.com/name/nm2933757/?ref_=fn_al_nm_1",
    }),
    new ActorModel({
        "fname": "Uma",
        "lname": "Thurman",
        birth: "1970/04/29",
        img: "https://www.theplace2.ru/cache/archive/uma_thurman/img/Uma_Turman1-gthumb-gwdata1200-ghdata1200-gfitdatamax.jpg",
        imdb: "https://www.imdb.com/name/nm0000235/?ref_=tt_cl_t15",
    }),
    new ActorModel({
        "fname": "Diane",
        "lname": "Keaton",
        birth: "1946/01/05",
        img: "https://www.kino.dk/sites/default/files/primary-pictures/dianekeaton.jpg",
        imdb: "https://www.imdb.com/name/nm0000473/?ref_=tt_cl_t10",
    }),
    new ActorModel({
        "fname": "Tom",
        "lname": "Hanks",
        birth: "1956/07/09",
        img: "https://us.hola.com/imagenes/es/celebrities/2019032122293/tom-hanks-sorpresa-cumpleanos/0-168-324/tom-hanks-1a-a.jpg",
        imdb: "https://www.imdb.com/name/nm0000158/?ref_=tt_cl_t1",
    }),
    new ActorModel({
        "fname": "Cate",
        "lname": "Blanchett",
        birth: "1969/05/14",
        img: "https://i.pinimg.com/originals/ed/a1/36/eda136c1a14124e3bdb7dc504ee2d947.jpg",
        imdb: "https://www.imdb.com/name/nm0000949/?ref_=tt_cl_t10",
    })];

    console.log(actorsData);
    // const actorsData= [{
    //     "first-name": "Bard",
    //     "last-name": "Pitt",
    //     birthday: "1963-12-18",
    //     image:"https://www.theplace2.ru/cache/archive/bred_pitt/img/brad_pitt_2-gthumb-gwdata1200-ghdata1200-gfitdatamax.jpg",
    //     IMDB: "https://www.imdb.com/name/nm0000093/?ref_=nv_sr_srsg_0",
    //     age: function() {
    //         return calc(this.birthday)
    //     }
    // },{
    //     "first-name": "Allison",
    //     "last-name": "Mack",
    //     birthday: "1982-7-29",
    //     image:"https://m.media-amazon.com/images/M/MV5BMTkxOTI4NDIzM15BMl5BanBnXkFtZTcwOTk3Mzc5Mg@@._V1_.jpg",
    //     IMDB: "https://www.imdb.com/name/nm0532928/?ref_=nm_mv_close",
    //     age: function() {
    //         return calc(this.birthday)
    //     }
    // },
    // {   
    //     "first-name": "Tom",
    //     "last-name": "Cruise",
    //     birthday: "1962/07/03",
    //     image: "https://www.lecturas.com/medio/2018/10/05/tom-cruise_c56207ff_800x1200.jpg",
    //     IMDB: "https://www.imdb.com/name/nm0000129/?ref_=nmmi_mi_nm",
    //     age: function() {
    //         return calc(this.birthday)
    //     }
    // },
    // {
    //     "first-name": "Christian",
    //     "last-name": "Bale",
    //     birthday: "1974/01/30",
    //     image: "https://www.theplace2.ru/cache/archive/christian_bale/img/546425_wayne2-gthumb-gwdata1200-ghdata1200-gfitdatamax.jpg",
    //     IMDB: "https://www.imdb.com/name/nm0000288/?ref_=tt_cl_t1",
    //     age: function() {
    //         return calc(this.birthday)
    //     }
    // },
    // {
    //     "first-name": "Gal",
    //     "last-name": "Gadot",
    //     birthday: "1985/04/30",
    //     image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gal-gadot-attends-the-2020-vanity-fair-oscar-party-hosted-news-photo-1587592214.jpg",
    //     IMDB: "https://www.imdb.com/name/nm2933757/?ref_=fn_al_nm_1",
    //     age: function() {
    //         return calc(this.birthday)
    //     }
    // },
    // {
    //     "first-name": "Uma",
    //     "last-name": "Thurman",
    //     birthday: "1970/04/29",
    //     image: "https://www.theplace2.ru/cache/archive/uma_thurman/img/Uma_Turman1-gthumb-gwdata1200-ghdata1200-gfitdatamax.jpg",
    //     IMDB: "https://www.imdb.com/name/nm0000235/?ref_=tt_cl_t15",
    //     age: function() {
    //         return calc(this.birthday)
    //     }
    // },
    // {
    //     "first-name": "Diane",
    //     "last-name": "Keaton",
    //     birthday: "1946/01/05",
    //     image: "https://www.kino.dk/sites/default/files/primary-pictures/dianekeaton.jpg",
    //     IMDB: "https://www.imdb.com/name/nm0000473/?ref_=tt_cl_t10",
    //     age: function() {
    //         return calc(this.birthday)
    //     }
    // },
    // {
    //     "first-name": "Tom",
    //     "last-name": "Hanks",
    //     birthday: "1956/07/09",
    //     image: "https://us.hola.com/imagenes/es/celebrities/2019032122293/tom-hanks-sorpresa-cumpleanos/0-168-324/tom-hanks-1a-a.jpg",
    //     IMDB: "https://www.imdb.com/name/nm0000158/?ref_=tt_cl_t1",
    //     age: function() {
    //         return calc(this.birthday)
    //     }
    // },
    // {
    //     "first-name": "Cate",
    //     "last-name": "Blanchett",
    //     birthday: "1969/05/14",
    //     image: "https://i.pinimg.com/originals/ed/a1/36/eda136c1a14124e3bdb7dc504ee2d947.jpg",
    //     IMDB: "https://www.imdb.com/name/nm0000949/?ref_=tt_cl_t10",
    //     age: function() {
    //         return calc(this.birthday)
    //     }
    // }];

    const [actors, setActors] = React.useState(actorsData);
    const [filterBy, setfilterBy] = React.useState("fname");


    function filterChange(e) {
        //case insensetive: option 1 - without Regex - setActors(actorsData.filter((actor) => actor["first-name"].toLowerCase().includes(e.target.value.toLowerCase())));
        setActors(actorsData.filter((actor) => { 
    console.log(actor[filterBy]);
    console.log(e.target.value);
    return new RegExp(e.target.value, 'i').test(actor[filterBy]);
        }));
    }

    return (
        <Container className="p-actors">
                <Form.Row>
                    <Form.Group sm={10} as={Col} controlId="formGridCity">
                        <Form.Control placeholder={`filter by ${filterBy}`} onChange={filterChange}/>
                    </Form.Group>
                    <Form.Group sm={2} as={Col} controlId="formGridState">
                        <Form.Control as="select" value={filterBy} onChange={e => setfilterBy(e.target.value)} >
                            <option value="fname">First Name</option>
                            <option value="lname">Last Name</option>
                            <option value="age">Age</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <div className="row">
                    {actors.map((actor, index) => <ActorCard key={index} actor={actors[index]}/>)}
                </div>
        </Container>
    )
}
