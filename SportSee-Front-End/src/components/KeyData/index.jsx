import PropTypes from 'prop-types';

export default function KeyData(data) {
 
    return (
        <div className='card__keyData'>
            <img src={data?.icon} alt="" />
            <div  className='card__keyData__info'>
                <span className='card__keyData__info__count'>{data?.value}{data?.unit}</span>
                <span className='card__keyData__info__title'>{data?.name}</span>
            </div>
        </div>
    )
}

KeyData.propTypes = {
    icon: PropTypes.string,
    name: PropTypes.string,
    unit: PropTypes.string,
    value: PropTypes.string,
};
