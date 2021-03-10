import React from 'react';
import Moment from 'react-moment';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const LaunchItem = ({
  launch: {
    flight_number,
    launch_date_local,
    launch_success,
    mission_name,
    rocket: { rocket_id, rocket_name, rocket_type },
  },
}) => {
  return (
    <li
      className={classNames({
        'text-success': launch_success,
        'text-danger': !launch_success,
      })}
    >
      <Link to={`/launch/${flight_number}`}>
        <h2>
          {mission_name}
          <small>({launch_success ? 'Success' : 'Failed'})</small>
        </h2>
        <span>
          <Moment format="YYYY/MM/DD">{launch_date_local}</Moment>
        </span>
        <span> - </span>
        <span>Flight Number: {flight_number}</span>
        <div>
          <span>ID: {rocket_id}</span> <span>Name: {rocket_name}</span>{' '}
          <span>Type: {rocket_type}</span>
        </div>
        <span>Read more</span>
      </Link>
    </li>
  );
};

export default LaunchItem;
