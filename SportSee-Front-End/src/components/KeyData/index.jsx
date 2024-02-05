import PropTypes from 'prop-types';

export default function KeyData({ srcIcone, quatityName, quantitycount }) {
    const abbreviation = quatityName === 'Calories' ? 'kCal' : 'g';

    return (
        <div className='card__keyData'>
            <img src={srcIcone} alt="" />
            <div  className='card__keyData__info'>
                <span className='card__keyData__info__count'>{quantitycount}{abbreviation}</span>
                <span className='card__keyData__info__title'>{quatityName}</span>
            </div>
        </div>
    )
}

KeyData.propTypes = {
    srcIcone: PropTypes.string,
    quatityName: PropTypes.string,
    quantitycount: PropTypes.number,
};
