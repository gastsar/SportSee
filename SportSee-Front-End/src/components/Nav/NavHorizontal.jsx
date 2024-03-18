import Logo from '/assets/logo.svg';
import { Link } from 'react-router-dom';
export default function NavHorizontal() {
    return (
        <nav className='nav nav-horizontal'>
            <div>
                <img src={Logo} alt="Logo de l'entreprise SportSee" />
            </div>
            <ul>
            <Link to={`/`} className="cards">Acceuil</Link>
         
                <li>Profil</li>
                <li>Réglage</li>
                <li>Communauté</li>
            </ul>
        </nav>
    )
}
