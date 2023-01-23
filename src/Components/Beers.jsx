import {Link} from 'react-router-dom'

function Beers({ beer }) {
    return (
        <Link to={`/beer/${beer.id}`}>
            <div className="beerItems">
                <h2>{beer.name}</h2>
                <img src={beer.image_url} alt={beer.name} />
            </div>
        </Link>
    );
}

export default Beers;