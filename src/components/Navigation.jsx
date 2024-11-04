import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
    const location = useLocation();
    return (
        <ul>

            <li>
                <Link to="/about"
                    onClick={() => console.log('About link clicked')}
                    className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}
                >
                    About
                </Link>
            </li>
            <li>
                <Link to="/Portfolio"
                    onClick={() => console.log('Portfolio link clicked')}
                    className={location.pathname === '/Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    About
                </Link>
            </li>
            <li>
                <Link to="/Contact"
                    onClick={() => console.log('Contact link clicked')}
                    className={location.pathname === '/Contact' ? 'nav-link active' : 'nav-link'}
                >
                    About
                </Link>
            </li>
            <li>
                <Link to="/Resume"
                    onClick={() => console.log('Resume link clicked')}
                    className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}
                >
                    About
                </Link>
            </li>
        </ul>
    )
}