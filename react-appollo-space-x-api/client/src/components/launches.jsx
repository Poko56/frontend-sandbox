import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import LaunchItem from './launche-item';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

const Launches = () => {
  return (
    <>
      <Query query={LAUNCHES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>...Loading</div>;
          if (error) {
            console.log(error);
            return <div>Error</div>;
          }
          console.log(data);

          return (
            <ul>
              {data.launches.map((launch) => (
                <LaunchItem
                  launch={launch}
                  key={`${launch.flight_number}_${launch.rocket.rocket_id}_${launch.launch_date_local}`}
                />
              ))}
            </ul>
          );
        }}
      </Query>
    </>
  );
};

export default Launches;
