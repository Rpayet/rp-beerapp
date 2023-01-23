import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';


function BeerItem() {

    let params = useParams();
    let [beers, setBeers] = useState();
    let fetchBeer = () => {
        axios.get('https://api.punkapi.com/v2/beers').then(response => {
            let beers = response.data;
            let beer = beers.find(beer => beer.id == params.id);

            setBeers(beer);
        });
    }

    useEffect(() => fetchBeer(), []);

    if (!beers) {
        return <h1>404 - À plus d'bières</h1>
    }

    return (
        <div id="item">
            <div className="item-details">
                <div className="details-img">
                    <img src={beers.image_url} alt={beers.name} />
                </div>
                <div className="details-description">
                    <h2>{beers.name}</h2>
                    <p>{beers.description}</p>
                </div>
            </div>
            <div className="item-info">
                <div className="info-display">
                    <p>Alc. {beers.abv}%</p>
                    <h4>Food Pairing</h4>
                    <ul>
                        {beers.food_pairing?.map((element,index) => <li key={index}>{element}</li>)}
                    </ul>
                    <p>Ibu {beers.ibu}</p>
                </div>
                <div className="item-img">

                </div>
            </div>
        </div>
    )
}

export default BeerItem;