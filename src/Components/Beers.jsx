function Beers({ beer }) {
    return (
        <div className="beerItem">
            <h2>{beer.name}</h2>
            <img src={beer.image_url} alt={beer.name} />
        </div>
    );
}

export default Beers;