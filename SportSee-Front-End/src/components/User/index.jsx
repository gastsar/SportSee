import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import mockdata from '../../data/mockdata.json';
import { Checkbox } from '../CheckBock';
import { toggleApiUsage } from '../../utils/config';

function UserComponent({ id, firstName, lastName }) {
  const [isSelected, setIsSelected] = useState(false);

  let initialFirstName = firstName.charAt(0);
  let initialLastName = lastName.charAt(0);


  return (
    <div className='userContainer'>
      <Checkbox
        checked={isSelected}
        onChange={setIsSelected}
        label=''
      />
      {isSelected && toggleApiUsage()}
      <Link to={`/user/${id}`}>
        <h2>{initialFirstName}.{initialLastName}</h2>
      </Link>
    </div>
  );
}

function UserSelect() {
  const userData = mockdata;

  return (
    <section className='section'>
      <div className='selectUser'>
        {userData.user.map((user) => (
          <UserComponent
            key={user.id}
            id={user.id}
            firstName={user.userInfos.firstName}
            lastName={user.userInfos.lastName}
            age={user.userInfos.age}
          />
        ))}
      </div>
    </section>
  );
}

export default UserSelect;

UserComponent.propTypes = {
  id: PropTypes.number,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  age: PropTypes.number,
};
