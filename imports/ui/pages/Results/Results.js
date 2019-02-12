import React, { Fragment } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Grid from '@material-ui/core/Grid';
import ResultsCard from '../../components/ResultsCard/ResultsCard';
import MapComponent from '../../components/Maps/Maps';
import MyMapComponent from '../../components/Maps/Maps';

const Results = ({ location }) => {
  const query = location.state ? location.state.query : '';
  console.log('QUERY', query);
  return (
    <Fragment>
      <Grid container>
        <Grid item>
          {/* <MapComponent /> */}
          <MyMapComponent />
        </Grid>
        <Grid>
          {/* Only show cards with open_now: true */}
          <ResultsCard />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Results;
