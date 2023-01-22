import { Link } from 'react-router-dom';

function Header() {
    return (
        <div id="header">
            <Link to="/"><h1 className="title">Beer App !</h1></Link>
        </div>
    );
}

export default Header;
