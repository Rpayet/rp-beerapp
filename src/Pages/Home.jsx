import Search from '../Components/Search';
import Beers from '../Components/Beers';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
    let [beers, setBeers] = useState([]);

    let fetchBeers = () => {
        axios.get('https://api.punkapi.com/v2/beers').then(response => {
            setBeers(response.data);
        });
    }

    useEffect(() => fetchBeers(), []);

    return (
        <>
        <Search/>

        <div className="beerList">
            {beers.map(beer => <Beers key={beer.id} beer={beer} />)}
        </div>
        </>
    )
}

export default Home;  