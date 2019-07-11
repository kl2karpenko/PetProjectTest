import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { compose } from "recompose";
import { connect } from 'react-redux';

import { withStyles, Grid } from "@material-ui/core";

import { getUsersList } from 'app/redux/users'

import styles from './styles';

function Welcome({ classes, users, getUsersList, ...rest }) {
  const [count, setCount] = useState(0);
  console.log(users, ' users');
  console.log(getUsersList, ' getUsersList');

  useEffect(() => {
    console.log('log');
    getUsersList();

    return () => {

    };
  }, [count, getUsersList, users]);

  return (
    <Grid>
      {users.map(item => <span>Hi</span>)}
    </Grid>
  );
}

Welcome.propTypes = {
  classes: PropTypes.object
};


const mapStateToProps = state => ({
  users: state.users.list || []
});

export default compose(
  connect(
    mapStateToProps,
    { getUsersList }
  ),
  withStyles(styles)
)(Welcome);
