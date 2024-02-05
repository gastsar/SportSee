
import PropTypes from 'prop-types';
import iconeMedite from '../assets/iconeMedite.svg';
import iconePiscine from '../assets/iconePiscine.svg';
import iconePoid from '../assets/iconePoid.svg';
import iconeVelo from '../assets/iconeVelo.svg';

const icons = [
  { id: 1, svg: iconeMedite, },
  { id: 2, svg: iconePiscine },
  { id: 3, svg: iconePoid },
  { id: 4, svg: iconeVelo },
];

const ListNav = ({ svg }) => {
  return <img src={svg} width="50px" height="50px" className="icone-vertical" />;
};

ListNav.propTypes = {
  svg: PropTypes.string.isRequired,
};

export default function NavVertical() {
  return (
    <nav className='nav nav-vertical'>
      <ul>
        {icons.map((icon) => (
          <li key={icon.id}>
            <ListNav svg={icon.svg} />
          </li>
        ))}
      </ul>
      <span>Copiryght, SportSee 2020</span>
    </nav>
  );
}
